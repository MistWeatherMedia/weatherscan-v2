"""
convert_scmt.py
Converts a Niagara-style SCMT .py config file into the weatherscan JSON config format.

Usage:
    python convert_scmt.py <input.py> <template.json> [output.json]

If output.json is omitted, it defaults to <input_stem>_converted.json.

T-station codes (e.g. T72648024) are converted to locationID format: T72648024:2:US
ICAO codes (e.g. KIMT) are kept as-is.
"""

import re
import sys
import json
import copy
from pathlib import Path


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def t_station_to_location_id(station: str) -> str:
    """Convert T72648024 -> T72648024:2:US.  ICAO codes are returned unchanged."""
    if station.startswith("T") and station[1:].isdigit():
        return f"{station}:2:US"
    return station


def parse_list_or_scalar(raw: str):
    """Parse a Python list literal or bare string/number from source text."""
    raw = raw.strip()
    if raw.startswith("["):
        # strip brackets, split on commas (ignoring trailing commas)
        inner = raw[1:-1].strip()
        items = [x.strip().strip("'\"") for x in inner.split(",") if x.strip().strip("'\"")]
        return items
    return raw.strip("'\"")


def extract_dsm_simple(text: str) -> dict:
    """
    Extract simple top-level dsm.set('key', 'value', ...) calls.
    Returns {key: value_string} for string/number values.
    """
    results = {}
    # Match: dsm.set('key', 'value_or_number', ...)
    pattern = re.compile(
        r"dsm\.set\(\s*'([^']+)'\s*,\s*('([^']*)'|(\d+))\s*,",
    )
    for m in pattern.finditer(text):
        key = m.group(1)
        val = m.group(3) if m.group(3) is not None else m.group(4)
        results[key] = val
    return results


def extract_data_blocks(text: str) -> list:
    """
    Walk through the file line by line and reconstruct d.* = ... / dsm.set blocks.
    Returns list of dicts: {'attrs': {name: value}, 'key': 'dsm key string'}
    """
    lines = text.splitlines()
    blocks = []
    current_attrs = {}
    i = 0
    while i < len(lines):
        line = lines[i].rstrip()

        # New data object — reset attrs
        if re.match(r"\s*d\s*=\s*twc\.Data\(\s*\)\s*$", line):
            current_attrs = {}
            i += 1
            continue

        # Attribute assignment: d.xxx = ...
        attr_match = re.match(r"\s*d\.(\w+)\s*=\s*(.*)", line)
        if attr_match:
            attr_name = attr_match.group(1)
            raw_val = attr_match.group(2).strip()
            # Multi-line list: collect until closing bracket
            if raw_val.startswith("[") and not raw_val.rstrip().endswith("]"):
                while not raw_val.rstrip().endswith("]"):
                    i += 1
                    raw_val += " " + lines[i].strip()
            current_attrs[attr_name] = raw_val
            i += 1
            continue

        # dsm.set with current d block
        dsm_match = re.match(r"\s*dsm\.set\(\s*'([^']+)'\s*,\s*d\s*,", line)
        if dsm_match and current_attrs:
            blocks.append({
                "attrs": dict(current_attrs),
                "key": dsm_match.group(1),
            })
            i += 1
            continue

        i += 1
    return blocks


def find_block(blocks: list, key: str) -> dict | None:
    """Return attrs for the first block matching the given dsm key."""
    for b in blocks:
        if b["key"] == key:
            return b["attrs"]
    return None


def find_blocks(blocks: list, key: str) -> list:
    """Return all attr dicts for blocks matching the dsm key."""
    return [b["attrs"] for b in blocks if b["key"] == key]


def get_attr_list(attrs: dict, name: str) -> list:
    """Parse a list attribute, always returning a list."""
    raw = attrs.get(name, "")
    if not raw:
        return []
    val = parse_list_or_scalar(raw)
    if isinstance(val, list):
        return val
    return [val] if val else []


def get_attr_str(attrs: dict, name: str) -> str:
    val = attrs.get(name, "")
    if isinstance(val, str):
        return parse_list_or_scalar(val) if val else ""
    return str(val)


# ---------------------------------------------------------------------------
# Radar: BFG mapcut → lat/lon + zoom
# ---------------------------------------------------------------------------
#
# Calibrated from XML bounds + two known anchor points:
#   XML: SW (22.197152N, -126.834935W), NE (50.231604N, -65.178922W)
#        VerticalAdjustment = 1.1985928 (multiplied against Mercator Y before linear mapping)
#   Anchor verification: Niagara WI (45.78N, -88.08W) → pixel (24317, 15796)
#                        Islip NY (40.7961N, -73.1006W) → pixel (31578, 12455)
#   All four points confirmed accurate to ≤0.001°
#
# X axis (lon): lon = -138.245827 + px * 0.00206299
# Y axis (lat): adj_merc(lat) = merc_y(lat) * 1.1985928
#               adj_merc = _A_MERC + py * _B_MERC  →  invert to get lat
# Zoom reference: zoom 6 ↔ mapMilesSize width=340 across final 248 px

import math as _math

_A_LON    = -138.245827    # lon at BFG px=0
_B_LON    =    0.00206299  # lon degrees per BFG pixel (x)
_VERT_ADJ =    1.1985928   # Mercator Y adjustment factor
# Y linear coefficients (in adjusted-Mercator space):
_A_MERC   =    0.40186505  # adj_merc at py=0  (derived from XML corners)
_B_MERC   =    0.00004291  # adj_merc units per BFG pixel (y)
_REF_MI_PER_PX = 340 / 248  # reference zoom-6 (1.371 mi/px)
_MAX_ZOOM = 8.5


def _bfg_px_to_lon(px: float) -> float:
    return _A_LON + px * _B_LON


def _bfg_py_to_lat(py: float) -> float:
    adj_m = _A_MERC + py * _B_MERC
    raw_m = adj_m / _VERT_ADJ          # undo the vertical adjustment
    return _math.degrees(2 * _math.atan(_math.exp(raw_m)) - _math.pi / 2)


def _mapcut_center_latlon(mapcut_coord, mapcut_size):
    """Return (lat, lon) of the center of a BFG mapcut."""
    cx = mapcut_coord[0] + mapcut_size[0] / 2
    cy = mapcut_coord[1] + mapcut_size[1] / 2
    return _bfg_py_to_lat(cy), _bfg_px_to_lon(cx)


def _mapcut_zoom(miles_wide: float, final_w: int) -> float:
    """Estimate Leaflet-style zoom from miles span and output pixel width."""
    mi_per_px = miles_wide / final_w
    zoom = 6 + _math.log2(_REF_MI_PER_PX / mi_per_px)
    return min(round(zoom * 10) / 10, _MAX_ZOOM)  # round to nearest 0.1, cap at 8.5


_SCALE = 2.25   # 480p source → 1080p output


def _pixel_to_radar_pos(px: int, py: int, final_w: int, final_h: int):
    """
    Convert a TWC config (px, py) city-dot position (bottom-origin) to
    JSON radarCity dotTopPos / dotLeftPos (top-origin, scaled ×3 to 1080p).
    """
    dot_left = px * _SCALE
    dot_top  = (final_h - py) * _SCALE   # flip Y then scale
    return dot_top, dot_left


def extract_radar_mapcuts(py_text: str) -> list:
    """
    Find all mercator radar mapcuts in the .py file and return structured dicts:
      {
        'key': 'Config.1.Core1.0.Local_LocalDoppler.0',
        'lat': 45.78, 'lon': -88.08, 'zoom': 7.25,
        'final_w': 720, 'final_h': 480,
        'cities': [{'locationName': 'Niagara', 'dotTopPos': '...', 'dotLeftPos': '...'}]
      }
    """
    import ast

    results = []

    # Find every wxdata.setMapData(key, d, ...) that is followed by a dsm.set for the same key
    # Strategy: collect all twc.Data map blocks (those with mapcutCoordinate)
    # then for each dsm.set with matching key, grab the product block's textString for cities.

    # --- Step 1: parse all map data blocks ---------------------------------
    map_block_re = re.compile(
        r"d\s*=\s*twc\.Data\(mapName='(mercator[^']+)'.*?"
        r"mapcutCoordinate=\((\d+),(\d+)\).*?"
        r"mapcutSize=\((\d+),(\d+)\).*?"
        r"mapFinalSize=\((\d+),(\d+)\).*?"
        r"mapMilesSize=\((\d+),(\d+)\)",
        re.S,
    )
    # Also collect which keys each map block is assigned to (wxdata.setMapData)
    set_map_re  = re.compile(r"wxdata\.setMapData\(\s*'([^']+)'\s*,\s*d\s*,")

    # Walk through and associate map blocks with their keys
    # We'll do it by scanning linearly
    lines_text = py_text

    map_blocks_with_keys = []

    for mb in map_block_re.finditer(lines_text):
        map_name   = mb.group(1)
        coord      = (int(mb.group(2)), int(mb.group(3)))
        size       = (int(mb.group(4)), int(mb.group(5)))
        final_size = (int(mb.group(6)), int(mb.group(7)))
        miles_size = (int(mb.group(8)), int(mb.group(9)))

        # Find all wxdata.setMapData calls between this block and the next twc.Data(mapName= block
        next_mb = map_block_re.search(lines_text, mb.end())
        search_end = next_mb.start() if next_mb else len(lines_text)
        segment = lines_text[mb.end():search_end]

        keys = [m.group(1) for m in set_map_re.finditer(segment)]
        if not keys:
            continue

        # Filter: only radar/doppler, not satellite
        keys = [k for k in keys if ("radar" in k.lower() or "doppler" in k.lower())
                and "satellite" not in k.lower()]
        if not keys:
            continue

        map_blocks_with_keys.append({
            "keys":       keys,
            "map_name":   map_name,
            "coord":      coord,
            "size":       size,
            "final_size": final_size,
            "miles_size": miles_size,
            "end_pos":    mb.end(),
        })

    # --- Step 2: for each key, find the product dsm.set block and extract city labels ---
    dsm_product_re = re.compile(r"dsm\.set\(\s*'([^']+)'\s*,\s*d\s*,")

    # Build a map of key → product block text (look for dsm.set after a twc.Data() product block)
    # Collect all product blocks
    product_blocks = {}   # key → textString entries

    # Find all dsm.set(key, d, ...) occurrences and grab the preceding twc.Data() block's textString
    data_re = re.compile(r"d\s*=\s*twc\.Data\(\s*\n")

    for dsm_m in dsm_product_re.finditer(py_text):
        key = dsm_m.group(1)
        if ("radar" not in key.lower() and "doppler" not in key.lower()) or "satellite" in key.lower():
            continue

        # Find most recent 'd = twc.Data()' (product block — no mapName)
        prior = py_text[:dsm_m.start()]
        data_start = prior.rfind("d = twc.Data(")
        if data_start == -1:
            continue

        # Make sure this is a product block (no mapName)
        block_text = py_text[data_start:dsm_m.start()]
        if "mapName" in block_text:
            continue

        # Extract city names from textString (first layer, same order as tiffImage dots)
        ts_raw = _find_list_block_from_text(block_text, "textString")
        ts_names = []   # ordered list of (name, label_px, label_py)
        if ts_raw:
            try:
                ts_data = ast.literal_eval(ts_raw)
                if ts_data:
                    for entry in ts_data[0][1]:
                        pos = entry[0]
                        ts_names.append({"name": entry[1], "label_px": pos[0], "label_py": pos[1]})
            except Exception:
                pass

        # Extract locatorDot positions from tiffImage (non-Outline pass, same order as textString)
        ti_raw = _find_list_block_from_text(block_text, "tiffImage")
        dot_positions = []   # ordered list of (dot_px, dot_py)
        if ti_raw:
            try:
                ti_data = ast.literal_eval(ti_raw)
                for layer in ti_data:
                    layer_type = layer[0][0]
                    if layer_type.endswith("Outline"):
                        continue
                    for entry in layer[1]:
                        pos = entry[0]
                        dot_positions.append({"px": pos[0], "py": pos[1]})
                    break   # only need one non-outline pass
            except Exception:
                pass

        # Pair dot positions with city names by index
        cities = []
        for i, name_info in enumerate(ts_names):
            dot = dot_positions[i] if i < len(dot_positions) else {"px": name_info["label_px"], "py": name_info["label_py"]}
            cities.append({
                "name":     name_info["name"],
                "px":       dot["px"],        # locatorDot x (used for dotLeftPos)
                "py":       dot["py"],         # locatorDot y (used for dotTopPos)
                "label_px": name_info["label_px"],   # text label offset from dot
                "label_py": name_info["label_py"],
            })

        # Extract labeledTiffImage icons (interstateSign, stateHwySign, etc.)
        # Use only the non-Outline pass (strip "Outline" suffix for the type name).
        lt_raw = _find_list_block_from_text(block_text, "labeledTiffImage")
        icons = []
        if lt_raw:
            try:
                lt_data = ast.literal_eval(lt_raw)
                seen_icon_types = set()
                for layer in lt_data:
                    header  = layer[0]          # ( ('interstateSignOutline',...), font, size, color, ... )
                    entries = layer[1]
                    raw_type = header[0][0]     # e.g. 'interstateSignOutline' or 'interstateSign'
                    if raw_type.endswith("Outline"):
                        continue               # skip outline pass
                    icon_type = raw_type       # e.g. 'interstateSign', 'stateHwySign'
                    for entry in entries:
                        pos  = entry[0]        # (x, y)
                        text = str(entry[1])   # e.g. '85'
                        icons.append({"type": icon_type, "text": text,
                                      "px": pos[0], "py": pos[1]})
            except Exception:
                pass

        product_blocks[key] = {"cities": cities, "icons": icons}

    # --- Step 3: assemble results -------------------------------------------
    seen_keys = set()
    for mb_info in map_blocks_with_keys:
        coord      = mb_info["coord"]
        size       = mb_info["size"]
        final_size = mb_info["final_size"]
        miles_size = mb_info["miles_size"]

        lat, lon = _mapcut_center_latlon(coord, size)
        zoom     = _mapcut_zoom(miles_size[0], final_size[0])

        final_w, final_h = final_size

        for key in mb_info["keys"]:
            if key in seen_keys:
                continue
            seen_keys.add(key)

            pb = product_blocks.get(key, {"cities": [], "icons": []})

            radar_cities = []
            for c in pb["cities"]:
                dot_top, dot_left = _pixel_to_radar_pos(c["px"], c["py"], final_w, final_h)
                # nameMargin = offset from dot center to label bottom-left, scaled
                name_left = round((c["label_px"] - c["px"]) * _SCALE)
                name_top  = round((c["py"] - c["label_py"]) * _SCALE)  # y flipped
                radar_cities.append({
                    "locationName":   c["name"],
                    "dotTopPos":      str(round(dot_top)),
                    "dotLeftPos":     str(round(dot_left)),
                    "nameTopMargin":  str(name_top),
                    "nameLeftMargin": str(name_left),
                })

            radar_icons = []
            for ic in pb["icons"]:
                top  = (final_h - ic["py"]) * _SCALE
                left = ic["px"] * _SCALE
                radar_icons.append({
                    "type":    ic["type"],
                    "text":    ic["text"],
                    "topPos":  str(round(top)),
                    "leftPos": str(round(left)),
                })

            results.append({
                "key":        key,
                "lat":        round(lat, 4),
                "lon":        round(lon, 4),
                "zoom":       zoom,
                "final_w":    final_w,
                "final_h":    final_h,
                "cities":     radar_cities,
                "radarIcons": radar_icons,
            })

    return results


def _find_list_block_from_text(text: str, key: str) -> str | None:
    """Same as _find_list_block but operates on arbitrary text."""
    pattern = re.compile(r"\b" + re.escape(key) + r"\s*=\s*(\[)")
    m = pattern.search(text)
    if not m:
        return None
    bracket_start = m.start(1)
    depth = 0
    for i in range(bracket_start, len(text)):
        c = text[i]
        if   c == "[": depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                return text[bracket_start:i + 1]
    return None


# ---------------------------------------------------------------------------
# Main extraction
# ---------------------------------------------------------------------------

def extract_fields(py_text: str) -> dict:
    """
    Parse the .py file and return a flat dict of all interesting fields.
    """
    simple = extract_dsm_simple(py_text)
    blocks = extract_data_blocks(py_text)

    f = {}

    # ---- Top-level simple fields -------------------------------------------
    f["primaryObsStation"]   = simple.get("primaryObsStation", "")
    f["secondaryObsStation"] = simple.get("secondaryObsStation", "")
    f["primaryCoopId"]       = simple.get("primaryCoopId", "")
    f["primaryClimoStation"] = simple.get("primaryClimoStation", "")
    f["primaryZone"]         = simple.get("primaryZone", "")
    f["primaryCounty"]       = simple.get("primaryCounty", "")
    f["primaryForecastName"] = simple.get("primaryForecastName", "")
    f["dmaCode"]             = simple.get("dmaCode", "")
    f["stateCode"]           = simple.get("stateCode", "")
    f["zipCode"]             = simple.get("zipCode", "")
    f["wdr"]                 = simple.get("wdr", "")   # NWS office
    f["wda"]                 = simple.get("wda", "")
    f["msoName"]             = simple.get("msoName", "")
    f["affiliateName"]       = simple.get("affiliateName", "")
    f["headendName"]         = simple.get("headendName", "")
    f["timeZone"]            = re.search(r"wxdata\.setTimeZone\('([^']+)'\)", py_text)
    f["timeZone"]            = f["timeZone"].group(1) if f["timeZone"] else ""

    # ---- Main city (Core1.0 / Core4.0 share primary location) --------------
    # Primary almanac has lat/lon
    almanac = find_block(blocks, "Config.1.Core1.0.Local_Almanac.0")
    f["mainLocName"]  = get_attr_str(almanac, "locName")  if almanac else f["primaryForecastName"]
    f["mainLat"]      = get_attr_str(almanac, "latitude")  if almanac else ""
    f["mainLon"]      = get_attr_str(almanac, "longitude") if almanac else ""
    f["mainCoopId"]   = get_attr_str(almanac, "coopId")    if almanac else f["primaryCoopId"]

    # Primary obs station as locationID
    f["mainLocationID"] = t_station_to_location_id(f["primaryObsStation"]) if f["primaryObsStation"] else ""

    # Bulletin (zone name)
    bulletin = find_block(blocks, "Config.1.Core1.0.Local_WeatherBulletin.0") or \
               find_block(blocks, "Config.1.Core4.0.Local_WeatherBulletin.0")
    f["mainBulletinName"] = get_attr_str(bulletin, "locName") if bulletin else ""
    f["mainZone"]         = get_attr_str(bulletin, "zone")    if bulletin else f["primaryZone"]

    # ---- Extra city / secondary forecast area (Core4.1 / Core2.1 = Florence) --
    alma2 = find_block(blocks, "Config.1.Core4.1.Local_DaypartForecast.0") or \
            find_block(blocks, "Config.1.Core2.1.Local_DaypartForecast.0")
    f["extraLocName"] = get_attr_str(alma2, "locName") if alma2 else ""
    f["extraCoopId"]  = get_attr_str(alma2, "coopId")  if alma2 else ""

    extra_cc = find_block(blocks, "Config.1.Core2.1.Local_CurrentConditions.0") or \
               find_block(blocks, "Config.1.Core4.1.Local_CurrentConditions.0")
    if extra_cc:
        stations = get_attr_list(extra_cc, "obsStation")
        names    = get_attr_list(extra_cc, "locName")
        # primary of the pair is the local one (usually first)
        f["extraObsStation"] = t_station_to_location_id(stations[0]) if stations else ""
        f["extraLocNameCC"]  = names[0].strip() if names else f["extraLocName"]
    else:
        f["extraObsStation"] = ""
        f["extraLocNameCC"]  = f["extraLocName"]

    extra_bull = find_block(blocks, "Config.1.Core4.1.Local_WeatherBulletin.0") or \
                 find_block(blocks, "Config.1.Core2.1.Local_WeatherBulletin.0")
    f["extraBulletinName"] = get_attr_str(extra_bull, "locName") if extra_bull else ""
    f["extraZone"]         = get_attr_str(extra_bull, "zone")    if extra_bull else ""

    # ---- Current conditions (primary pair) ----------------------------------
    cc = find_block(blocks, "Config.1.Core1.0.Local_CurrentConditions.0")
    if cc:
        f["ccStations"] = get_attr_list(cc, "obsStation")
        f["ccNames"]    = [n.strip() for n in get_attr_list(cc, "locName")]
    else:
        f["ccStations"] = [f["primaryObsStation"]] if f["primaryObsStation"] else []
        f["ccNames"]    = [f["primaryForecastName"]] if f["primaryForecastName"] else []

    # ---- Local observations (city ticker) -----------------------------------
    obs0 = find_block(blocks, "Config.1.Core1.0.Local_LocalObservations.0")
    if obs0:
        f["localObs0Stations"] = get_attr_list(obs0, "obsStation")
        f["localObs0Names"]    = [n.strip() for n in get_attr_list(obs0, "locName")]
    else:
        f["localObs0Stations"] = []
        f["localObs0Names"]    = []

    # LocalObservations.1
    obs1 = find_block(blocks, "Config.1.Core1.0.Local_LocalObservations.1")
    if obs1:
        f["localObs1Stations"] = get_attr_list(obs1, "obsStation")
        f["localObs1Names"]    = [n.strip() for n in get_attr_list(obs1, "locName")]
    else:
        f["localObs1Stations"] = []
        f["localObs1Names"]    = []

    # nearbyCities = all stations from both .0 and .1
    f["nearbyCitiesStations"] = f["localObs0Stations"] + f["localObs1Stations"]
    f["nearbyCitiesNames"]    = f["localObs0Names"]    + f["localObs1Names"]

    # City ticker also uses the full merged list
    f["cityTickerStations"] = f["nearbyCitiesStations"]
    f["cityTickerNames"]    = f["nearbyCitiesNames"]

    # Travel ticker
    travel_cc = find_block(blocks, "Config.1.CityTicker_TravelCitiesCurrentConditions.0")
    f["travelTickerStations"] = get_attr_list(travel_cc, "obsStation") if travel_cc else []
    f["travelTickerNames"]    = [n.strip() for n in get_attr_list(travel_cc, "locName")] if travel_cc else []

    travel_fcst = find_block(blocks, "Config.1.CityTicker_TravelCitiesForecast.0")
    if travel_fcst:
        f["travelFcstCoopIds"] = get_attr_list(travel_fcst, "coopId")
        f["travelFcstNames"]   = [n.strip() for n in get_attr_list(travel_fcst, "locName")]
    else:
        f["travelFcstCoopIds"] = []
        f["travelFcstNames"]   = []

    # ---- Airport -----------------------------------------------------------
    # Local airports
    local_airports = []
    for slot in ["0", "1", "2", "3"]:
        a = find_block(blocks, f"Config.1.Airport.0.Local_LocalAirportConditions.{slot}")
        if a:
            local_airports.append({
                "airportName": get_attr_str(a, "locName"),
                "iataCode":    get_attr_str(a, "airportId"),
            })
    f["localAirports"] = local_airports

    # National airports
    national_airports = []
    for slot in ["0", "1", "2", "3"]:
        na = find_block(blocks, f"Config.1.Airport.0.Local_NationalAirportConditions.{slot}")
        if na:
            ids   = get_attr_list(na, "airportId")
            names = get_attr_list(na, "locName")
            for iata, name in zip(ids, names):
                national_airports.append({"airportName": name, "iataCode": iata})
    f["nationalAirports"] = national_airports

    # Airport cc ticker
    airport_ticker = find_block(blocks, "Config.1.CityTicker_AirportDelays.0")
    if airport_ticker:
        f["airportTickerIds"]   = get_attr_list(airport_ticker, "airportId")
        f["airportTickerNames"] = get_attr_list(airport_ticker, "locName")
    else:
        f["airportTickerIds"]   = []
        f["airportTickerNames"] = []

    # ---- Ski ---------------------------------------------------------------
    ski_resorts = []
    for slot in ["0", "1", "2", "3"]:
        s = find_block(blocks, f"Config.1.Ski.0.Local_SkiConditions.{slot}")
        if s:
            names  = [n.strip() for n in get_attr_list(s, "locName")]
            ski_ids = get_attr_list(s, "skiId")
            for n, sid in zip(names, ski_ids):
                ski_resorts.append({"displayName": n, "resortId": sid})
    f["skiResorts"] = ski_resorts

    # ---- Travel destinations -----------------------------------------------
    dest_all = []
    for slot in ["0", "1", "2"]:
        dest = find_block(blocks, f"Config.1.Travel.0.Local_Destinations.{slot}")
        if dest:
            names    = [n.strip() for n in get_attr_list(dest, "locName")]
            coop_ids = get_attr_list(dest, "coopId")
            for n, cid in zip(names, coop_ids):
                dest_all.append({"locationName": n, "coopId": cid})
    f["travelDestinations"] = dest_all

    # ---- Affiliate / intro -------------------------------------------------
    intro = find_block(blocks, "Config.1.Core1.0.Local_NetworkIntro.0")
    f["affiliateNameDisplay"] = get_attr_str(intro, "affiliateName") if intro else ""
    f["introBG"] = get_attr_str(intro, "bkgImage") if intro else ""

    # slidesBG comes from Config.1.Core1.0's bkgImage (the core package itself)
    core1 = find_block(blocks, "Config.1.Core1.0")
    f["slidesBG"] = get_attr_str(core1, "bkgImage") if core1 else ""

    # Background_Default.0 affiliateLogo → providerImage
    bg_default = find_block(blocks, "Config.1.Background_Default.0")
    f["providerImage"] = get_attr_str(bg_default, "affiliateLogo") if bg_default else ""

    # ---- Health ------------------------------------------------------------
    health_aq = find_block(blocks, "Config.1.Health.0.Local_AirQualityForecast.0")
    f["healthAQ"] = get_attr_str(health_aq, "aq") if health_aq else ""

    # ---- Radar mapcuts -----------------------------------------------------
    f["radarMapcuts"] = extract_radar_mapcuts(py_text)

    return f


# ---------------------------------------------------------------------------
# JSON builder
# ---------------------------------------------------------------------------

def build_json(f: dict, template: dict) -> dict:
    """
    Clone the template JSON and replace location-specific values
    derived from the parsed .py fields.
    """
    out = copy.deepcopy(template)
    sys_cfg = out["jsonSystemSettings"]

    # Provider name from affiliate
    if f["affiliateNameDisplay"]:
        sys_cfg["appearanceSettings"]["providerName"] = f["affiliateNameDisplay"]
    if f["providerImage"]:
        sys_cfg["appearanceSettings"]["providerImage"] = f["providerImage"]

    # System location name
    sys_cfg["systemLocation"] = f["mainLocName"] or f["primaryForecastName"]

    # ---- Main city ---------------------------------------------------------
    mc = sys_cfg.get("mainCity", {})
    mc["locationName"]        = f["mainLocName"]
    mc["bulletinName"]        = f["mainBulletinName"]
    mc["lat"]                 = f["mainLat"]
    mc["lon"]                 = f["mainLon"]
    mc["obsName"]             = f["mainLocName"]
    mc["locationID"]          = f["mainLocationID"]
    mc["almanacLocationName"] = f["mainLocName"]
    if f["introBG"]:
        mc["introBG"]  = f["introBG"]
    if f["slidesBG"]:
        mc["slidesBG"] = f["slidesBG"]
    sys_cfg["mainCity"] = mc

    # ---- Extra city --------------------------------------------------------
    ec_list = sys_cfg.get("extraCity", {}).get("cities", [])
    if ec_list and f["extraLocName"]:
        ec_list[0]["locationName"]  = f["extraLocNameCC"]
        ec_list[0]["bulletinName"]  = f["extraBulletinName"]
        ec_list[0]["lat"]           = ""   # not in .py; user must fill
        ec_list[0]["lon"]           = ""
        ec_list[0]["obsName"]       = f["extraLocNameCC"]
        ec_list[0]["locationID"]    = f["extraObsStation"]

    # ---- LBar cities -------------------------------------------------------
    lbar = sys_cfg.get("LBar", {})

    # cc ticker cities — built from local obs stations
    cc_cities = []
    for station, name in zip(f["cityTickerStations"], f["cityTickerNames"]):
        cc_cities.append({
            "locationName": name,
            "locationID":   t_station_to_location_id(station),
            "lat": "",
            "lon": "",
        })
    if cc_cities:
        lbar["ccTicker"]["cities"] = cc_cities

    # travel cities ticker
    travel_cities = []
    for station, name in zip(f["travelTickerStations"], f["travelTickerNames"]):
        travel_cities.append({
            "locationName": name,
            "locationID":   t_station_to_location_id(station),
            "lat": "",
            "lon": "",
        })
    if travel_cities:
        lbar["ccTicker"]["travelCities"] = travel_cities

    # LBar locations (extralocal-style) — primary CC pair
    lbar_cities = []
    for station, name in zip(f["ccStations"], f["ccNames"]):
        lbar_cities.append({
            "locationName": name,
            "lat":          "",
            "lon":          "",
            "obsName":      name,
            "locationID":   t_station_to_location_id(station),
        })
    if lbar_cities:
        lbar["locations"]["cities"] = lbar_cities

    # LBar airport ticker
    airport_ticker_list = []
    for iata, name in zip(f["airportTickerIds"], f["airportTickerNames"]):
        airport_ticker_list.append({"airportName": name, "iataCode": iata})
    if airport_ticker_list:
        lbar["ccTicker"]["airports"] = airport_ticker_list

    sys_cfg["LBar"] = lbar

    # ---- Nearby cities (Local_LocalObservations.1) -------------------------
    if f["nearbyCitiesStations"]:
        nearby = []
        for station, name in zip(f["nearbyCitiesStations"], f["nearbyCitiesNames"]):
            nearby.append({
                "obsName":    name,
                "locationID": t_station_to_location_id(station),
            })
        sys_cfg["nearbyCities"] = {
            "autoFind": False,
            "cities": nearby,
        }

    # ---- Airport -----------------------------------------------------------
    airport_cfg = sys_cfg.get("airport", {})
    if f["localAirports"]:
        airport_cfg["main"] = [
            {"airportName": a["airportName"], "iataCode": a["iataCode"]}
            for a in f["localAirports"]
        ]
    if f["nationalAirports"]:
        airport_cfg["national"] = [
            {"airportName": a["airportName"], "iataCode": a["iataCode"]}
            for a in f["nationalAirports"]
        ]
    sys_cfg["airport"] = airport_cfg

    # ---- Ski ---------------------------------------------------------------
    if f["skiResorts"]:
        sys_cfg["ski"]["resorts"] = [
            {
                "displayName": r["displayName"],
                "state":       "",    # not in .py
                "resortId":    r["resortId"],
            }
            for r in f["skiResorts"]
        ]

    # ---- Health ------------------------------------------------------------
    health = sys_cfg.get("health", {})
    health["locationName"] = f["mainLocName"]
    health["lat"]          = f["mainLat"]
    health["lon"]          = f["mainLon"]
    health["obsName"]      = f["mainLocName"]
    health["locationID"]   = f["mainLocationID"]
    sys_cfg["health"] = health

    # ---- Garden ------------------------------------------------------------
    garden = sys_cfg.get("garden", {})
    garden["locationName"] = f["mainLocName"]
    garden["lat"]          = f["mainLat"]
    garden["lon"]          = f["mainLon"]
    sys_cfg["garden"] = garden

    # ---- Golf tee time -----------------------------------------------------
    golf = sys_cfg.get("golf", {})
    golf["teeTime"] = {
        "locationName": f["mainLocName"],
        "lat":          f["mainLat"],
        "lon":          f["mainLon"],
    }
    if f["mainLocationID"]:
        for c in golf.get("courses", []):
            # Leave courses as-is (template-specific)
            pass
    sys_cfg["golf"] = golf

    # ---- Upper display city ------------------------------------------------
    udc = sys_cfg.get("upperDisplayCity", {})
    udc["locationName"] = f["mainLocName"]
    udc["lat"]          = f["mainLat"]
    udc["lon"]          = f["mainLon"]
    udc["airportName"]  = f["mainLocName"]
    sys_cfg["upperDisplayCity"] = udc

    # ---- Travel destination forecast ----------------------------------------
    if f["travelDestinations"]:
        sys_cfg["travel"]["destinationForecast"] = [
            {"locationName": d["locationName"], "lat": "", "lon": ""}
            for d in f["travelDestinations"]
        ]

    # ---- Radar mapcuts -----------------------------------------------------
    # Build a lookup: config key → radar dict
    radar_by_key = {r["key"]: r for r in f.get("radarMapcuts", [])}

    def _radar_dict(key: str) -> dict | None:
        r = radar_by_key.get(key)
        if r is None:
            return None
        d = {
            "lat":         str(r["lat"]),
            "lon":         str(r["lon"]),
            "auto":        False,
            "zoom":        r["zoom"],
            "radarCities": r["cities"],
        }
        if r.get("radarIcons"):
            d["radarIcons"] = r["radarIcons"]
        return d

    # LBar / global radar — use the mini Radar_LocalDoppler (zoom ~6)
    lbar_radar = _radar_dict("Config.1.Radar_LocalDoppler.0")
    if lbar_radar:
        lbar_radar["legend"] = False
        sys_cfg["LBar"]["radar"] = lbar_radar

    # mainCity radar — use Core1.0 Local_LocalDoppler (primary full doppler)
    main_radar = _radar_dict("Config.1.Core1.0.Local_LocalDoppler.0")
    if main_radar:
        sys_cfg["mainCity"]["radar"] = main_radar

    # extraCity radar — use Core2.1 or Core4.1 Local_LocalDoppler
    extra_radar = (
        _radar_dict("Config.1.Core2.1.Local_LocalDoppler.0") or
        _radar_dict("Config.1.Core4.1.Local_LocalDoppler.0")
    )
    if extra_radar and sys_cfg.get("extraCity", {}).get("cities"):
        sys_cfg["extraCity"]["cities"][0]["radar"] = extra_radar

    return out


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    py_path       = Path(sys.argv[1])
    template_path = Path(sys.argv[2])
    out_path      = Path(sys.argv[3]) if len(sys.argv) > 3 else py_path.with_name(py_path.stem + "_converted.json")

    py_text  = py_path.read_text(encoding="utf-8", errors="replace")
    template = json.loads(template_path.read_text(encoding="utf-8"))

    fields  = extract_fields(py_text)
    result  = build_json(fields, template)

    out_path.write_text(json.dumps(result, indent=4), encoding="utf-8")
    print(f"Written → {out_path}")

    # Print summary
    print("\n=== Extracted fields ===")
    for k, v in fields.items():
        if isinstance(v, list):
            print(f"  {k}: [{', '.join(str(i) for i in v[:5])}{'...' if len(v) > 5 else ''}]")
        else:
            print(f"  {k}: {v!r}")


if __name__ == "__main__":
    main()