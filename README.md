<p align="center">
  <img src="https://i.postimg.cc/jqpN9c26/mistwxscanv2banner.png" alt="Weatherscan v2 by Mist Weather Media">
</p>

# Weatherscan v2

A recreation of The Weather Channel's **Weatherscan**, built with HTML, CSS, and JavaScript by **Mist Weather Media**. Bring back the familiar forecast loop, local radar, music, and narration—and customize the lineup for your area.

**[Watch the live demo](https://v2.weatherscan.net)** · **[Get help on Discord](https://discord.gg/hV2w5sZQxz)** · **[Read the changelog](changelog.txt)**

## Contents

- [Run it on your computer](#run-it-on-your-computer)
- [Configure your simulator](#configure-your-simulator)
- [Choose your location](#choose-your-location)
- [Build your forecast lineup](#build-your-forecast-lineup)
- [Customize the appearance](#customize-the-appearance)
- [Music and narration](#music-and-narration)
- [Set up traffic](#set-up-traffic)
- [More configuration options](#more-configuration-options)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Credits and license](#credits-and-license)

## Run it on your computer

### 1. Install Node.js

Download and install an **LTS** version of [Node.js](https://nodejs.org/en/download). Node.js runs the local server; npm, included with Node.js, installs its dependencies.

After installation, open a new terminal and check that both commands work:

```sh
node --version
npm --version
```

You will also need an internet connection for live weather data, maps, and other external services.

### 2. Download the project

On this repository's GitHub page, select **Code → Download ZIP**, then extract the ZIP into a folder on your computer.

<details>
<summary><strong>Prefer Git? Clone the repository instead.</strong></summary>

If you have Git installed, run:

```sh
git clone https://github.com/MistWeatherMedia/weatherscan-v2.git
cd weatherscan-v2
```

</details>

### 3. Install the dependencies

Open a terminal **inside the project folder**—the folder containing `package.json` and `app.js`. On Windows, you can open that folder in File Explorer, type `cmd` into the address bar, and press Enter. On macOS or Linux, open Terminal and use `cd` to enter the extracted folder.

Run:

```sh
npm ci --omit=dev
```

This installs dependencies from the included lockfile. You only need to do this on the first run or after downloading an update with changed dependencies. See the [npm documentation](https://docs.npmjs.com/cli/v11/commands/npm-ci/) for details.

### 4. Start the simulator

```sh
npm start
```

Keep the terminal open, then visit **[http://localhost:3000](http://localhost:3000)** in your browser. Allow time for the startup animation and data loading. Click inside the page if the browser blocks audio.

The default configuration finds a location using your public IP address. You can start with those defaults and customize the simulator afterward. **A HERE API key is only needed if you enable traffic.**

To stop the server, press **Ctrl+C** in the terminal. Run `npm start` again whenever you want to use it.

> [!IMPORTANT]
> Open the simulator through `http://localhost:3000`. Opening `main/index.html` directly does not provide the local server routes needed by airport and coastal data.

## Configure your simulator

Your settings live in **[`main/configs/yourConfig.json`](main/configs/yourConfig.json)**. Open it in a plain-text or code editor, such as VS Code. Make a backup before changing it.

All settings are inside the outer `jsonSystemSettings` object. A setting written here as `appearanceSettings.providerName` means: find `appearanceSettings`, then change its `providerName` value.

**How to make a change:**

1. Find the setting in `yourConfig.json`.
2. Edit its value, preserving the surrounding settings.
3. Save the file.
4. Refresh the simulator in your browser. A hard refresh can help if it still shows old settings.

Configuration changes do not normally require restarting the server. Changes to `app.js` do.

> [!TIP]
> **Edit `yourConfig.json`, not `main/js/config.js`.** The simulator loads the JSON file at startup and replaces its configuration values.

### A few JSON basics

| Value type | Example | How to write it |
| --- | --- | --- |
| Text | `"My Digital Cable"` | Use double quotes. File names and package IDs are case-sensitive. |
| On/off switch | `true` or `false` | Use lowercase, without quotes. |
| Number | `3` or `8.6` | Usually written without quotes; keep the existing format when editing a field. |
| List | `["forecast", "radar"]` | Put entries in square brackets, separated by commas. |
| Group of settings | `{ "enabled": true }` | Put named settings in braces. |

JSON does **not** allow comments or a comma after the last item in a list or object. Examples below are **snippets to merge into the existing configuration**, not complete replacements for the file.

### Where to start

| I want to… | Change this |
| --- | --- |
| Use a different city | [The location URL or `mainCity`](#choose-your-location) |
| Add, remove, or reorder segments | [`packageSettings`](#build-your-forecast-lineup) |
| Change the provider name, logo, or background | [`appearanceSettings`](#customize-the-appearance) |
| Change the music or turn off narration | [`audioSettings`](#music-and-narration) |
| Add traffic maps and reports | [The HERE key, lineup, and `traffic` settings](#set-up-traffic) |
| Adjust the side panel, nearby cities, or specialized packages | [More configuration options](#more-configuration-options) |

## Choose your location

### Automatic location

Leave `mainCity.autoFind` set to `true`. With no location in the URL, the simulator uses your public IP address to find your area and nearby reporting stations. VPNs and your internet provider can affect that result.

### Search for a city in the URL

With `mainCity.autoFind` still set to `true`, add a city or ZIP code after `?`:

- City: [http://localhost:3000/?Chicago,IL](http://localhost:3000/?Chicago,IL)
- ZIP code: [http://localhost:3000/?60601](http://localhost:3000/?60601)
- City with spaces: [http://localhost:3000/?Corpus%20Christi,TX](http://localhost:3000/?Corpus%20Christi,TX)

Use the city or ZIP code directly after `?`; it becomes a search term, and the simulator uses the first weather-service match. Include a state when a city name is ambiguous.

### Set a fixed location in the configuration

Set `mainCity.autoFind` to `false` and fill in its location fields. For example, edit these fields **inside the existing `mainCity` object**, keeping its other settings:

```json
{
  "autoFind": false,
  "locationName": "Chicago",
  "bulletinName": "Chicago Area",
  "lat": "41.98",
  "lon": "-87.90",
  "obsName": "Chicago O'Hare",
  "icaoCode": "KORD",
  "almanacLocationName": "Chicago",
  "timeZone": "America/Chicago"
}
```

| Field | Purpose |
| --- | --- |
| `locationName` | City name shown on local slides. |
| `bulletinName` | Area label used for local bulletins. |
| `lat`, `lon` | Latitude and longitude used for location-based data and maps. Western longitudes are negative. |
| `obsName` | Display name for the observation location. |
| `icaoCode` | Weather station's ICAO code, such as `KORD`. This differs from the three-letter airport code `ORD`. |
| `almanacLocationName` | Location label on the almanac. |
| `timeZone` | Optional IANA time zone for the displayed date and clock. Without it, those use the browser's local time zone. |

The default configuration uses `icaoCode` for main-city observations and forecasts. A weather-service `locationID` is another supported option in several location objects; it must include the full suffix, such as `USIL0228:1:US`. If you have added `mainCity.locationID` and later switch back to ICAO-based data, remove that field—the presence of `locationID` takes priority.

`systemLocation` is a separate **startup display label**. Leave it empty to use the main city's name. Changing that label alone does not change the weather location.

## Build your forecast lineup

`packageSettings` is the list of segments in the normal forecast loop. They play in the order listed. Add a package ID to include it, remove it to skip it, or move it to change the order. Repeated IDs repeat that package.

For a simple forecast-and-radar loop, replace the existing `packageSettings` list with:

```json
"packageSettings": ["forecast", "radar"]
```

For a longer loop:

```json
"packageSettings": ["forecast", "health", "extralocal", "travel", "airport", "radar"]
```

### Available packages

| Package ID | What it includes |
| --- | --- |
| `forecast` | Main local forecast package. |
| `minicoreone`, `minicoretwo` | Shorter local forecast packages. |
| `extralocal` | Forecasts for the additional cities in `extraCity`. |
| `spanish` | Local forecast slides in Spanish. |
| `radar` | Radar and satellite slides. |
| `health` | Outdoor activity, allergies, air quality, and UV information. |
| `travel` | Regional travel weather and destination forecasts. |
| `airport` | Local and national airport conditions and delays. |
| `international` | International weather maps and forecasts. |
| `golf` | Tee-time, golf index, and course forecasts. |
| `garden` | Gardening forecast, precipitation, and drought information. |
| `ski` | Ski reports and snowfall forecasts; uses `ski.resorts`. |
| `beach` | Surf, water temperatures, coastal forecasts, and tides; requires local `beach` settings. |
| `traffic` | Traffic maps, incidents, and route conditions; requires [traffic setup](#set-up-traffic). |

Adding a package enables its slides; it does not fill in missing station, resort, traffic, or coastal settings. Configure specialized packages before adding them.

### Severe-weather lineup

`severePackageSettings` controls the separate lineup used during severe mode. Available IDs are `severeA`, `severeB`, and `severe2`. `severePackageName` changes its displayed heading. For a first setup, keep the supplied severe-weather settings.

## Customize the appearance

These options are inside `appearanceSettings`:

| Setting | What to change |
| --- | --- |
| `providerName` | Replace `"Mist Digital Cable"` with your provider's display name. |
| `providerImage` | Use a PNG name from [`main/images/tvproviders`](main/images/tvproviders), without `.png`. For example, `"mistdc"`. |
| `providerType` | `"provider"` shows the provider logo, `"ad"` shows sponsor images, and `"both"` alternates them. Configure `adImages` before using ads. |
| `backgroundImage` | Main frame background: a PNG name from [`main/images/backgrounds`](main/images/backgrounds), without `.png`. The default is `"wxscan_default_bg_new"`. |
| `iconSet` | Choose `"2005"` or `"2010"` for the weather icon style. |
| `adMessage` | A list of crawl messages. `["network"]` loads the Mist crawl network; replace it with your own text for custom messages. |
| `condensedCrawlFont.adCrawl` | Set to `true` for a condensed font in the advertising crawl. |
| `condensedCrawlFont.ccTicker` | Set to `true` for a condensed font in the current-conditions ticker. |
| `weatherReadyLogo` | Select one of the included logo variants: `0`, `1`, `2`, or `3`. |

For example, change these values **inside `appearanceSettings`**, keeping its other fields:

```json
{
  "providerName": "My Digital Cable",
  "providerImage": "mistdc",
  "providerType": "provider",
  "iconSet": "2005",
  "adMessage": [
    "Welcome to your local weather channel!",
    "Thanks for watching."
  ]
}
```

To use your own logo, place a PNG such as `myprovider.png` in `main/images/tvproviders`, then set `providerImage` to `"myprovider"`. Use existing images as a guide for sizing and transparency.

<details>
<summary><strong>Sponsor images and slide backgrounds</strong></summary>

Sponsor images belong in [`main/images/sponsors`](main/images/sponsors). Each entry in `appearanceSettings.adImages` uses `adImage` for the PNG name without its extension, and can supply an `adMessage` for its crawl.

After adding `mysponsor.png`, for example, set:

```json
"providerType": "both",
"adImages": [
  {
    "adImage": "mysponsor",
    "adMessage": "Your local forecast is sponsored by My Sponsor."
  }
]
```

Local slide backgrounds are separate from the main frame background. Inside `mainCity`, `introBG`, `upNextBG`, and `slidesBG` select PNG files from `main/images/backgrounds`, without `.png`. Extra-city entries have `upNextBG` and `slidesBG` too. Automatically discovered extra cities receive generated defaults.

</details>

## Music and narration

These settings are inside `audioSettings`:

| Setting | Purpose |
| --- | --- |
| `enableMusic` | `true` enables background music; `false` disables it. |
| `shuffle` | `true` shuffles the music playlist. |
| `randomStart` | `true` starts at a randomly chosen track. Set both this and `shuffle` to `false` to follow your exact order. |
| `narrations` | Enables or disables the local slide-introduction narrations. |
| `order` | Track numbers in the order you want them played. |

Tracks `1`–`33` refer to `main/music/Track N.mp3`. Numbers `34` and higher refer to the older collection in `main/music/v1`: `34` means `Track 1.mp3`, `35` means `Track 2.mp3`, and so on. Choose numbers for files that exist.

For a predictable three-track playlist, edit these fields **inside `audioSettings`**:

```json
{
  "enableMusic": true,
  "shuffle": false,
  "randomStart": false,
  "narrations": true,
  "order": [1, 2, 3]
}
```

If audio is silent, click inside the simulator and check the browser's sound permissions.

## Set up traffic

Traffic is optional. It needs **all three** of the following: a HERE API key, `"traffic"` in the lineup, and a configured traffic location.

### 1. Add your HERE API key

The supplied configuration already contains weather-service (`api_key`) and Mapbox (`map_key`) values. The optional HERE key belongs in **`apiKeys.traf_key`**.

Follow HERE's official [Traffic API setup guide](https://docs.here.com/traffic-api/docs/send-request-readme) to create an app and API key. The simulator uses Traffic API v7 for incidents and [Routing API v8](https://docs.here.com/routing/docs/routing-v8-get-started) for route reports; your app needs access to the services you use.

Replace only the `traf_key` value, keeping the existing weather and Mapbox values:

```json
"traf_key": "YOUR_HERE_API_KEY"
```

Leaving it as `""` removes the traffic package from the lineup at startup.

### 2. Add traffic to your lineup

For example:

```json
"packageSettings": ["forecast", "traffic", "radar"]
```

### 3. Set the traffic location

Fill in these fields **inside the existing `traffic` object**, preserving its routes and map settings:

```json
{
  "locationName": "Chicago",
  "lat": "41.88",
  "lon": "-87.63"
}
```

**Fill in traffic coordinates even if your main city is found automatically.** The current upstream code reads traffic coordinates separately; blank values can put the map in the wrong place.

`zoomOut` and `zoomIn` adjust the overview/detail map zoom. Larger values zoom in farther. The map uses Mapbox; incident and route reports use HERE.

<details>
<summary><strong>Configure the route reports</strong></summary>

Each entry in `traffic.routes` describes a drive between two points:

| Field | Purpose |
| --- | --- |
| `from`, `to` | Starting and ending coordinates in `"latitude,longitude"` order. |
| `fromStreet`, `toStreet` | Labels displayed for those endpoints. |
| `routeIcon` | Road identifier used for the route's icon. |

For example, edit one of the existing route entries:

```json
{
  "from": "41.88,-87.63",
  "fromStreet": "Downtown",
  "to": "41.98,-87.90",
  "toStreet": "O'Hare",
  "routeIcon": ""
}
```

Populate the routes you want reported; empty endpoint coordinates cannot produce a report. `traffic.mapIcons.zoomOut` and `zoomIn` are advanced settings for placing road icons on each map view. Their positions need to match your map.

</details>

## More configuration options

The defaults handle many location settings automatically. **When a section's `autoFind` is `true`, the simulator may replace its manual location entries at startup.** Switch it to `false` before supplying your own locations in that section.

<details>
<summary><strong>Nearby cities, extra cities, and the L-shaped side panel</strong></summary>

| Section | What it controls |
| --- | --- |
| `nearbyCities` | Nearby-city conditions. Automatic mode discovers stations; manual entries use `obsName` with `icaoCode`, or a full weather-service `locationID`. |
| `extraCity` | Additional local forecast packages. `maxCities` limits automatic discovery. In manual mode, edit `cities`, including their labels, coordinates, observation station, and radar settings. |
| `LBar.locations` | Weather locations in the L-shaped side panel. `autoFind: true` uses the main city. Manual mode uses `cities`. `type` can be `"static"`, `"rotate"`, or `"extralocal"` to keep one location, cycle through locations, or follow the extra-local segment. |
| `LBar.ccTicker` | Current-conditions and travel ticker. `autoFind` controls discovery of weather cities. `airports` uses airport names and three-letter `iataCode` values; `travelCities` uses names and full weather-service `locationID` values. |
| `LBar.gradientDirection` | `"left"` or `"right"` changes the side-panel forecast gradient. |

For a manually chosen nearby station, an entry in `nearbyCities.cities` can look like:

```json
{
  "obsName": "Chicago O'Hare",
  "icaoCode": "KORD"
}
```

Set `nearbyCities.autoFind` to `false` to retain manual entries. Use the existing list as a template for the other stations.

</details>

<details>
<summary><strong>Radar and data maps</strong></summary>

| Setting | Purpose |
| --- | --- |
| `mainCity.radar` | Main radar center, zoom, satellite coordinates, and city/icon overlays. With `auto: true`, startup sets the center and resets the zoom to `8.1`. |
| `extraCity.cities[].radar` | Radar settings for each extra-local city. |
| `LBar.radar.enabled` | Set to `false` to disable the small side-panel radar. |
| `LBar.radar.auto` | `true` centers the side-panel radar on its weather location; `false` retains manual `lat` and `lon`. |
| `LBar.radar.zoom` | Zoom level for the small side-panel radar. |
| `LBar.radar.legend` | Set to `true` to show the small radar's legend. |
| `dataMaps` | Automatic centering or manual `topPos`, `leftPos`, and `zoom` for weather data maps. |

For manual main-city radar settings, set `mainCity.radar.auto` to `false`, then supply `lat`, `lon`, `zoom`, and `satCoords`. **`satCoords` uses `[longitude, latitude]` order**, unlike HERE route strings. The `radarCities` and `radarIcons` lists place labels and overlays with manually chosen positions; start from the existing objects and adjust them to your map.

</details>

<details>
<summary><strong>Travel, airports, international weather, health, golf, and gardening</strong></summary>

| Section | What you can customize |
| --- | --- |
| `travel.regionalMap` | Enable the regional map; choose automatic city discovery or manually positioned cities. Manual entries use `locationName`, `locationID`, `topPos`, and `leftPos`. |
| `travel.destinationForecast` | Destination city names and full weather-service location IDs. |
| `airport` | Automatic local airport selection, `mainEnabled`, and the `main` and `national` airport lists. Entries use `airportName` and a three-letter `iataCode`, such as `ORD`. |
| `international` | `mapOrder` orders regional maps; `maxMaps` limits how many are shown. Edit cities in `map` and `forecast` using names and full location IDs. Keep the existing map names when reordering. |
| `health` | Uses the main city's location with `autoFind: true`; manual mode uses its own labels, coordinates, and station. |
| `golf` | Automatically finds golf locations, or lets you choose `teeTime`, `courses`, and `indexMap`. Manual course entries use `courseName` and a full `locationID`. |
| `garden` | Automatically uses a local gardening location, or uses your manual `locationName` and full `locationID`. |

For example, an entry in `travel.destinationForecast` can look like:

```json
{
  "locationName": "Chicago",
  "locationID": "USIL0228:1:US"
}
```

</details>

<details>
<summary><strong>Ski and boat & beach packages</strong></summary>

These packages need their own settings before you add `"ski"` or `"beach"` to `packageSettings`.

| Setting | Purpose |
| --- | --- |
| `ski.resorts` | Each entry has a `displayName`, state abbreviation, and weather-service `resortId`. Use the included resorts as a starting point. |
| `beach.surfReport` | NOAA buoy ID (`buoy`) and display label (`displayName`). |
| `beach.coastalForecast` | National Weather Service product location (`office`), marine `zone` code, and optional `zoneName` display label. |
| `beach.tides.stations` | NOAA tide station IDs (`id`) and display names (`name`). |
| `beach.tides.almanac` | Weather station used for the tide package's almanac (`icaoCode`). |

Use station and zone identifiers for your area; city names alone cannot replace those IDs. The bundled beach fields are blank, so adding the package without filling them in will leave reports unavailable. The local server provides the surf and coastal forecast routes.

</details>

Some fields are included for specialized or unfinished behavior. Keep `appearanceSettings.nationalConfig` at `false` for a normal local setup. `appearanceSettings.crawlMode` and `audioSettings.cantoreNarrations` are present but are not connected to their corresponding behavior in the current code; leave their supplied values unless you are developing those features.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| `node` or `npm` is not recognized | Install Node.js LTS, reopen the terminal, and run the version checks. |
| npm cannot find `package.json` | Run commands in the project's root folder, not `main` or `main/configs`. |
| `npm ci` reports that the lockfile and package file disagree | For a fresh download, verify both files came from the same revision. If you intentionally changed dependencies, run `npm install` to update the lockfile. |
| Missing `express` or `http-proxy-middleware` | Run `npm ci --omit=dev` in the project folder, then `npm start`. |
| `EADDRINUSE` / port 3000 is already in use | Stop the other server. To choose another port, edit `const port = 3000` in `app.js`, restart, and use that port in the browser URL. An environment variable alone does not change this server's port. |
| The page will not open | Keep `npm start` running and visit `http://localhost:3000` instead of opening the HTML file directly. Check the terminal for errors. |
| It shows the wrong city | Try a city/state or ZIP code in the URL, check VPN settings, or configure a fixed location. |
| Manual settings keep changing | Set the relevant section's `autoFind` or radar's `auto` to `false`. `systemLocation` changes only the startup label. |
| Configuration changes do not appear | Save `yourConfig.json` and hard-refresh the page. Use the normal local URL; special debug/national URLs load other configurations. |
| Startup stops after editing JSON | Check for missing commas, trailing commas, mismatched braces, or unquoted text. Restore your backup if needed. |
| There is no music or narration | Click inside the page, check sound permissions and volume, and verify `audioSettings` and the chosen track files. |
| Traffic does not appear | Check `traf_key`, add `"traffic"` to `packageSettings`, and fill in `traffic.locationName`, `lat`, and `lon`. |
| Traffic map shows an ocean or the wrong area | Enter traffic coordinates explicitly; they are separate from the automatically detected main city. |
| Data or maps are blank | Check your connection, API responses, keys, and station IDs. Some reports depend on external service availability or coverage. |
| A custom image is missing | Check its folder, exact filename/capitalization, and `.png` extension. Configured image names omit the extension. |

Open your browser's developer tools and check **Console** and **Network** for details. The terminal shows local server errors. You can check JSON syntax from the project folder with:

```sh
node -e "JSON.parse(require('fs').readFileSync('main/configs/yourConfig.json', 'utf8')); console.log('JSON syntax is valid')"
```

This checks syntax, not whether location IDs, API keys, or package settings are correct.

Still need help? Join **[Mist Weather Media on Discord](https://discord.gg/hV2w5sZQxz)**. Include what you expected, what happened, and relevant errors. Remove personal API keys before sharing configuration files or screenshots.

## Contributing

For an upstream contribution, fork the repository and create a branch from the latest upstream `main`. Keep the change focused, explain its purpose in the pull request, and describe how you checked it. Keep personal location, branding, and API-key settings out of unrelated contributions.

| Path | Purpose |
| --- | --- |
| [`app.js`](app.js) | Express server, port setting, and local data routes. |
| [`main/configs/yourConfig.json`](main/configs/yourConfig.json) | User configuration. |
| [`main/js`](main/js) | Location discovery, data loading, slides, radar, and audio. |
| [`main/weatherscan.css`](main/weatherscan.css) | Simulator styling. |
| [`main/images`](main/images) | Backgrounds, icons, provider logos, and other images. |
| [`main/music`](main/music) | Music tracks. |
| [`changelog.txt`](changelog.txt) | Project change history. |

## Credits and license

Created by **Mist Weather Media**, with special thanks to:

| Contributor | Role |
| --- | --- |
| **Joe Molinelli (TheGoldDiamond9)** | Lead Developer |
| **COLSTER** | Developer |
| **JensonWX** | Developer |
| **Miceoroni** | Map Developer |
| **zachNet** | README |

And the rest of the **Mist Creative Team** for their support!

See [`LICENSE`](LICENSE) for the included GNU General Public License, version 3, and the notices accompanying bundled libraries.

© Mist Weather Media 2026.
