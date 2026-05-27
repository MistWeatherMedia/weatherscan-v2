var radarTransform = false;
var trafTransform = false;
var satTransform = false;
var radarSlide = false;
var slideLength = 9995;
var slideDivs = {
  //FORECAST
  "cityIntro":".city-intro",
  "upNext":".upnext",
  "bulletin":".bulletin",
  "currentConditions": ".current-conditions",
  "nearbyCities": ".nearby-cities",
  "dopplerRadar": ".doppler-radar",
  "radarSatellite": ".doppler-radar",
  "localForecast": ".local-forecast",
  "dayPart": ".daypart-forecast",
  "extendedForecast": ".extended-forecast",
  "almanac": ".almanac",
  //TRAFFIC
  "trafficIntro":".traffic-intro",
  "trafficOverview":".traffic-overview",
  "trafficReport":".traffic-report",
  "trafficFlow":".traffic-flow",
  //TRAVEL
  "travelIntro":".travel-intro",
  "travelWeather":".travel-weather",
  "travelForecast":".travel-forecast",
  "destinationForecast":".destination-forecast",
  //AIRPORT
  "airportIntro":".airport-intro",
  "airportConditions":".airport-conditions",
  "nationalAirports":".national-airports",
  //INTERNATIONAL
  "internationalIntro":".international-intro",
  "internationalMap":".international-map",
  "internationalForecast":".international-forecast",
  //GOLF
  "golfIntro":".golf-intro",
  "teeTime":".teetime",
  "golfIndex":".golf-index",
  "courseForecast":".course-forecast",
  "golfPromo":".golf-promo",
  //HEALTH
  "healthIntro":".health-intro",
  "outdoorActivity":".outdoor-activity",
  "allergyReport":".allergy-report",
  "airQuality":".air-quality",
  "uvIndex":".uv-index",
  "healthTip":".health-tip",
  "healthPromo":".health-promo",
  //GARDEN
  "gardenIntro":".garden-intro",
  "gardenForecast":".garden-forecast",
  "estimatedPrecip":".estimated-precip",
  "precipForecast":".precip-forecast",
  "droughtMonitor":".drought-monitor",
  "frostFreeze":".frost-freeze",
  "gardenPromo":".garden-promo",
  //SKI
  "skiIntro":".ski-intro",
  "skiReport":".ski-report",
  "snowfallForecast":".snowfall-forecast",
  "skiTip":".ski-tip",
  //BOAT BEACH
  "beachIntro":".beach-intro",
  "surfReport":".surf-report",
  "waterTemps":".water-temps",
  "coastalForecast":".coastal-forecast",
  "tides":".tides",

  "severeMessage":".severe-message",
};
var groupBackgrounds
var arrowColors = {
  "forecast":"#ffd40e",
  "minicoreone":"#ffd40e",
  "minicoretwo":"#ffd40e",
  "extralocal":"#ffd40e",
  "traffic":"#df932b",
  "travel":"#84a9d6",
  "airport":"#84a9d6",
  "international":"#a0a0a0",
  "golf":"#14a00a",
  "health":"#0ab6c1",
  "garden":"#14a00a",
  "ski":"#8b5ba5",
  "beach":"#14a00a",
  "severeA":"#d7220b",
  "severeB":"#d7220b",
  "severe2":"#d7220b",
  "spanish":"#ffd40e"
}
var slideTitles = {
  "forecast":"Your Local Forecast",
  "extralocal":"Your Local Forecast",
  "minicoreone":"Your Local Forecast",
  "minicoretwo":"Your Local Forecast",
  "traffic":"Traffic Report",
  "travel":"Travel Forecast",
  "airport":"Airport Conditions",
  "international":"International Forecast",
  "golf":"Golf Forecast",
  "health":"Weather & Your Health",
  "garden":"Garden",
  "ski":"Ski & Snow",
  "beach":"Boat & Beach",
  "spanish":"Espanol",
  "severeA":"Severe",
  "severeB":"Severe",
  "severe2":"Severe"
};
var upNextTickTtls = {
  "intro":"",
  "forecast":"Up Next...Your Local Forecast",
  "extralocal":"Up Next...Your Local Forecast",
  "minicoreone":"Up Next...Your Local Forecast",
  "minicoretwo":"Up Next...Your Local Forecast",
  "traffic":"Up Next...Traffic Report",
  "travel":"Up Next...Travel Forecast",
  "airport":"Up Next...Airport Conditions",
  "international":"Up Next...Int'l Forecast",
  "golf":"Up Next...Golf Forecast",
  "health":"Up Next...Health",
  "garden":"Up Next...Garden",
  "ski":"Up Next...Ski & Snow",
  "beach":"Up Next...Boat & Beach",
  "spanish":"Up Next...Espanol",
  "severeA":"Severe",
  "severeB":"Severe",
  "severe2":"Severe"
};
var slideLength = 10000;
var currentProgram;
var round = 0;
var currentDiv;
var idx = 0;
var gidx = 0;
var ngidx = 1;
var orderidx = 0;
var locationid = 0;
var Nlocationid = 0;
var radarCycle = 0;
var healthTipWinter = [
  "Use sunscreen during the winter.<br><br>- Skiers are at higher risk of UV damage to eyes <br>and skin due to stronger UV rays at higher altitudes.<br><br>- Snow reflects the sun`s rays and UV radiation.",
  "Use sunscreen during the winter.<br><br>Cloudy skies may make the air temperature cooler, <br>but UV rays are still coming through.",
  "To minimize colds and flu:<br><br>- Wash your hands frequently to protect from <br>germs.<br><br>- Avoid using public pens & pencils (use your own <br>at doctor`s offices, stores, banks, etc.)",
  "To minimize colds and flu:<br><br>- Disinfect and sanitize home surfaces including <br>doorknobs, telephones, even the TV remote control.",
  "To prevent accidental fires:<br><br>- Use flashlights, not candles - if you lose <br>electrical power.<br><br>- Keep space heaters at least three feet way from <br>furnishings, drapes, and all flammable objects.",
  "To prevent accidental fires:<br><br>- Turn space heaters off when you leave a room.<br>        <br><br>Complete your Preparedness Plan at <br>weather.com/READY",
  "Take frequent breaks when shoveling snow.<br>  <br>Heart attacks due to over exertion are a leading <br>cause of death during winter storms.",
  "To prevent Frozen Water Pipes insulate with:<br><br>- A \"pipe sleeve\", UL-Listed \"heat tape\", or <br>similar materials.<br> <br>- Newspaper can provide some degree of <br>insulation and protection to exposed pipes - <br>even ¼\" of newspaper can help.",
  "To prevent Frozen Water Pipes:<br><br>- Let cold water drip from faucets served by <br>exposed pipes. <br><br>- While away during cold weather, leave the heat on, <br>set no lower than 55ºF.",
  "To prevent Frozen Water Pipes:<br><br>- Open outside hose bibs to drain water and <br>keep them open so remaining water can expand <br>without breaking the pipe.",
  "Know the difference in Winter Weather Warnings:<br><br>- Winter Weather Advisory - hazardous winter weather <br>is occurring, imminent, and is an inconvenience. <br><br>- Winter Storm Warning - hazardous winter weather is <br>occurring, imminent, and is a threat to life and<br>property.",
  "Be prepared for winter driving emergencies with the <br>following in your trunk:<br>	- Spare tire, wheel wrench and tripod-type jack<br>	- Shovel<br>	- Jumper cables<br>	- Tow and tire chains<br>	- Bag of salt or cat litter<br>	- Tool kit",
  "Be prepared if you get stranded, with:<br><br>	- Compass and First Aid Kit<br>	- Ice scraper and snow brush<br>	- Wooden matches in a waterproof container<br>	- Non-perishable high-energy foods<br>	- Woolen mittens, socks, a cap and blankets",
  "Don't use your cruise control in wintry conditions.<br> <br>Even roads that appear clear can have sudden <br>slippery spots, and the short touch of your brakes<br>to deactivate the cruise control feature can cause <br>you to lose control of your vehicle.",
  "Do not pump anti-lock brakes. <br><br>If your car is equipped with anti-lock brakes, <br>do not pump brakes in attempting to stop. <br><br>The right way is to \"stomp and steer!\"",
  "Pet Safety Tips:<br><br>- Antifreeze is deadly to pets. <br><br>- Use \"safe\" non-toxic antifreeze and clean spills <br>immediately - especially if pets are housed in the <br>garage.",
  "Pet Safety Tips:<br><br>- Shout, beep the horn, or pound on the hood before <br>starting the engine of an outdoor vehicle.  <br><br>- Cats and other small animals may seek warmth by <br>crawling into car engines, which can be dangerous <br>or fatal.",
  "Pet Safety Tips:<br><br>- After letting your pet out, be sure to wipe their<br>paws when they come back inside. Tender pads can be<br>injured from salts and other ice-melting chemicals.",
  "<br>Complete your Family Preparedness Plan at <br>weather.com/READY"
]
var healthTipSummer = [
  "In case of a severe thunderstorm:<br><br>Pull safely onto the shoulder of the road away <br>from any trees that could fall on the vehicle. <br><br>Stay in the car and turn on the emergency <br>flashers until the heavy rains subside.",
  "In case of lightning -<br><br>An automobile provides better insulation against <br>lightning than being in the open. <br><br>Avoid contact with any metal conducting surfaces <br>either inside your car or outside.",
  "Tornado safety -<br><br>Never try to out-drive a tornado. <br><br>Tornadoes can change direction quickly and <br>can lift a car or truck and toss it through <br>the air.",
  "Tornado safety -<br><br>Get out of your vehicle immediately and seek <br>shelter in a sturdy building. <br>    <br>If you can`t get indoors, lie in a ditch or a <br>low-lying area away from the vehicle.",
  "Driving Tips - <br><br>Change windshield wiper blades at least twice <br>a year or every 6,000 miles.<br><br>Make sure your cruise control is turned off <br>during wet weather driving.",
  "Driving Tips -<br><br>- Keep tires properly inflated.<br><br>- Check the tread on your tires and replace<br>the tires when necessary.",
  "Driving Tips - <br><br>Do not pump anti-lock brakes.<br> <br>The right way is to \"stomp and steer!\"",
  "Allergies - <br>To decrease exposure to mold: <br><br>Keep the humidity level in the house between <br>40% and 60%. <br><br>Add mold inhibitors to paints before application.",
  "Allergies - <br><br>To decrease exposure to mold:<br><br>- Clean bathrooms with mold-killing products.<br> <br>- Do not carpet bathrooms and basements.",
  "Allergies - <br><br>To reduce the number and severity of many allergy <br>attacks, attach Electrostatic filters to heating <br>and a/c equipment to remove allergens from the air.",
  "Allergies - <br><br>To reduce the severity of many allergy attacks on <br>airplane flights, use decongestant nose drops or <br>inhalers before a flight.",
  "<br>Never leave infants, children, or pets in a parked car.",
  "<br>Complete your Family Preparedness Plan at <br>weather.com/READY"
]
//health tip chooser
var tipsLib = dateFns.isWithinInterval(new Date(), { start: summerTipCut, end: winterTipCut }) ? healthTipSummer : healthTipWinter
var yrr = new Date().getFullYear()
var summerTipCut = new Date(yrr, 3, 22, 0, 0, 0, 0);
var winterTipCut = new Date(yrr, 10, 22, 0, 0, 0);
var healthTipId = Math.round(Math.random() * ((tipsLib.length-1) - 0));
//var kicked = false;
function slideCallBack(){
    idx++;
    showSlides();
};
var provType = "provider"
var adImageIdx = 0;
var providerAdMessage = false;
let adImageInUse = false;
function switchProvider(type) {
  if (orderidx == 0) {
  if (type == "provider") {
    provType = "provider"
    $(".provider").fadeIn(0)
    for (var i = 0; i < systemSettings.appearanceSettings.adImages.length; i++) {
      $(".adArea." + numToWord(i)).fadeOut(0)
    }
  } else {
    switch (systemSettings.appearanceSettings.providerType) {
  case "both":
    switch (provType) {
      case "ad":
        provType = "provider";
        $(".provider").fadeIn(0);
        for (var i = 0; i < systemSettings.appearanceSettings.adImages.length; i++) {
          $(".adArea." + numToWord(i)).fadeOut(0);
        }
        break;

      case "provider":
        provType = "ad";
        $(".provider").fadeOut(0);
        for (var i = 0; i < systemSettings.appearanceSettings.adImages.length; i++) {
          $(".adArea." + numToWord(i)).fadeOut(0);
        }
        $(".adArea." + numToWord(adImageIdx)).fadeIn(0);
        adImageIdx++;
        if (adImageIdx >= systemSettings.appearanceSettings.adImages.length) {
          adImageIdx = 0;
        }
        break;
    }
    break;

  case "provider":
    provType = "provider";
    $(".provider").fadeIn(0);
    for (var i = 0; i < systemSettings.appearanceSettings.adImages.length; i++) {
      $(".adArea." + numToWord(i)).fadeOut(0);
    }
    break;

  case "ad":
    provType = "ad";
    $(".provider").fadeOut(0);
    for (var i = 0; i < systemSettings.appearanceSettings.adImages.length; i++) {
      $(".adArea." + numToWord(i)).fadeOut(0);
    }
    $(".adArea." + numToWord(adImageIdx)).fadeIn(0);
    adImageIdx++;
    if (adImageIdx >= systemSettings.appearanceSettings.adImages.length) {
      adImageIdx = 0;
    }
    break;

  case "custom":
    for (let i = 0; i < systemSettings.appearanceSettings.adImages.length; i++) {
      if (systemSettings.appearanceSettings.adImages[i].type == "slide") {
        if (systemSettings.appearanceSettings.adImages[i].value == slideSettings.order[orderidx].slideLineup[gidx].group) {
          $(".adArea." + numToWord(i)).fadeIn(0);
          $(".provider").fadeOut(0);
          adImageIdx = i;
          console.log(adImageIdx, systemSettings.appearanceSettings.adImages[adImageIdx].adMessage);
          adImageInUse = true;
          providerAdMessage = true;
          break;
        }
        adImageIdx = undefined;
        providerAdMessage = false;
        adImageInUse = false;
      }
    }

    if (!adImageInUse) {
      provType = "provider";
      $(".provider").fadeIn(0);
      for (let i = 0; i < systemSettings.appearanceSettings.adImages.length; i++) {
        $(".adArea." + numToWord(i)).fadeOut(0);
      }
    }
    break;

  default:
    $(".provider").fadeOut(0)
    $(".adArea").fadeOut(0)
    console.error("provider switching error")
    break;
}
  }
  } else {
    provType = "provider"
    $(".provider").fadeIn(0)
    for (var i = 0; i < systemSettings.appearanceSettings.adImages.length; i++) {
      $(".adArea." + numToWord(i)).fadeOut(0)
    }
  }
}
function segmentSet() {
  if (weatherData.severemode == true) {
    $("#slides-scroller .package-list").empty()
    orderidx = 1
    idx = 0
    gidx = 0
    ngidx = 1
    //severe
    $(".panel").css({"background":"url(images/assets/middle_midgrey.png)", "background-size":"1458px, 614px"})
    $(".panel.dBlue").css({"background":"url(images/assets/middle_midgrey.png)", "background-size":"1458px, 614px"})
    $(".panel.white").css({"background":"url(images/assets/middle_white.png)", "background-size":"1458px, 614px"})
    $(".darkpanel").css({"background":"url(images/assets/middle_black.png)", "background-size":"1458px, 614px"})
    $(".brightpanel").css({"background":"url(images/assets/middle_reallydarkgrey.png)", "background-size":"1458px, 614px"})
    $(".dividerpanel").css({"background":"url(images/assets/middle_reallydarkgrey.png)", "background-size":"1458px, 614px"})
    $(".verticaldividerpanel").css({"background":"url(images/assets/middle_black.png)", "background-size":"1458px, 614px"})
    $(".radar-overlay").css({"background":"transparent url(/images/backgrounds/severe_map_banner_bg.png) no-repeat", "background-size":"100% 100%"})
    $(".mapcorner.severe").fadeIn(0)
    $(".mapcorner.yellow").fadeOut(0)
    $("#slides-scroller .package-list").fadeOut(0)
    $("#slides-scroller .package-list-severe").fadeIn(0)
    $(".radar-lbar").fadeOut(0)
  } else {
    //normal
    if (orderidx > 0) {
      orderidx = 0
      gidx = 0
      buildHeader()
    }
    $(".panel").css({"background":"url(images/assets/middle_blue.png)", "background-size":"1458px, 614px"})
    $(".panel.dBlue").css({"background":"url(images/assets/middle_darkblue.png)", "background-size":"1458px, 614px"})
    $(".panel.white").css({"background":"url(images/assets/middle_white.png)", "background-size":"1458px, 614px"})
    $(".darkpanel").css({"background":"url(images/assets/middle_darkerpurple.png)", "background-size":"1458px, 614px"})
    $(".brightpanel").css({"background":"url(images/assets/middle_bluehighlight.png)", "background-size":"1458px, 614px"})
    $(".dividerpanel").css({"background":"url(images/assets/middle_purple.png)", "background-size":"1458px, 614px"})
    $(".verticaldividerpanel").css({"background":"url(images/assets/middle_darkerpurple.png)", "background-size":"1458px, 614px"})
    $(".radar-overlay").css({"background":"transparent url(/images/backgrounds/map_banner_bg.png) no-repeat", "background-size":"100% 100%"})
    $(".mapcorner.severe").fadeOut(0)
    $(".mapcorner.yellow").fadeIn(0)
    $("#slides-scroller .package-list-severe").fadeOut(0)
    $("#slides-scroller .package-list").fadeIn(0)

    if (lBarData.radarUnavailable) {
      $(".radar-lbar").fadeOut(0)
    } else {
      //$(".radar-lbar .miniradar-shrink").css({"transform":"none"})
      //$(".radar-lbar").fadeIn(0)
      //miniradar.resize()
      //miniEchoes.resize()
      //miniradarAmenitiesTrans.resize()
      //$(".radar-lbar .miniradar-shrink").css("transform","scaleY(0.83)")
      //get new radar frames
      if(gidx == 0) {
        try {
          if(miniRadarAnimation != undefined){clearInterval(miniRadarAnimation)}
          lBarData.radarUnavailable = false
          startMiniRadar();
        } catch (error) {
          lBarData.radarUnavailable = true
          $(".radar-lbar").fadeOut(0)
        }
      }
    
    // setTimeout(() => {
    //   if(gidx == 0) {
    //     try {
    //       if(miniRadarAnimation != undefined){clearInterval(miniRadarAnimation)}
    //       lBarData.radarUnavailable = false
    //       startMiniRadar();
    //     } catch (error) {
    //       lBarData.radarUnavailable = true
    //       $(".radar-lbar").fadeOut(0)
    //     }
    //   }
    // }, 6000);
    }
  }
  //sidebar severe functions
  if (orderidx == 0) {
    $(".obs-lbar .obs-ticker-severe").fadeOut(0)
    if (!lBarData.radarUnavailable) {
      //$(".radar-lbar").fadeIn(0)
    }
  } else {
    $(".obs-lbar .obs-ticker-severe").fadeIn(0)
    //$(".radar-lbar").fadeOut(0)
  }
  manageDurations()
  //if(gidx >= (slideSettings.order[orderidx].slideLineup.length - 1)){
    setTimeout(() => {
        allData();
        for(let i = 0; i < systemSettings.LBar.locations.cities.length; i++){
          getlBarData(i);
        }
      //setTimeout(stopMiniRadar, 1000);
    }, slideSettings.order[orderidx].slideLineup[gidx].duration * (slideSettings.order[orderidx].slideLineup[gidx].group == "extralocal" ? systemSettings.extraCity.cities.length : 1) - 4000);
  //}
    
    sideBarLoop(0)
    forecastBarLoop(0)
  switchProvider()
  if (slideSettings.order[orderidx].slideLineup[gidx].group != "intro") {
    adCrawl(slideSettings.order[orderidx].slideLineup[gidx].duration, providerAdMessage, adImageIdx)
      $(".titlearrow").css("border-left", "47px solid " + arrowColors[slideSettings.order[orderidx].slideLineup[gidx].group])
      $("#slides-background").css({"background":`transparent url(images/backgrounds/` + groupBackgrounds[slideSettings.order[orderidx].slideLineup[gidx].group] + `.png) no-repeat`, "background-size": "100% 100%"});
  }
  if (slideSettings.order[orderidx].slideLineup[gidx].group == "extralocal") {
    $("#slides-background").css({"background":`transparent url(images/backgrounds/` + systemSettings.extraCity.cities[locationid].slidesBG + `.png) no-repeat`, "background-size": "100% 100%"});
  }
}
var slidePrograms = {
    /*INTRO*/
    cityIntro() {
      switchProvider("provider")
      $(".city-intro .background").css({"background-image":`url(images/backgrounds/` + systemSettings.mainCity.introBG + `.png)`, "background-size": "100% 100%"});
      let d = new Date()
      let year = d.getFullYear()
      $(".city-intro .locationname").text(systemSettings.systemLocation)
      $(".city-intro .toptext-one").text("Weatherscan is only available on " + systemSettings.appearanceSettings.providerName)
      $(".city-intro .toptext-two").text("© " + year + " The Weather Channel, Inc. All Rights Reserved")
      fadeSlideIn($('.city-intro'), 0)
      $(".logobranding").fadeOut(0)
      $(".city-intro .bottombar").fadeIn(500)
      $(".city-intro .bottomgradient").fadeIn(500)
      $(".city-intro .sidearc").fadeIn(500)
      $(".city-intro .wordmark").fadeIn(500)
      $(".city-intro .topgradient").fadeIn(500)
      $(".city-intro .toptext-one").fadeIn(500)
      $(".city-intro .scrollingtext").fadeIn(500)
      $(".city-intro .circlegroup").fadeIn(500)
      setTimeout(() => {
        $(".city-intro .logo").fadeIn(500)
        $(".city-intro .locationname").fadeIn(500)
      }, 2000);
      setTimeout(() => {
        $(".city-intro .toptext-one").fadeOut(500)
        setTimeout(() => {
          $(".city-intro .toptext-two").fadeIn(500)
        }, 500);
      }, 6500);
      setTimeout(() => {
        $(".city-intro .circlegroup").fadeOut(500)
        $(".city-intro .logo").fadeOut(500)
        $(".city-intro .bottombar").fadeOut(500)
        $(".city-intro .bottomgradient").fadeOut(500)
        $(".city-intro .sidearc").fadeOut(500)
        $(".city-intro .wordmark").fadeOut(500)
        $(".city-intro .topgradient").fadeOut(500)
        $(".city-intro .toptext-two").fadeOut(500)
        $(".city-intro .scrollingtext").fadeOut(500)
        $(".city-intro .locationname").fadeOut(500)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      setTimeout(() => {
        fadeSlideOut($('.city-intro'), 0, true)
        //$(".logobranding").fadeIn(0)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);
    },
    upNext() {
      //console.log("==UP NEXT==")
      //if (systemSettings.extraCity.cities.length > 1 && (slideSettings.order[orderidx].slideLineup[ngidx].group == "extralocal" || slideSettings.order[orderidx].slideLineup[gidx].group == "extralocal"/*< systemSettings.extraCity.cities.length-1*/)) {
        //console.log("current locid", locationid)
        //if (locationid > 0) {
        //  console.log("nloc up")
        //  Nlocationid++
        //  if (Nlocationid >= systemSettings.extraCity.cities.length) {
        //    Nlocationid = 0
        //  }
        //}
        //console.log("nloc", Nlocationid)
      //} else {
        //if (slideSettings.order[orderidx].slideLineup[gidx].group == "extralocal" && locationid == systemSettings.extraCity.cities.length-1) {
        //  Nlocationid = 0
        //  console.log("upnext ticker changed (UPNEXT SLIDE)")
        //}
      //}
      if (slideSettings.order[orderidx].slideLineup[gidx].group == "forecast" || slideSettings.order[orderidx].slideLineup[gidx].group == "minicoreone" || slideSettings.order[orderidx].slideLineup[gidx].group == "minicoretwo") {
        $(".upnext .background").css({"background-image":`url(images/backgrounds/` + systemSettings.mainCity.upNextBG + `.png)`, "background-size": "100% 100%"});
      }
      if (slideSettings.order[orderidx].slideLineup[gidx].group == "extralocal") {
        $(".upnext .background").css({"background-image":`url(images/backgrounds/` + systemSettings.extraCity.cities[locationid].upNextBG + `.png)`, "background-size": "100% 100%"});
      }
      switchProvider()
      //console.log(locationid)
      $(".upnext .upnext-slot.one").text("")
      $(".upnext .upnext-slot.two").text("")
      $(".upnext .upnext-slot.three").text("")
      $(".upnext .upnext-slot.four").text("")
      var divs = [".one", ".two", ".three", ".four"]
      var ELOCID = locationid
      for (var UNSLOT = 0, GROUPID = gidx; UNSLOT < 4;) {
        if (GROUPID <= slideSettings.order[orderidx].slideLineup.length - 1) {
          //console.log(slideSettings.order[orderidx].slideLineup[GROUPID].group)
          if (slideSettings.order[orderidx].slideLineup[GROUPID].group == "extralocal") {
            if (systemSettings.extraCity.cities.length < 2) {
              $(".upnext .upnext-slot" + divs[UNSLOT]).text(slideTitles[slideSettings.order[orderidx].slideLineup[GROUPID].group])
              GROUPID++
              UNSLOT++
            } else {
              for (; ELOCID < systemSettings.extraCity.cities.length;) {
                if (UNSLOT < 4) {
                  //console.log(ELOCID)
                  $(".upnext .upnext-slot" + divs[UNSLOT]).text(slideTitles[slideSettings.order[orderidx].slideLineup[GROUPID].group].cities[ELOCID].name)
                  ELOCID++
                  UNSLOT++
                } else {
                  break
                }
              }
              GROUPID++
              ELOCID = 0
            }
          } else {
            $(".upnext .upnext-slot" + divs[UNSLOT]).text(slideTitles[slideSettings.order[orderidx].slideLineup[GROUPID].group])
            UNSLOT++
            GROUPID++
          }
        } else {
          break
        }
      }/*
      function stuff() {
      if (gidx+i <= slideSettings.order[orderidx].slideLineup.length-1) {
        console.log("i",i)
        console.log("p", p)
        if (slideSettings.order[orderidx].slideLineup[gidx+i].group == "extralocal") {
          if (systemSettings.extraCity.cities.length > 1) {
            for (var ii = 0; ii < systemSettings.extraCity.cities.length-locationid; ii++) {
              console.log("locationId", locationid)
              console.log("ii",ii)
              var c = i + ii
              if (c < 4) {
                $(".upnext .upnext-slot" + divs[c]).text(slideTitles["extralocal"].cities[ii+locationid].name)
                console.log(slideTitles["extralocal"].cities[ii+locationid].name)
              }
            }
            i = i + (systemSettings.extraCity.cities.length-1)
            p++
            if (slideSettings.order[orderidx].slideLineup[gidx].group == "extralocal" && locationid == systemSettings.extraCity.cities.length-1) {
              i = i - 1
            }
          } else {
            $(".upnext .upnext-slot" + divs[i]).text(slideTitles[slideSettings.order[orderidx].slideLineup[gidx+p].group])
            console.log(slideSettings.order[orderidx].slideLineup[gidx+p].group)
            p++
          }
        } else {
          $(".upnext .upnext-slot" + divs[i]).text(slideTitles[slideSettings.order[orderidx].slideLineup[gidx+p].group])
          console.log(slideSettings.order[orderidx].slideLineup[gidx+p].group)
          p++
        }
      }
    }*/
      fadeSlideIn($(".upnext"), 0)
      $(".upnext .circlegroup").fadeIn(500)
      $(".upnext .scrollingtext").fadeIn(500)
      $(".upnext .upnext-pre").fadeIn(500)
      $(".upnext .upnext-slot").fadeIn(500)
      setTimeout(() => {
        $(".upnext .circlegroup").fadeOut(500)
        $(".upnext .scrollingtext").fadeOut(500)
        $(".upnext .upnext-pre").fadeOut(500)
        $(".upnext .upnext-slot").fadeOut(500)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      setTimeout(() => {
        fadeSlideOut($(".upnext"), 0, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);
    },
    /*FORECAST*/
    bulletin() {
      var dataTunnel
      if (locationChoice == "extra") {
        dataTunnel = weatherData.alerts.extraLoc[locationid]
      } else {
        dataTunnel = weatherData.alerts.mainLoc
      }
      if (dataTunnel.warnings.length > 0) {
        $('.titletext').text("WEATHER BULLETIN")
        $('.headertext').text("")
        $(".titlearrow").css("border-left", "47px solid #d7220b")
        $(".bulletin .alerts").text("")
        $(".bulletin .cityname").text(dataTunnel.locationName)
        var atext = ""
        var remainingHeight
        //max height 478px or 534px
        //top -478*pagenum
        if (round == 0) {
          fadeSlideIn($(".bulletin"), 0) 
        }
        for (var i = 0; i < dataTunnel.warnings.length; i++) {
          atext = atext + dataTunnel.warnings[i] + " " + "\n\n"
        }
        $(".bulletin .alerts").text(atext.slice(0, -2))
        $(".bulletin .group").fadeIn(500)
        
        setTimeout(() => {
          remainingHeight = $(".bulletin .alerts").height() - (478*round)
          //setTimeout(() => {
            if (remainingHeight > 534) {
              round++
              $(".bulletin .alerts").css({"top":-1*(478*round)})
              currentProgram()
            } else {
              fadeSlideOut($(".bulletin"), 0, true, 500)
              $(".bulletin .group").fadeOut(500)
              setTimeout(() => {
                $(".titlearrow").css("border-left", "47px solid " + arrowColors[slideSettings.order[0].slideLineup[gidx].group])
                $(".bulletin .alerts").css({"top":"0px"})
              }, 500);
            }
          //}, ((slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/dataTunnel.pages)-500));
        }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/dataTunnel.pages)-500);
      } else {
        fadeSlideOut($(".bulletin"), 0, true, 0)
      }
    },
    changeELoc() {
      //ADVANCE HEADER SCROLLER
      //console.log("==CHANGE ELOC==")
      //console.log("current segment", slideSettings.order[orderidx].slideLineup[gidx].group)
      //console.log("next segment", slideSettings.order[orderidx].slideLineup[ngidx].group)
      if (systemSettings.extraCity.cities.length > 1) {
        locationid++
        if(systemSettings.LBar.locations.type == "extralocal"){
          lbarLocId = locationid + 1;
          if (lbarLocId >= systemSettings.LBar.locations.cities.length) {lbarLocId = 0}
          loadLbarLoc("update");
        }
        if (locationid != systemSettings.extraCity.cities.length) {
          headerRefresh()
          adCrawl(slideSettings.order[orderidx].slideLineup[gidx].duration, providerAdMessage, adImageIdx)
        }
        if (locationid >= systemSettings.extraCity.cities.length) {
          locationid = 0
        }
        //console.log("nloc up")
        Nlocationid++
        if (Nlocationid >= systemSettings.extraCity.cities.length) {
          Nlocationid = 0
        }
        //console.log("Current Elocid", locationid)
        //console.log("Next Elocid", Nlocationid)
        if (locationid + 1 == systemSettings.extraCity.cities.length) {
          if (orderidx == 0) {
            //$(".normal-lowerarea .upnext-ticker").text(upNextTickTtls[slideSettings.order[orderidx].slideLineup[ngidx].group])
          }
        } else {
          //console.log("upnext ticker changed (CHANGEELOC)")
          //$(".normal-lowerarea .upnext-ticker").text("Up Next..." + systemSettings.extraCity.cities[Nlocationid].locationName)
        }
        $("#slides-background").css({"background":`transparent url(images/backgrounds/` + systemSettings.extraCity.cities[locationid].slidesBG + `.png) no-repeat`, "background-size": "100% 100%"});
      }
      round = 0
      sideBarLoop(0);
			slideCallBack()
    },
    currentConditions() {
      var dataTunnel
      if (locationChoice == "extra") {
        dataTunnel = weatherData.currentConditions.english.extraLoc[locationid]
      } else if (locationChoice == "spanish") {
        dataTunnel = weatherData.currentConditions.spanish
      } else if (locationChoice == "main") {
        dataTunnel = weatherData.currentConditions.english.mainLoc
      }
      if (locationChoice == "spanish") {
        $('.titletext').text("Actualmente")
      } else {
        $('.titletext').text("Currently")
      }
      $('.headertext').text(dataTunnel.locationName)
      if (dataTunnel.noReport == false) {
        var prespace = ""
        if (dataTunnel.pressureTrend == 0) {
          prespace = " "
        }
        if (locationChoice == "spanish") {
          if (dataTunnel.feelsLike == "none") {
          $(".current-conditions .labels").text("Humedad\nPunto de rocio\nPresión\nViento\nRáfagas")
          if (dataTunnel.pressureTrend == 0) {
            $(".current-conditions .pressure").text("E")
            $(".current-conditions .pressure").css({"background":"url(images/assets/blank.png)", "background-size":"100% 48px", "background-position-y":"12px", "background-repeat":"no-repeat"})
          } else if (dataTunnel.pressureTrend == 1 || dataTunnel.pressureTrend == 3) {
            $(".current-conditions .pressure").text("")
            $(".current-conditions .pressure").css({"background":"url(images/assets/up_arrow.png)", "background-size":"100% 48px", "background-position-y":"12px", "background-repeat":"no-repeat"})
          } else if (dataTunnel.pressureTrend == 2 || dataTunnel.pressureTrend == 4) {
            $(".current-conditions .pressure").text("")
            $(".current-conditions .pressure").css({"background":"url(images/assets/down_arrow.png)", "background-size":"100% 48px", "background-position-y":"12px", "background-repeat":"no-repeat"})
          }
          $(".current-conditions .data").text(dataTunnel.humidity + "\n" + dataTunnel.dewPoint + "\n" + dataTunnel.pressure + prespace + "  \n" + dataTunnel.wind + "\n" + dataTunnel.gusts)
        } else {
          $(".current-conditions .labels").text("Humedad\nPunto de rocio\nPresión\nViento\nRáfagas\n" + dataTunnel.feelsLikeTitle)
          if (dataTunnel.pressureTrend == 0) {
            $(".current-conditions .pressure").text("E")
            $(".current-conditions .pressure").css({"background":"url(images/assets/blank.png)", "background-size":"100% 48px", "background-position-y":"12px", "background-repeat":"no-repeat"})
          } else if (dataTunnel.pressureTrend == 1 || dataTunnel.pressureTrend == 3) {
            $(".current-conditions .pressure").text("")
            $(".current-conditions .pressure").css({"background":"url(images/assets/up_arrow.png)", "background-size":"100% 48px", "background-position-y":"12px", "background-repeat":"no-repeat"})
          } else if (dataTunnel.pressureTrend == 2 || dataTunnel.pressureTrend == 4) {
            $(".current-conditions .pressure").text("")
            $(".current-conditions .pressure").css({"background":"url(images/assets/down_arrow.png)", "background-size":"100% 48px", "background-position-y":"12px", "background-repeat":"no-repeat"})
          }
          $(".current-conditions .data").text(dataTunnel.humidity + "\n" + dataTunnel.dewPoint + "\n" + dataTunnel.pressure + prespace + "  \n" + dataTunnel.wind + "\n" + dataTunnel.gusts + "\n" + dataTunnel.feelsLike)
        }
        } else {
          if (dataTunnel.feelsLike == "none") {
          $(".current-conditions .labels").text("Humidity\nDew Point\nPressure\nWind\nGusts")
          if (dataTunnel.pressureTrend == 0) {
            $(".current-conditions .pressure").text("S")
            $(".current-conditions .pressure").css({"background":"url(images/assets/blank.png)", "background-size":"100% 48px", "background-position-y":"12px", "background-repeat":"no-repeat"})
          } else if (dataTunnel.pressureTrend == 1 || dataTunnel.pressureTrend == 3) {
            $(".current-conditions .pressure").text("")
            $(".current-conditions .pressure").css({"background":"url(images/assets/up_arrow.png)", "background-size":"100% 48px", "background-position-y":"12px", "background-repeat":"no-repeat"})
          } else if (dataTunnel.pressureTrend == 2 || dataTunnel.pressureTrend == 4) {
            $(".current-conditions .pressure").text("")
            $(".current-conditions .pressure").css({"background":"url(images/assets/down_arrow.png)", "background-size":"100% 48px", "background-position-y":"12px", "background-repeat":"no-repeat"})
          }
          $(".current-conditions .data").text(dataTunnel.humidity + "\n" + dataTunnel.dewPoint + "\n" + dataTunnel.pressure + prespace + "  \n" + dataTunnel.wind + "\n" + dataTunnel.gusts)
        } else {
          $(".current-conditions .labels").text("Humidity\nDew Point\nPressure\nWind\nGusts\n" + dataTunnel.feelsLikeTitle)
          if (dataTunnel.pressureTrend == 0) {
            $(".current-conditions .pressure").text("S")
            $(".current-conditions .pressure").css({"background":"url(images/assets/blank.png)", "background-size":"100% 48px", "background-position-y":"12px", "background-repeat":"no-repeat"})
          } else if (dataTunnel.pressureTrend == 1 || dataTunnel.pressureTrend == 3) {
            $(".current-conditions .pressure").text("")
            $(".current-conditions .pressure").css({"background":"url(images/assets/up_arrow.png)", "background-size":"100% 48px", "background-position-y":"12px", "background-repeat":"no-repeat"})
          } else if (dataTunnel.pressureTrend == 2 || dataTunnel.pressureTrend == 4) {
            $(".current-conditions .pressure").text("")
            $(".current-conditions .pressure").css({"background":"url(images/assets/down_arrow.png)", "background-size":"100% 48px", "background-position-y":"12px", "background-repeat":"no-repeat"})
          }
          $(".current-conditions .data").text(dataTunnel.humidity + "\n" + dataTunnel.dewPoint + "\n" + dataTunnel.pressure + prespace + "  \n" + dataTunnel.wind + "\n" + dataTunnel.gusts + "\n" + dataTunnel.feelsLike)
        }
        }
        
        getIcon($(".current-conditions .icon"), dataTunnel.icon, "current", "large")
        $(".current-conditions .condition").text(dataTunnel.condition)
        $(".current-conditions .temperature").text(dataTunnel.temperature)

        if (locationChoice != "spanish") {
          audioPlayer.playCC()
        }
        fadeSlideIn($(".current-conditions"), 500)
        setTimeout(() => {
          fadeSlideOut($(".current-conditions"), 500, true)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      } else {
        $(".noreport").fadeIn(500)
        setTimeout(() => {
          $(".noreport").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    nearbyCities() {
        $('.titletext').text("Currently")
        $('.headertext').text("")
        $(".nearby-cities .no-report").fadeOut(0)
        fadeSlideIn($(".nearby-cities"), 500)
        var divs = [".one", ".two", ".three", ".four"]
        var bumper = 0; if (round == 1) {bumper = 4}
        for (var i = 0; i < 4; i++) {
          if (weatherData.nearbyCities.cities[i+bumper].locationName == undefined || weatherData.nearbyCities.cities[i+bumper].locationName == "") {
            $(".nearby-cities .cityname" + divs[i]).text("")
            $(".nearby-cities .temperature" + divs[i]).text("")
            getIcon($(".nearby-cities .icon" + divs[i]), "blank", "current", "small")
            $(".nearby-cities .wind" + divs[i]).text("")
            $(".nearby-cities .no-report" + divs[i]).fadeOut(0)
          } else {
            $(".nearby-cities .cityname" + divs[i]).text(weatherData.nearbyCities.cities[i+bumper].locationName)
            $(".nearby-cities .temperature" + divs[i]).text(weatherData.nearbyCities.cities[i+bumper].temperature)
            getIcon($(".nearby-cities .icon" + divs[i]), weatherData.nearbyCities.cities[i+bumper].icon, "current", "small")
            $(".nearby-cities .wind" + divs[i]).text(weatherData.nearbyCities.cities[i+bumper].wind)
            if (weatherData.nearbyCities.cities[i+bumper].noReport == false) {
              $(".nearby-cities .no-report" + divs[i]).fadeOut(0)
            } else {
              $(".nearby-cities .no-report" + divs[i]).fadeIn(0)
            }
          }
        }
        setTimeout(() => {
          if (round < 1) {
            fadeSlideOut($(".nearby-cities"), 500, false)
            setTimeout(() => {
              round++
              currentProgram()
            }, 500);
          } else {
            fadeSlideOut($(".nearby-cities"), 500, true)
          }
        }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/2)-500);
    },
    radarChooser() {
      var rdrPgm
      if (systemSettings.appearanceSettings.nationalConfig) {
        rdrPgm = slidePrograms["dopplerRadar"]
      } else {
      /*if (radarCycle < 5) {
        rdrPgm = slidePrograms["dopplerRadar"]
        radarCycle++
      } else {
        rdrPgm = slidePrograms["radarSatellite"]
        radarCycle = 0
      }*/
     rdrPgm = Math.random() > 0.5 ? slidePrograms["dopplerRadar"] : slidePrograms["radarSatellite"];
      }
      rdrPgm()
    },
    dopplerRadar() {
      $("#slides-background").fadeOut(0)
      radarSlide = true
      var dataTunnel = locationChoice == "main" || locationChoice == "spanish" ? systemSettings.mainCity.radar : systemSettings.extraCity.cities[locationid].radar
      if (locationChoice == "spanish") {
        $('.titletext').text("Radar Doppler Local")
        $(".doppler-radar .timestamp").text("Últimas 3 horas")
        $(".doppler-radar .radar-legend-heavy").text("Fuerte")
        $(".doppler-radar .radar-legend-light").text("Débil")
      } else {
        $('.titletext').text("Local Doppler Radar")
        $(".doppler-radar .timestamp").text("Past 3 Hours")
        $(".doppler-radar .radar-legend-heavy").text("Heavy")
        $(".doppler-radar .radar-legend-light").text("Light")
      }
      $('.headertext').text("")
      //weatherData.dopplerUnavailable = false

      try {
        locradar.setProjection('mercator');
        locradarAmenities.setProjection('mercator');
        locradarAmenitiesTrans.setProjection('mercator');
        radarEchoes.setProjection('mercator');

        locradar.jumpTo({center: [dataTunnel.lon, dataTunnel.lat]});
        locradarAmenities.jumpTo({center: [dataTunnel.lon, dataTunnel.lat]});
        locradarAmenitiesTrans.jumpTo({center: [dataTunnel.lon, dataTunnel.lat]});
        radarEchoes.jumpTo({center: [dataTunnel.lon, dataTunnel.lat]});

        locradar.setZoom(dataTunnel.zoom)
        locradarAmenities.setZoom(dataTunnel.zoom)
        locradarAmenitiesTrans.setZoom(dataTunnel.zoom)
        radarEchoes.setZoom(dataTunnel.zoom)

        locradarAmenities.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'visible');//county lines
        locradarAmenities.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'visible');//black roads
        locradarAmenities.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'visible');//gray roads
      } catch(error) {
        weatherData.dopplerUnavailable = true
      }
      
      /*
      locradar.getStyle().layers.forEach(layer => {
        console.log(layer);
      });*/
      
      /*setTimeout(() => {
        console.log(radarEchoes)
        const allLayers = radarEchoes.getStyle().layers;
        radarEchoes.getStyle().layers.forEach(layer => {
          if (layer.id.includes("radarLayer_")) {
            console.log(layer.id)
            radarEchoes.setPaintProperty(layer.id, 'sample.colorscale.masks', {
              'rain': [
                [0, 'rgba(0,0,255, 0)'],
                [10, 'red'],
                [30, 'yellow'],
                [50, 'green'],
                [70, 'green']
              ]
            });
          }
          console.log(layer);
        });
      }, 2000);*/
      
      setTimeout(() => {
        
        if (!radarTransform) {
          $("#slides").css("scale","none")
          locradar.resize()
          locradarAmenities.resize()
          radarEchoes.resize()
          locradarAmenitiesTrans.resize()
          $(".doppler-radar .radar-shrink").css("transform","scaleY(0.83)")
          radarTransform = true
          $("#slides").css("scale","0.72")
        }
        
      }, 50);
      if (locationChoice != "spanish") {
        audioPlayer.playDopplerRadar()
      }
      fadeSlideIn($(".doppler-radar"), 0, 0)
      createRadarCities(locationChoice)
      createRadarIcons(locationChoice)
      $("#radar-basemap").fadeIn(0)
      $("#radar-amenities").fadeIn(566)
      $("#radar-amenities-trans").fadeIn(566)
      $(".doppler-radar .cities").fadeIn(566)
      $(".doppler-radar .icons").fadeIn(566)
      $(".doppler-radar .cities-trans").fadeIn(566)
      $(".doppler-radar .icons-trans").fadeIn(566)
      $(".doppler-radar .radar-legend").fadeIn(566)
      setTimeout(() => {
        fadeSlideOut($(".doppler-radar"), 0, true, 566)
        $("#radar-amenities").fadeOut(566)
        $("#radar-amenities-trans").fadeOut(566)
        $(".doppler-radar .cities").fadeOut(566)
        $(".doppler-radar .icons").fadeOut(566)
        $(".doppler-radar .cities-trans").fadeOut(566)
        $(".doppler-radar .icons-trans").fadeOut(566)
        $(".doppler-radar .radar-legend").fadeOut(566)
        setTimeout(() => {
          clearInterval(locRadarAnimation)
          $("#radar-basemap").fadeOut(0)
          $("#slides-background").fadeIn(0)
          setTimeout(stopLocalRadar,500)
        }, 566);
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-566);
      try {
        startLocalRadar();
        $("#radar-echoes").fadeIn(566)
        setTimeout(() => {
          $("#radar-echoes").fadeOut(566)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-566);
      } catch (error) {
        $(".tempunavailable").fadeIn(566)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(566)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-566);
      }
     setTimeout(() => {
        //$(".doppler-radar .radar-shrink").attr("style","")
        deleteRadarCities()
        deleteRadarIcons()
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);
      if (weatherData.dopplerUnavailable == false) {
        
      } else {
        
      }
      
    },
    //SATELLITE
    radarSatellite() {
      $("#slides-background").fadeOut(0)
      weatherData.satUnavailable = false
      var dataTunnel = locationChoice == "main" || locationChoice == "spanish" ? systemSettings.mainCity.radar : systemSettings.extraCity.cities[locationid].radar
      if (locationChoice == "spanish") {
        $('.titletext').text("Radar/Satéllite")
        $(".doppler-radar .timestamp").text("Últimas 5 horas")
        $(".doppler-radar .radar-legend-heavy").text("Fuerte")
        $(".doppler-radar .radar-legend-light").text("Débil")
      } else {
        $('.titletext').text("Radar/Satellite")
        $(".doppler-radar .timestamp").text("Past 5 Hours")
        $(".doppler-radar .radar-legend-heavy").text("Heavy")
        $(".doppler-radar .radar-legend-light").text("Light")
      }
      $('.headertext').text("")

      if (dataTunnel.satCoords[0] == "auto") {
        dataTunnel.satCoords = [dataTunnel.lon, dataTunnel.lat]
      }
      satmap.jumpTo({center: dataTunnel.satCoords});
      satEchoes.jumpTo({center: dataTunnel.satCoords});
      satAmenities.jumpTo({center: dataTunnel.satCoords});

      
      setTimeout(() => {
        if (!satTransform) {
          $("#slides").css("scale","none")
          satEchoes.resize()
          satmap.resize()
          satAmenities.resize()
          //$(".doppler-radar .sat-shrink").css("transform","scaleY(0.83)")
          satTransform = true
          $("#slides").css("scale","0.72")
        }
        
      }, 50);
      fadeSlideIn($(".doppler-radar"), 0, 0)
      $("#sat-basemap").fadeIn(566)
      $("#sat-amenities").fadeIn(566)
      $(".doppler-radar .radar-legend").fadeIn(566)
      setTimeout(() => {
        fadeSlideOut($(".doppler-radar"), 0, true, 566)
        $(".doppler-radar .radar-legend").fadeOut(566)
        $("#sat-amenities").fadeOut(566)
        setTimeout(() => {
          $("#slides-background").fadeIn(0)
          clearInterval(satRadarAnimation)
          setTimeout(stopSatRadar,500)
        }, 566);
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-566);
      try {
        startSatRadar();
        $("#sat-echoes").fadeIn(566)
        setTimeout(() => {
          $("#sat-echoes").fadeOut(566)
          $("#sat-basemap").fadeOut(566)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-566);
      } catch (error) {
        $(".tempunavailable").fadeIn(566)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(566)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-566);
      }
      if (weatherData.satUnavailable == false) {
        
      } else {
        
      }
    },
    localForecast() {
      var dataTunnel
      if (locationChoice == "extra") {
        dataTunnel = weatherData.localForecast.extraLoc[locationid]
      } else if (locationChoice == "main") {
        dataTunnel = weatherData.localForecast.mainLoc
      }
        $('.titletext').text("Local Forecast")
        $('.headertext').text(dataTunnel.locationName)
        $(".local-forecast .forecast").css({"font-size":"82.3px"})
        if (dataTunnel.noReport == false) {
          if (round == 0) {
            audioPlayer.playLF()
            fadeSlideIn($(".local-forecast"), 500)
          } else {
            $(".local-forecast .group").fadeIn(250)
          }
          $(".local-forecast .timetitle").text(dataTunnel.times[round].timetitle)
          $(".local-forecast .forecast").text(dataTunnel.times[round].forecast)
          fSize = 82.3
          setTimeout(() => {
            if ($(".local-forecast .forecast").height() > 565) {
              while ($(".local-forecast .forecast").height() > 565) {
                fSize--
                $(".local-forecast .forecast").css({"font-size":fSize+"px"})
              }
            }
          }, 5);
          var pre = round < 3 ? 250 : 500
          setTimeout(() => {
            if (round < 3) {
              $(".local-forecast .group").fadeOut(250)
              setTimeout(() => {
                round++
                currentProgram()
              }, 250);
            } else {
              fadeSlideOut($(".local-forecast"), 500, true)
            }
          }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/dataTunnel.times.length)-pre);
        } else {
          $(".tempunavailable").fadeIn(500)
          setTimeout(() => {
            $(".tempunavailable").fadeOut(500)
            setTimeout(() => {
              round = 0
              slideCallBack()
            }, 500);
          }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);//(slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/weatherData.localForecast.mainLoc.times.length)-500);
        }
    },
    dayPart() {
      var dataTunnel
      if (locationChoice == "extra") {
        dataTunnel = weatherData.dayPart.english.extraLoc[locationid]
      } else if (locationChoice == "spanish") {
        dataTunnel = weatherData.dayPart.spanish
      } else if (locationChoice == "main") {
        dataTunnel = weatherData.dayPart.english.mainLoc
      }
      $('.titletext').text(dataTunnel.header)
      $('.headertext').text(dataTunnel.locationName)
      var divs = [".one", ".two", ".three", ".four"]
      if (locationChoice != "spanish") {
        audioPlayer.playDP()
      }
      if (dataTunnel.noReport == false) {
        fadeSlideIn($(".daypart-forecast"), 500)
        for (var i = 0; i < 4; i++) {
          $(".daypart-forecast .section" + divs[i] + " .time").text(dataTunnel.times[i].time)
          getIcon($(".daypart-forecast .section" + divs[i] + " .icon"), dataTunnel.times[i].icon, "forecast", "small")
          $(".daypart-forecast .section" + divs[i] + " .condition").text(dataTunnel.times[i].condition)
          $(".daypart-forecast .section" + divs[i] + " .temperature").text(dataTunnel.times[i].temperature)
          $(".daypart-forecast .section" + divs[i] + " .wind").text(dataTunnel.times[i].wind)
        }
        var temps = []
        var barHeights = []
        for (var i = 0; i < 4; i++) {
          temps.push(dataTunnel.times[i].temperature)
        }
        for (var i = 0; i < 4; i++) {
          barHeights.push(calcBarHeights(dataTunnel.times[i].temperature, Math.max(...temps), Math.min(...temps), 228, 160))
        }
        ii = 0;
        $(".daypart-forecast .section").each(function() {
					$('.daypart-forecast .section' + divs[ii] + ' .bar').animate({height:barHeights[ii]+"px"}, {duration: 1000, easing: "linear"});
          $(".daypart-forecast .section" + divs[ii] + " .temperature").css("height",barHeights[ii]+"px")
					ii = ii + 1
        })
        setTimeout(() => {
          $(".daypart-forecast .temperature").fadeIn(167)
          $(".daypart-forecast .wind").fadeIn(167)
        }, 1000);

        setTimeout(() => {
          fadeSlideOut($(".daypart-forecast"), 500, true)
          setTimeout(() => {
            $(".daypart-forecast .temperature").fadeOut(0)
            $(".daypart-forecast .wind").fadeOut(0)
            $('.daypart-forecast .bar').css("height", "0px")
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    extendedForecast() {
      var dataTunnel
      var divs = [".one", ".two", ".three", ".four", ".five"]
      if (locationChoice == "extra") {
        dataTunnel = weatherData.extendedForecast.english.extraLoc[locationid]
      } else if (locationChoice == "spanish") {
        dataTunnel = weatherData.extendedForecast.spanish
      } else if (locationChoice == "main") {
        dataTunnel = weatherData.extendedForecast.english.mainLoc
      }
      if (locationChoice == "spanish") {
        $('.titletext').text("Pronóstico a largo plazo")
      } else {
        $('.titletext').text("Extended Forecast")
      }
      $('.headertext').text(dataTunnel.locationName)
      if (dataTunnel.noReport == false) {
        fadeSlideIn($(".extended-forecast"), 500)
        for (var i = 0; i < dataTunnel.days.length; i++) {
          $(".extended-forecast .column" + divs[i] + " .time").text(dataTunnel.days[i].day)
          getIcon($(".extended-forecast .column" + divs[i] + " .icon"), dataTunnel.days[i].icon, "forecast", "small")
          $(".extended-forecast .column" + divs[i] + " .condition").text(dataTunnel.days[i].condition)
          $(".extended-forecast .column" + divs[i] + " .high").text(dataTunnel.days[i].high)
          $(".extended-forecast .column" + divs[i] + " .low").text(dataTunnel.days[i].low)
        }

        setTimeout(() => {
          fadeSlideOut($(".extended-forecast"), 500, true)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    almanac() {
      var divs = [".one", ".two", ".three", ".four"]
      $('.titletext').text("Almanac")
      $('.headertext').text(weatherData.almanac.locationName)
      if (weatherData.almanac.noReport == false) {
        $(".almanac .day").text(weatherData.almanac.day)
        $(".almanac .ahigh").text(weatherData.almanac.averageHigh)
        $(".almanac .alow").text(weatherData.almanac.averageLow)
        $(".almanac .rhigh").text(weatherData.almanac.recordHigh)
        $(".almanac .rlow").text(weatherData.almanac.recordLow)
        $(".almanac .rhighyear").text(weatherData.almanac.highYear)
        $(".almanac .rlowyear").text(weatherData.almanac.lowYear)
        $(".almanac .sunrise").text(weatherData.almanac.sunrise)
        $(".almanac .sunset").text(weatherData.almanac.sunset)
        for (var i = 0; i < 4; i++) {
          $(".almanac .column" + divs[i] + " .phase").text(weatherData.almanac.moonphases[i].moon)
          $(".almanac .column" + divs[i] + " .date").text(weatherData.almanac.moonphases[i].date)
          $(".almanac .column" + divs[i] + " .icon").css({"background":"url(images/moonphases/" + weatherData.almanac.moonphases[i].moon + ".png", "background-size":"100% 100%"})
        }
        fadeSlideIn($(".almanac"), 500)
        setTimeout(() => {
          fadeSlideOut($(".almanac"), 500, true)
      } , slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        $(".noreport").fadeIn(500)
        setTimeout(() => {
          $(".noreport").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    //traffic
    trafficIntro() {
      switchProvider()
      fadeSlideIn($(".traffic-intro"), 0)
      $(".traffic-intro .circlegroup").fadeIn(500)
      $(".traffic-intro .scrollingtext").fadeIn(500)
      setTimeout(() => {
        $(".traffic-intro .intro-title").fadeIn(500)
      }, 1000);
      setTimeout(() => {
        $(".traffic-intro .circlegroup").fadeOut(500)
        $(".traffic-intro .scrollingtext").fadeOut(500)
        $(".traffic-intro .intro-title").fadeOut(500)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      setTimeout(() => {
        fadeSlideOut($(".traffic-intro"), 0, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);
    },
    trafficOverview() {
      console.log(slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration)
      $('.titletext').text("Traffic Overview")
      $('.headertext').text(systemSettings.traffic.locationName)
      var trafZoom = ((round < 1) ? systemSettings.traffic.zoomOut : systemSettings.traffic.zoomIn)
      var cap = slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration.length-1
      if (weatherData.trafficMapUnavailable == false) {
        createTrafficMapIcons(round)
        if (round == 0) {
          audioPlayer.playTrafficCond()
          fadeSlideIn($(".traffic-overview"), 500)
        } else {
          fadeSlideIn($(".traffic-overview"), 250)
        }
        setTimeout(() =>{
          if (!trafTransform) {
          $("#slides").css("scale","none")
          trafficMap.resize()
          trafTransform = true
          $("#slides").css("scale","0.72")
        }
          trafficMap.setZoom(trafZoom)
        }, 1)

         setTimeout(() => {
          setTimeout(() => {
            deleteTrafficMapIcons()
          }, 500);
           if (round < cap) {
             fadeSlideOut($(".traffic-overview"), 250, false)
             setTimeout(() => {
               round++
               currentProgram()
             }, 500);
           } else {
             fadeSlideOut($(".traffic-overview"), 500, true)
           }
         }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration[round]-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration[round]-500); 
      }
    },
    trafficReport() {
      $('.titletext').text("Traffic Report")
      $('.headertext').text(weatherData.trafficReport.locationName)
      var lastrd = false
      var bump = round*2
      var indivLength = 0
      var divs = [".top", ".bottom"]
      var initSpace = ["  ", ""]
      var blockColors = {"LOW IMPACT":"#59cb61", "MEDIUM IMPACT":"#dfcd26", "HIGH IMPACT":"#bf2026"}
      if (weatherData.trafficReport.noReport == false && weatherData.trafficReport.incidents.length > 0) {
        if (weatherData.trafficReport.incidents.length - bump <= 2) {
          lastrd = true
        }
        if (round == 0) {
          fadeSlideIn($(".traffic-report"), 500)
        } else {
          fadeSlideIn($(".traffic-report"), 250)
        }
        if (weatherData.trafficReport.incidents.length - bump == 1) {
          $(".traffic-report .bottomgroup").fadeOut(0)
          $(".traffic-report .panel.full").fadeIn(0)
          indivLength = 1
        } else {
          $(".traffic-report .bottomgroup").fadeIn(0)
          $(".traffic-report .panel.full").fadeOut(0)
          indivLength = 2
        }
        for (var i = 0; i < indivLength; i++) {
          $(".traffic-report .incident" + divs[i]).text(weatherData.trafficReport.incidents[i+bump].title)
          $(".traffic-report .intensity" + divs[i]).text(weatherData.trafficReport.incidents[i+bump].impact)
          $(".traffic-report .intensitycover" + divs[i]).text(weatherData.trafficReport.incidents[i+bump].impact)
          $(".traffic-report .intensitycover" + divs[i]).css({"color":blockColors[weatherData.trafficReport.incidents[i+bump].impact], "background-color":blockColors[weatherData.trafficReport.incidents[i+bump].impact]})
          $(".traffic-report .description" + divs[i]).text(initSpace[i] + weatherData.trafficReport.incidents[i+bump].desc)
        }
        
        setTimeout(() => {
          if (lastrd == false) {
            fadeSlideOut($(".traffic-report"), 250, false)
            setTimeout(() => {
              round++
              currentProgram()
            }, 250);
          } else {
            fadeSlideOut($(".traffic-report"), 500, true)
          }
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration[round]-500);
      } else {
        fadeSlideOut($(".traffic-report"), 0, true, 0)
      }
    },
    trafficFlow() {
      $('.titletext').text("Traffic Flow")
      $('.headertext').text(weatherData.trafficFlow.locationName)
      var fadeDur = round < (pages-1) ? 250 : 500
      var divs = [".one", ".two", ".three"]
      var bump = round*3
      var pages = Math.ceil(weatherData.trafficFlow.routes.length/3)
      var blockColors = {"GREEN":"#59cb61", "YELLOW":"#dfcd26", "RED":"#bf2026"}
      if (weatherData.trafficFlow.noReport == false && weatherData.trafficFlow.routes.length > 0) {
        if (round == 0) {
          fadeSlideIn($(".traffic-flow"), 500)
          audioPlayer.playTrafficFlow()
        } else {
          fadeSlideIn($(".traffic-flow"), 250)
          //$(".traffic-flow .panelContent").fadeIn(250)
        }
        $(".traffic-flow .panel.one .fullgroup").fadeOut(0)
        $(".traffic-flow .panel.two .fullgroup").fadeOut(0)
        $(".traffic-flow .panel.three .fullgroup").fadeOut(0)
        for (var i = 0; i < 3; i++) {

          if (weatherData.trafficFlow.routes[i+bump]) {
            $(".traffic-flow .panel" + divs[i] + " .fullgroup").fadeIn(0)
            $(".traffic-flow .panel" + divs[i] + " .description").text(weatherData.trafficFlow.routes[i+bump].from + " to " + weatherData.trafficFlow.routes[i+bump].to)
            $(".traffic-flow .panel" + divs[i] + " .routeicon").css({"background-image": "url(" + weatherData.trafficFlow.routes[i+bump].routeIcon + ")", "background-repeat":"no-repeat", "background-size":"100%"})
            if (weatherData.trafficFlow.routes[i+bump].color == "NOREPORT") {
              $(".traffic-flow .panel" + divs[i] + " .flowBlock").fadeOut(0)
              $(".traffic-flow .panel" + divs[i] + " .noIncidents").fadeOut(0)
              $(".traffic-flow .panel" + divs[i] + " .mingroup").fadeOut(0)
            } else {
              $(".traffic-flow .panel" + divs[i] + " .trafficflow").text(weatherData.trafficFlow.routes[i+bump].speed)
              $(".traffic-flow .panel" + divs[i] + " .triptime").text(weatherData.trafficFlow.routes[i+bump].travelTime)
              $(".traffic-flow .panel" + divs[i] + " .trafficflowcover").css({"background-color":blockColors[weatherData.trafficFlow.routes[i+bump].color]})
              if (weatherData.trafficFlow.routes[i+bump].speed != "CLEAR") {
                $(".traffic-flow .panel" + divs[i] + " .mingroup").fadeIn(0)
                $(".traffic-flow .panel" + divs[i] + " .flowBlock").fadeIn(0)
                $(".traffic-flow .panel" + divs[i] + " .trafficflow").css({"padding-top":"0px","font-size":"92px"})
                $(".traffic-flow .panel" + divs[i] + " .noIncidents").fadeOut(0)
              } else {
                $(".traffic-flow .panel" + divs[i] + " .mingroup").fadeOut(0)
                $(".traffic-flow .panel" + divs[i] + " .trafficflow").css({"padding-top":"45px","font-size":"50px"})
                $(".traffic-flow .panel" + divs[i] + " .flowBlock").fadeOut(0)
                $(".traffic-flow .panel" + divs[i] + " .noIncidents").fadeIn(0)
              }
            }
          }
        }

        setTimeout(() => {
          if (round < (pages-1)) {
            fadeSlideOut($(".traffic-flow"), 250, false)
            setTimeout(() => {
              round++
              currentProgram()
            }, 250);
          } else {
            fadeSlideOut($(".traffic-flow"), 500, true)
          }
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration[round]-fadeDur);
      } else {
        fadeSlideOut($(".traffic-flow"), 0, true, 0)
      }
    },
    //travel
    travelIntro() {
      switchProvider()
      //getTravelWeatherMap()
      fadeSlideIn($(".travel-intro"), 0)
      $(".travel-intro .circlegroup").fadeIn(500)
      $(".travel-intro .scrollingtext").fadeIn(500)
      setTimeout(() => {
        $(".travel-intro .intro-title").fadeIn(500)
      }, 1000);
      setTimeout(() => {
        $(".travel-intro .circlegroup").fadeOut(500)
        $(".travel-intro .scrollingtext").fadeOut(500)
        $(".travel-intro .intro-title").fadeOut(500)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      setTimeout(() => {
        fadeSlideOut($(".travel-intro"), 0, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);
    },
    travelWeather() {
      $("#slides-background").fadeOut(0)
      $('.titletext').text("Travel Weather")
      $('.headertext').text("")
      fadeSlideIn($(".travel-weather"), 0)
      // setTimeout(() => {
      //   if (!travelWeatherTransform) {
      //     $("#slides").css("scale","none")
      //     travelWeatherMap.resize()
      //     travelWeatherTransform = true
      //     $("#slides").css("scale","0.72")
      //   }
      // }, 50);
      if (weatherData.travelMapUnavailable) {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      }
      $("#travel-weather-map").fadeIn(500)
      $(".travel-weather .legend").fadeIn(500)
      setTimeout(() => {
        fadeSlideOut($(".travel-weather"), 0, true, 500)
        $(".travel-weather .legend").fadeOut(500)
        $("#travel-weather-map").fadeOut(500)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    travelForecast() {
      $("#slides-background").fadeOut(0)
      $('.titletext').fadeOut(0)
      $('.titletext').text("")
      $('.headertext').text("")
      if (systemSettings.travel.regionalMap.enabled == true) {
      var unAvailable = false
      if (weatherData.travelForecast.dayName[0] == "null") {
        unAvailable = true
      }
      if (unAvailable == false) {
        $('.titletext').text(weatherData.travelForecast.dayName[round] + " Forecast")
        if (round == 0) {
          audioPlayer.playRegionalForecast()
          $('.titletext').fadeIn(500)
          fadeSlideIn($(".travel-forecast"), 0)
          $(".travel-forecast .map-borders").fadeIn(500)
          $(".travel-forecast .cities").fadeIn(500)
        } else {
          $(".travel-forecast .cities").fadeIn(250)
          $('.titletext').fadeIn(250)
        }
        for (var i = 0; i < systemSettings.travel.regionalMap.cities.length; i++) {
          if (weatherData.travelForecast.cities[i].tfData[round].noReport == false) {
            $(".travel-forecast .cities .city." + numToWord(i)).fadeIn(0)
            $(".travel-forecast .cities .city." + numToWord(i) + " .cityname").text(weatherData.travelForecast.cities[i].tfData[round].locationName)
            getIcon($(".travel-forecast .cities .city." + numToWord(i) + " .icon"), weatherData.travelForecast.cities[i].tfData[round].icon, "forecast", "map")
            $(".travel-forecast .cities .city." + numToWord(i) + " .temperature").text(weatherData.travelForecast.cities[i].tfData[round].temperature)
          } else {
            $(".travel-forecast .cities .city." + numToWord(i)).fadeOut(0)
          }
        }

        setTimeout(() => {
          if (round < 1) {
            $(".travel-forecast .cities").fadeOut(250)
            $('.titletext').fadeOut(250)
            setTimeout(() => {
              round++
              currentProgram()
            }, 250);
          } else {
            fadeSlideOut($(".travel-forecast"), 0, true, 500)
            $(".travel-forecast .cities").fadeOut(500)
            $(".travel-forecast .map-borders").fadeOut(500)
            $('.titletext').fadeOut(500)
            setTimeout(() => {
              $('.titletext').fadeIn(0)
              $("#slides-background").fadeIn(0)
            }, 500);
          }
        }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/weatherData.travelForecast.dayName.length)-500);
      } else {
        fadeSlideIn($(".travel-forecast"), 0)
        $(".tempunavailable").fadeIn(500)
        $(".travel-forecast .map-borders").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          $(".travel-forecast .map-borders").fadeOut(500)
          setTimeout(() => {
            fadeSlideOut($(".travel-forecast"), 0, true, 500)
          }, 500);
        }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/weatherData.travelForecast.dayName.length)-500);
      }
      } else {
        fadeSlideOut($(".travel-forecast"), 0, true, 0)
        $('.titletext').fadeIn(0)
        $("#slides-background").fadeIn(0)
      }
    },
    destinationForecast() {
      var divs = [".one", ".two", ".three"]
      var bump = round*3
      var unAvailable = false
      if (weatherData.destinationForecast.dayName[0] == "null") {
        unAvailable = true
      }
      $('.titletext').fadeIn(0)
      $('.titletext').text("Destination Forecasts")
      $('.headertext').text("")
      if (unAvailable == false) {
        fadeSlideIn($(".destination-forecast"), 500)

        for (var i = 0; i < 3; i++) {
          $(".destination-forecast .daytitle" + divs[i]).text(weatherData.destinationForecast.dayName[i])
          $('.destination-forecast .panel' + divs[i] + " .cityname").text(weatherData.destinationForecast.cities[i+bump].locationName)
          for (var j = 0; j < 3; j++) {
            if (weatherData.destinationForecast.cities[i+bump].noReport == false) {
              getIcon($('.destination-forecast .panel' + divs[i] + " .day" + divs[j] + " .icon"), weatherData.destinationForecast.cities[i+bump].days[j].icon, "forecast", "small")
              $('.destination-forecast .panel' + divs[i] + " .day" + divs[j] + " .high").text(weatherData.destinationForecast.cities[i+bump].days[j].high)
              $('.destination-forecast .panel' + divs[i] + " .day" + divs[j] + " .low").text(weatherData.destinationForecast.cities[i+bump].days[j].low)
            } else {
              getIcon($('.destination-forecast .panel' + divs[i] + " .day" + divs[j] + " .icon"), "blank", "forecast", "small")
              $('.destination-forecast .panel' + divs[i] + " .day" + divs[j] + " .high").text("")
              $('.destination-forecast .panel' + divs[i] + " .day" + divs[j] + " .low").text("")
            }
          }
        }
        var rdLength = round < 2 ? 10000 : 9000
        setTimeout(() => {
          if (round < 2) {
            fadeSlideOut($(".destination-forecast"), 500, false)
            setTimeout(() => {
              round++
              currentProgram()
            }, 500);
          } else {
            fadeSlideOut($(".destination-forecast"), 500, true)
          }
        }, rdLength-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    //airport
    airportIntro() {
      switchProvider()
      fadeSlideIn($(".airport-intro"), 0)
      $(".airport-intro .circlegroup").fadeIn(500)
      $(".airport-intro .scrollingtext").fadeIn(500)
      setTimeout(() => {
        $(".airport-intro .intro-title").fadeIn(500)
      }, 1000);
      setTimeout(() => {
        $(".airport-intro .circlegroup").fadeOut(500)
        $(".airport-intro .scrollingtext").fadeOut(500)
        $(".airport-intro .intro-title").fadeOut(500)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      setTimeout(() => {
        fadeSlideOut($(".airport-intro"), 0, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);
    },
    airportConditions() {
      $('.titletext').text("Current Airport Conditions")
      $('.headertext').text("")
      if (systemSettings.airport.mainEnabled == true) {
      if (weatherData.localAirportConditions[round].noReport == false) {
        if (round == 0) {
          audioPlayer.playAirportConditions()
        }
        fadeSlideIn($(".airport-conditions"), 500)
        $(".airport-conditions .airportname").text(weatherData.localAirportConditions[round].airportName)
        $(".airport-conditions .arrivals .delay").html(weatherData.localAirportConditions[round].arrivalDelay)
        $(".airport-conditions .arrivals .reason").text(weatherData.localAirportConditions[round].arrivalDelayReason)
        $(".airport-conditions .departures .delay").html(weatherData.localAirportConditions[round].departureDelay)
        $(".airport-conditions .departures .reason").text(weatherData.localAirportConditions[round].departureDelayReason)
        getIcon($(".airport-conditions .icon"), weatherData.localAirportConditions[round].icon, "current", "medium")
        $(".airport-conditions .condition").text(weatherData.localAirportConditions[round].condition)
        $(".airport-conditions .temperature").text(weatherData.localAirportConditions[round].temperature)

        setTimeout(() => {
        if (round < weatherData.localAirportConditions.length - 1) {
          fadeSlideOut($(".airport-conditions"), 500, false)
          setTimeout(() => {
            round++
            currentProgram()
          }, 500);
        } else {
          fadeSlideOut($(".airport-conditions"), 500, true)
        }
      }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/weatherData.localAirportConditions.length)-500);
      } else {
        $(".datanotavailable").fadeIn(500)

        setTimeout(() => {
          if (round < weatherData.localAirportConditions.length - 1) {
          $(".datanotavailable").fadeOut(500)
            setTimeout(() => {
              round++
              currentProgram()
            }, 500);
          } else {
            $(".datanotavailable").fadeOut(500)
            setTimeout(() => {
              round = 0
              slideCallBack()
            }, 500);
          }
        }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/weatherData.localAirportConditions.length)-500);
      }
      } else {
        fadeSlideOut($(".airport-conditions"), 0, true, 0)
      }
    },
    nationalAirports() {
      //I tried something new for the national airports
      //if you don't like it then feel free to revert back to original
      //-jenson
      $('.titletext').text("Current Airport Conditions")
      $('.headertext').text("")
      var divs = [".one", ".two", ".three", ".four"]
      var bump = round*4
      var arptCap = 6 - systemSettings.airport.main.length;
      if(arptCap > 4) arptCap = 4;
      fadeSlideIn($(".national-airports"), 500)
      for (var i = 0; i < 4; i++) {
        $(".national-airports .airport" + divs[i]).text(weatherData.nationalAirportConditions[bump + i].airportName)
        $(".national-airports .temperature" + divs[i]).text(weatherData.nationalAirportConditions[bump + i].temperature)
        getIcon($(".national-airports .icon" + divs[i]), weatherData.nationalAirportConditions[bump + i].icon, "current", "small")
        $(".national-airports .delay" + divs[i]).html(weatherData.nationalAirportConditions[bump + i].delay)
      }
      setTimeout(() => {
        if (round < arptCap - 1) {
          fadeSlideOut($(".national-airports"), 500, false)
          setTimeout(() => {
            round++
            currentProgram()
          }, 500);
        } else {
          fadeSlideOut($(".national-airports"), 500, true)
        }
      }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/arptCap)-500);
    },
    //international
    internationalIntro() {
      switchProvider()
      fadeSlideIn($(".international-intro"), 0)
      $(".international-intro .circlegroup").fadeIn(500)
      $(".international-intro .scrollingtext").fadeIn(500)
      setTimeout(() => {
        $(".international-intro .intro-title").fadeIn(500)
      }, 1000);
      setTimeout(() => {
        $(".international-intro .circlegroup").fadeOut(500)
        $(".international-intro .scrollingtext").fadeOut(500)
        $(".international-intro .intro-title").fadeOut(500)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      setTimeout(() => {
        fadeSlideOut($(".international-intro"), 0, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);
    },
    internationalMap() {
      if (round == 0) {$("#slides-background").fadeOut(0)}
      var divs = [".zero", ".one", ".two", ".three", ".four", ".five", ".six", ".seven"]
      var roundToRegion = systemSettings.international.mapOrder;
      var regionToObj = {
        "europe":weatherData.internationalMap.europe,
        "canada":weatherData.internationalMap.canada,
        "caribbean":weatherData.internationalMap.caribbean,
        "southamerica":weatherData.internationalMap.southamerica,
        "britain":weatherData.internationalMap.britain,
        "mexico":weatherData.internationalMap.mexico,
        "africa":weatherData.internationalMap.africa,
        "india":weatherData.internationalMap.india,
        "eastasia":weatherData.internationalMap.eastasia,
        "oceania":weatherData.internationalMap.oceania,
        "australia":weatherData.internationalMap.australia
      }
      var regionExt = regionToObj[systemSettings.international.mapOrder[round]]
      $('.titletext').text("International Forecast")
      $('.headertext').text("")

      $(".international-map .dayname").text(regionExt[0].dayName)
      for (var i = 0; i < regionExt.length; i++) {
        if (regionExt[i].noReport == false) {
          $(".international-map .cities." + roundToRegion[round] + " .city" + divs[i] + " .cityname").text(regionExt[i].locationName)
          $(".international-map .cities." + roundToRegion[round] + " .city" + divs[i] + " .temperature").text(regionExt[i].temperature)
          getIcon($(".international-map .cities." + roundToRegion[round] + " .city" + divs[i] + " .icon"), regionExt[i].icon, "forecast", "small")
        } else {
          $(".international-map .cities." + roundToRegion[round] + " .city" + divs[i] + " .cityname").text(regionExt[i].locationName)
          $(".international-map .cities." + roundToRegion[round] + " .city" + divs[i] + " .temperature").text("")
          getIcon($(".international-map .cities." + roundToRegion[round] + " .city" + divs[i] + " .icon"), "blank", "forecast", "small")
        }
      }

      fadeSlideIn($(".international-map"), 0)
      $(".international-map ." + roundToRegion[round]).fadeIn(500)
      $(".international-map .dayname").fadeIn(500)

      setTimeout(() => {
        if (round < systemSettings.international.maxMaps - 1) {
          $(".international-map ." + roundToRegion[round]).fadeOut(500)
          $(".international-map .dayname").fadeOut(500)
          setTimeout(() => {
            round++
            currentProgram()
          }, 500);
        } else {
          $(".international-map ." + roundToRegion[round]).fadeOut(500)
          $(".international-map .dayname").fadeOut(500)
          fadeSlideOut($(".international-map"), 0, true, 500)
          setTimeout(() => {
            $("#slides-background").fadeIn(0)
          }, 500);
        }
      }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/systemSettings.international.maxMaps)-500);
    },
    internationalForecast() {
      var divs = [".one", ".two", ".three"]
      var bump = round*3
      var unAvailable = false
      if (weatherData.internationalForecast.dayName[0] == "null") {
        unAvailable = true
      }
      $('.titletext').text("International Forecasts")
      $('.headertext').text("")
      if (unAvailable == false) {
        fadeSlideIn($(".international-forecast"), 500)

        for (var i = 0; i < 3; i++) {
          $(".international-forecast .daytitle" + divs[i]).text(weatherData.internationalForecast.dayName[i])
          $('.international-forecast .panel' + divs[i] + " .cityname").text(weatherData.internationalForecast.cities[i+bump].locationName)
          for (var j = 0; j < 3; j++) {
            if (weatherData.internationalForecast.cities[i+bump].noReport == false) {
              getIcon($('.international-forecast .panel' + divs[i] + " .day" + divs[j] + " .icon"), weatherData.internationalForecast.cities[i+bump].days[j].icon, "forecast", "small")
              $('.international-forecast .panel' + divs[i] + " .day" + divs[j] + " .high").text(weatherData.internationalForecast.cities[i+bump].days[j].high)
              $('.international-forecast .panel' + divs[i] + " .day" + divs[j] + " .low").text(weatherData.internationalForecast.cities[i+bump].days[j].low)
            } else {
              getIcon($('.international-forecast .panel' + divs[i] + " .day" + divs[j] + " .icon"), "blank", "forecast", "small")
              $('.international-forecast .panel' + divs[i] + " .day" + divs[j] + " .high").text("")
              $('.international-forecast .panel' + divs[i] + " .day" + divs[j] + " .low").text("")
            }
          }
        }
        var intlCap = 6 - systemSettings.international.maxMaps;
        if(intlCap > 4) intlCap = 4;
        var rdLength = round < 2 ? 9000 : 10000
        setTimeout(() => {
          if (round < intlCap - 1) {
            fadeSlideOut($(".international-forecast"), 500, false)
            setTimeout(() => {
              round++
              currentProgram()
            }, 500);
          } else {
            fadeSlideOut($(".international-forecast"), 500, true)
          }
        }, rdLength-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    //golf
    golfIntro() {
      switchProvider()
      fadeSlideIn($(".golf-intro"), 0)
      $(".golf-intro .circlegroup").fadeIn(500)
      $(".golf-intro .scrollingtext").fadeIn(500)
      setTimeout(() => {
        $(".golf-intro .intro-title").fadeIn(500)
      }, 1000);
      setTimeout(() => {
        $(".golf-intro .circlegroup").fadeOut(500)
        $(".golf-intro .scrollingtext").fadeOut(500)
        $(".golf-intro .intro-title").fadeOut(500)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      setTimeout(() => {
        fadeSlideOut($(".golf-intro"), 0, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);
    },
    teeTime() {
      $('.titletext').text("Tee Time Forecast")
      $('.headertext').text(weatherData.teeTime.locationName)
      var divs = [".one", ".two", ".three", ".four", ".five"]
      if (weatherData.teeTime.noReport == false) {
        fadeSlideIn($(".teetime"), 500)
        for (var i = 0; i < 5; i++) {
          $(".teetime .section" + divs[i] + " .time").text(weatherData.teeTime.times[i].time)
          getIcon($(".teetime .section" + divs[i] + " .icon"), weatherData.teeTime.times[i].icon, "forecast", "small")
          $(".teetime .section" + divs[i] + " .dayname").text(weatherData.teeTime.times[i].day)
          $(".teetime .section" + divs[i] + " .temperature").text(weatherData.teeTime.times[i].temperature)
          $(".teetime .section" + divs[i] + " .wind").text(weatherData.teeTime.times[i].wind)
        }
        //lowest height, 205, highest height, 295
        var temps = []
        var barHeights = []
        for (var i = 0; i < 5; i++) {
          temps.push(weatherData.teeTime.times[i].temperature)
        }
        for (var i = 0; i < 5; i++) {
          barHeights.push(calcBarHeights(weatherData.teeTime.times[i].temperature, Math.max(...temps), Math.min(...temps), 295, 215))
        }
        ii = 0
        $(".teetime .section").each(function() {
					$('.teetime .section' + divs[ii] + ' .bar').animate({height:barHeights[ii]+"px"}, {duration: 1000, easing: "linear"});
          $(".teetime .section" + divs[ii] + " .temperature").css("height",barHeights[ii]+"px")
					ii = ii + 1
        })
        setTimeout(() => {
          $(".teetime .temperature").fadeIn(167)
          $(".teetime .wind").fadeIn(167)
        }, 1000);

        setTimeout(() => {
          fadeSlideOut($(".teetime"), 500, true)
          setTimeout(() => {
            $(".teetime .temperature").fadeOut(0)
            $(".teetime .wind").fadeOut(0)
            $('.teetime .bar').css("height", "0px")
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    golfIndex() {
      $('.titletext').text("Golf Index Forecast")
      $('.headertext').text("")
      $("#slides-background").fadeOut(0)
      fadeSlideIn($(".golf-index"), 0)
      
      //getGolfIndexMap()
      // setTimeout(() => {
      //   if (!golfIndexTransform) {
      //     $("#slides").css("scale","none")
      //     golfIndexMap.resize()
      //     golfIndexTransform = true
      //     $("#slides").css("scale","0.72")
      //   }
      // }, 50);
      if (weatherData.golfIndexUnavailable) {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      }
      $("#golf-index-map").fadeIn(500)
      $(".golf-index .legend").fadeIn(500)
      setTimeout(() => {
        fadeSlideOut($(".golf-index"), 0, true, 500)
        $(".golf-index .legend").fadeOut(500)
        $("#golf-index-map").fadeOut(500)
        setTimeout(() => {
          $("#slides-background").fadeIn(0)
        }, 500);
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    courseForecast() {
      divs = [".one", ".two", ".three"]
      var nameMargin = [0, 0, -45, -12, 18, 42, 78, 107, 110, 110, 122]
      $('.titletext').text("Golf Course Forecast")
      $('.headertext').text("")
      if (weatherData.courseForecast[round].noReport == false) {
        fadeSlideIn($(".course-forecast"), 500)
        $(".course-forecast .coursename").text(weatherData.courseForecast[round].locationName)
        for (var i = 0; i < 3; i++) {
          $(".course-forecast .section" + divs[i] + " .dayname").text(weatherData.courseForecast[round].days[i].day)
          $(".course-forecast .section" + divs[i] + " .high").text(weatherData.courseForecast[round].days[i].high)
          $(".course-forecast .section" + divs[i] + " .low").text(weatherData.courseForecast[round].days[i].low)
          $(".course-forecast .section" + divs[i] + " .wind").text(weatherData.courseForecast[round].days[i].wind)
          if (weatherData.courseForecast[round].days[i].index != "FAIL") {
            $(".course-forecast .section" + divs[i] + " .index").css({"margin-left": nameMargin[weatherData.courseForecast[round].days[i].index]})
            $(".course-forecast .section" + divs[i] + " .bar").fadeIn(0)
            $(".course-forecast .section" + divs[i] + " .arrow").fadeIn(0)
          } else {
            $(".course-forecast .section" + divs[i] + " .bar").fadeOut(0)
            $(".course-forecast .section" + divs[i] + " .arrow").fadeOut(0)
          }
          $(".course-forecast .section" + divs[i] + " .index").text(weatherData.courseForecast[round].days[i].indexName)
          getIcon($(".course-forecast .section" + divs[i] + " .icon"), weatherData.courseForecast[round].days[i].icon, "forecast", "medium")
        }

        setTimeout(() => {
          for (var i = 0; i < 3; i++) {
            if (weatherData.courseForecast[round].days[i].index != "FAIL") {
              $(".course-forecast .section" + divs[i] + " .arrow").animate({"margin-left": weatherData.courseForecast[round].days[i].index*29.625}, {duration: weatherData.courseForecast[round].days[i].index*250, easing: "linear"})
            }
          }
          if (weatherData.courseForecast[round].days[0].index != "FAIL") {
            setTimeout(() => {
              $(".course-forecast .section.one .index").fadeIn(250)
            }, weatherData.courseForecast[round].days[0].index*250);
          }
          if (weatherData.courseForecast[round].days[1].index != "FAIL") {
            setTimeout(() => {
              $(".course-forecast .section.two .index").fadeIn(250)
            }, weatherData.courseForecast[round].days[1].index*250);
          }
          if (weatherData.courseForecast[round].days[2].index != "FAIL") {
            setTimeout(() => {
              $(".course-forecast .section.three .index").fadeIn(250)
            }, weatherData.courseForecast[round].days[2].index*250);
          }
        }, 500);
        setTimeout(() => {
          if (round < (weatherData.courseForecast.length - 1)) {
            fadeSlideOut($(".course-forecast"), 500, false)
            setTimeout(() => {
              round++
              currentProgram()
              for (var i = 0; i < 3; i++) {
                $(".course-forecast .section" + divs[i] + " .arrow").css({"margin-left": "0px"})
                $(".course-forecast .section" + divs[i] + " .index").fadeOut(0)
              }
            }, 500);
          } else {
            fadeSlideOut($(".course-forecast"), 500, true)
            setTimeout(() => {
              for (var i = 0; i < 3; i++) {
                $(".course-forecast .section" + divs[i] + " .arrow").css({"margin-left": "0px"})
                $(".course-forecast .section" + divs[i] + " .index").fadeOut(0)
              }
            }, 500);
          }
        }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/weatherData.courseForecast.length)-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          if (round < (weatherData.courseForecast.length - 1)) {
            $(".tempunavailable").fadeOut(500)
            setTimeout(() => {
              round++
              currentProgram()
            }, 500);
          } else {
            $(".tempunavailable").fadeOut(500)
            setTimeout(() => {
              round = 0
              slideCallBack()
            }, 500);
          }
        }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/weatherData.courseForecast.length)-500); 
      }
    },
    golfPromo() {
      $('.titletext').text("")
      $('.headertext').text("")
      $('.titlearrow').fadeOut(0)
      fadeSlideIn($(".golf-promo"), 500)

      setTimeout(() => {
        fadeSlideOut($(".golf-promo"), 500, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    //health
    healthIntro() {
      switchProvider()
      fadeSlideIn($(".health-intro"), 0)
      $(".health-intro .circlegroup").fadeIn(500)
      $(".health-intro .scrollingtext").fadeIn(500)
      setTimeout(() => {
        $(".health-intro .intro-title").fadeIn(500)
      }, 1000);
      setTimeout(() => {
        $(".health-intro .circlegroup").fadeOut(500)
        $(".health-intro .scrollingtext").fadeOut(500)
        $(".health-intro .intro-title").fadeOut(500)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      setTimeout(() => {
        fadeSlideOut($(".health-intro"), 0, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);
    },
    outdoorActivity() {
      $('.titletext').text("Outdoor Activity")
      $('.headertext').text(weatherData.outdoorActivity.locationName)
      if (weatherData.outdoorActivity.noReport == false) {
        if (weatherData.outdoorActivity.low == "none") {
          $(".outdoor-activity .low").fadeOut(0)
          $(".outdoor-activity .lowlabel").fadeOut(0)
          $(".outdoor-activity .highlabel").css({"top":"370px","left":"164px"})
          $(".outdoor-activity .high").css({"top":"344px","left":"295px"})
        } else {
          $(".outdoor-activity .low").fadeIn(0)
          $(".outdoor-activity .lowlabel").fadeIn(0)
          $(".outdoor-activity .highlabel").css({"top":"335px","left":"382px"})
          $(".outdoor-activity .high").css({"top":"397px","left":"356px"})
        }
        $(".outdoor-activity .dayname").text("Forecast for " + weatherData.outdoorActivity.dayName)
        getIcon($(".outdoor-activity .icon"), weatherData.outdoorActivity.icon, "forecast", "large")
        $(".outdoor-activity .low").text(weatherData.outdoorActivity.low)
        $(".outdoor-activity .high").text(weatherData.outdoorActivity.high)
        if (weatherData.outdoorActivity.feelsLikeNum == weatherData.outdoorActivity.high) {
          $(".outdoor-activity .feelslike").text("")
        } else {
          $(".outdoor-activity .feelslike").text(weatherData.outdoorActivity.feelsLike)
        }
        $(".outdoor-activity .precip").text(weatherData.outdoorActivity.precipChance)
        $(".outdoor-activity .humidity").text(weatherData.outdoorActivity.humidity)
        $(".outdoor-activity .wind").text(weatherData.outdoorActivity.wind)
        fadeSlideIn($(".outdoor-activity"), 500)

        setTimeout(() => {
          fadeSlideOut($(".outdoor-activity"), 500, true)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    allergyReport() {
      divs = [".one", ".two", ".three", ".four"]
      if (weatherData.pollen.noReport == false) {
        $(".allergy-report .arrow.one").css({"margin-left":"0px"})
        $(".allergy-report .arrow.two").css({"margin-left":"0px"})
        $(".allergy-report .arrow.three").css({"margin-left":"0px"})
        $(".allergy-report .arrow.four").css({"margin-left":"0px"})
        $('.titletext').text("Allergy Report")
        $('.headertext').text(weatherData.pollen.locationName)
        $(".allergy-report .treetype").text(weatherData.pollen.treeType)
        if (weatherData.pollen.pollenCountCategory == undefined || weatherData.pollen.pollenCount == "") {
          $(".allergy-report .count").fadeOut(0)
          $(".allergy-report .moreinfo").fadeIn(0)
        } else {
          $(".allergy-report .moreinfo").fadeOut(0)
          $(".allergy-report .count").fadeIn(0)
          $(".allergy-report .pollencount").text(weatherData.pollen.pollenCount)
          $(".allergy-report .pollencategory").text(weatherData.pollen.pollenCountCategory)
        }
        $(".allergy-report .dayname").text("As of " + weatherData.pollen.date)
        fadeSlideIn($(".allergy-report"), 500)
        audioPlayer.playPollenReport()

        setTimeout(() => {
          for (var i = 0; i < 4; i++) {
            $(".allergy-report .arrow" + divs[i]).animate({"margin-left": weatherData.pollen.indices[i]*108 + "px"}, {duration: weatherData.pollen.indices[i]*500, easing: "linear",})
          }
        }, 500);

        setTimeout(() => {
          fadeSlideOut($(".allergy-report"), 500, true)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        $('.headertext').text("")
        $('.titletext').text("")
        fadeSlideOut($(".allergy-report"), 0, true)
      }
    },
    healthForecast() {
      divs = [".one", ".two"]
      $('.titletext').text("Health Forecast")
      $('.headertext').text(weatherData.achesBreathe.locationName)
      var unAvailale = ((weatherData.achesBreathe.achesIndex == "FAIL" && weatherData.achesBreathe.breatheIndex == "FAIL") ? true : false)
      if (unAvailale == false) {
        $(".health-forecast .arrow.one").css({"margin-left":"0px"})
        $(".health-forecast .arrow.two").css({"margin-left":"0px"})
        $(".health-forecast .index.one").css({"margin-left":"0px"})
        $(".health-forecast .index.two").css({"margin-left":"0px"})
        $(".health-forecast .index").fadeOut(0)
        $(".health-forecast .dayname").text(weatherData.achesBreathe.dayName)
        $(".health-forecast .index.one").text(weatherData.achesBreathe.achesWord)
        $(".health-forecast .index.two").text(weatherData.achesBreathe.breatheWord)
        fadeSlideIn($(".health-forecast"), 500)

        setTimeout(() => {
          $(".health-forecast .arrow.one").animate({"margin-left": weatherData.achesBreathe.achesIndex*43.2 + "px"}, {duration: weatherData.achesBreathe.achesIndex*200, easing: "linear",})
          $(".health-forecast .index.one").animate({"margin-left": weatherData.achesBreathe.achesIndex*43.2 + "px"}, {duration: weatherData.achesBreathe.achesIndex*200, easing: "linear",})
          $(".health-forecast .arrow.two").animate({"margin-left": flipTen(weatherData.achesBreathe.breatheIndex)*43.2 + "px"}, {duration: flipTen(weatherData.achesBreathe.breatheIndex)*200, easing: "linear",})
          $(".health-forecast .index.two").animate({"margin-left": flipTen(weatherData.achesBreathe.breatheIndex)*43.2 + "px"}, {duration: flipTen(weatherData.achesBreathe.breatheIndex)*200, easing: "linear",})
          setTimeout(() => {
            $(".health-forecast .index.one").fadeIn(250)
          }, weatherData.achesBreathe.achesIndex*200);
          setTimeout(() => {
            $(".health-forecast .index.two").fadeIn(250)
          }, flipTen(weatherData.achesBreathe.breatheIndex)*200);
        }, 500);

        setTimeout(() => {
          fadeSlideOut($(".health-forecast"), 500, true)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    airQuality() {
      var qualities = ["Good", "Moderate", "Unhealthy for sensitive groups", "Hazardous", "Extreme"]
      var margins = [0, 104, 190, 312, 416]
      $('.titletext').text("Air Quality Forecast")
      $('.headertext').text(weatherData.airQuality.locationName)
      if (weatherData.airQuality.noReport == false) {
        $(".air-quality .dayname").text(weatherData.airQuality.dayName)
        fadeSlideIn($(".air-quality"), 500)
        if (weatherData.airQuality.ozoneAction) {
          $(".air-quality .ozone-action").fadeIn(0)
        } else {
          $(".air-quality .ozone-action").fadeOut(0)
        }
        $(".air-quality .pollutant").text(weatherData.airQuality.primaryPollutant)
        $(".air-quality .arrow").fadeOut(0)
        $(".air-quality .index").fadeOut(0)
        $(".air-quality .arrow").css({"margin-bottom":"0px"})
        $(".air-quality .index").css({"margin-bottom":"0px"})
        $(".air-quality .index").text(qualities[weatherData.airQuality.index])
        setTimeout(() => {
          $(".air-quality .arrow").fadeIn(150)
          $(".air-quality .arrow").animate({"margin-bottom": weatherData.airQuality.index*104 + "px"}, {duration: weatherData.airQuality.index*1000, easing: "linear",})
          $(".air-quality .index").animate({"margin-bottom": margins[weatherData.airQuality.index] + "px"}, {duration: weatherData.airQuality.index*1000, easing: "linear",})
          setTimeout(() => {
            $(".air-quality .index").fadeIn(250)
          }, weatherData.airQuality.index*1000);
        }, 250);

        setTimeout(() => {
          fadeSlideOut($(".air-quality"), 500, true)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    uvIndex() {
      var m = 246/11
      var divs = [".one", ".two", ".three"]
      var unAvailable = false
      if (weatherData.uvIndex.current.noReport == true && weatherData.uvIndex.forecast.noReport == true) {
        unAvailable == true
      }
      $('.titletext').text("Ultraviolet Index")
      if (unAvailable == false) {
        $('.headertext').text(weatherData.uvIndex.locationName)
        $(".uv-index .index").fadeOut(0)
        $(".uv-index .description").fadeOut(0)
        $(".uv-index .bar").css({"height":"0px"})
        $(".uv-index .index").css({"margin-bottom":"0px"})
        $(".uv-index .description").css({"margin-bottom":"0px"})
        if (weatherData.uvIndex.current.noReport == false) {
          $(".uv-index .currentgroup").fadeIn(0)
          $(".uv-index .currentgroup .index").text(weatherData.uvIndex.current.index)
          $(".uv-index .currentgroup .description").text(weatherData.uvIndex.current.word)
          $(".uv-index .currentgroup .bar").animate({"height": Math.round(weatherData.uvIndex.current.index*m) + "px"}, {duration: weatherData.uvIndex.current.index*150, easing: "linear",})
          $(".uv-index .currentgroup .index").css({"margin-bottom": weatherData.uvIndex.current.index*m + "px"})
          $(".uv-index .currentgroup .description").css({"margin-bottom": weatherData.uvIndex.current.index*m + "px"})
          if (weatherData.uvIndex.current.index == 1) {
              $(".uv-index .currentgroup .index").css({"padding-bottom":"10px"})
              $(".uv-index .currentgroup .description").css({"padding-bottom":"10px"})
            } else if (weatherData.uvIndex.current.index <= 0) {
              $(".uv-index .currentgroup .index").css({"padding-bottom":"30px"})
              $(".uv-index .currentgroup .description").css({"padding-bottom":"30px"})
            } else {
              $(".uv-index .currentgroup .index").css({"padding-bottom":"0px"})
              $(".uv-index .currentgroup .description").css({"padding-bottom":"0px"})
            }
          setTimeout(() => {
            $(".uv-index .currentgroup .index").fadeIn(250)
            $(".uv-index .currentgroup .description").fadeIn(250)
          }, weatherData.uvIndex.current.index*150);
        } else {
          $(".uv-index .currentgroup").fadeOut(0)
        }
        if (weatherData.uvIndex.forecast.noReport == false) {
          $(".uv-index .fcstgroup").fadeIn(0)
          $(".uv-index .uvunavailable").fadeOut(0)
          for (var i = 0; i < 3; i++) {
            $(".uv-index .fcstgroup .time" + divs[i]).text(weatherData.uvIndex.forecast.times[i].hour)
            $(".uv-index .fcstgroup .day" + divs[i]).text(weatherData.uvIndex.forecast.times[i].day)
            $(".uv-index .fcstgroup .index" + divs[i]).text(weatherData.uvIndex.forecast.times[i].index)
            $(".uv-index .fcstgroup .description" + divs[i]).text(weatherData.uvIndex.forecast.times[i].word)
            $(".uv-index .fcstgroup .bar" + divs[i]).animate({"height": Math.round(weatherData.uvIndex.forecast.times[i].index*m) + "px"}, {duration: weatherData.uvIndex.forecast.times[i].index*150, easing: "linear",})
            $(".uv-index .fcstgroup .index" + divs[i]).css({"margin-bottom": weatherData.uvIndex.forecast.times[i].index*m + "px"})
            if (weatherData.uvIndex.forecast.times[i].index == 1) {
              $(".uv-index .fcstgroup .index" + divs[i]).css({"padding-bottom":"10px"})
              $(".uv-index .fcstgroup .description" + divs[i]).css({"padding-bottom":"10px"})
            } else if (weatherData.uvIndex.forecast.times[i].index <= 0) {
              $(".uv-index .fcstgroup .index" + divs[i]).css({"padding-bottom":"30px"})
              $(".uv-index .fcstgroup .description" + divs[i]).css({"padding-bottom":"30px"})
            } else {
              $(".uv-index .fcstgroup .index" + divs[i]).css({"padding-bottom":"0px"})
              $(".uv-index .fcstgroup .description" + divs[i]).css({"padding-bottom":"0px"})
            }
            $(".uv-index .fcstgroup .description" + divs[i]).css({"margin-bottom": Math.round(weatherData.uvIndex.forecast.times[i].index*m) + "px"})
          }
          setTimeout(() => {
            $(".uv-index .fcstgroup .index.one").fadeIn(250)
            $(".uv-index .fcstgroup .description.one").fadeIn(250)
          }, weatherData.uvIndex.forecast.times[0].index*150);
          setTimeout(() => {
            $(".uv-index .fcstgroup .index.two").fadeIn(250)
            $(".uv-index .fcstgroup .description.two").fadeIn(250)
          }, weatherData.uvIndex.forecast.times[1].index*150);
          setTimeout(() => {
            $(".uv-index .fcstgroup .index.three").fadeIn(250)
            $(".uv-index .fcstgroup .description.three").fadeIn(250)
          }, weatherData.uvIndex.forecast.times[2].index*150);
        } else {
          $(".uv-index .fcstgroup").fadeOut(0)
          $(".uv-index .uvunavailable").fadeIn(0)
        }

        fadeSlideIn($(".uv-index"), 500)

        setTimeout(() => {
          fadeSlideOut($(".uv-index"), 500, true)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    healthTip() {
      $('.titletext').text("Weather Safety Tips")
      $('.headertext').text("")
      fadeSlideIn($(".health-tip"), 500)
      tipsLib = dateFns.isWithinInterval(new Date(), { start: summerTipCut, end: winterTipCut }) ? healthTipSummer : healthTipWinter
      healthTipId = Math.round(Math.random() * ((tipsLib.length-1) - 0));
      $(".health-tip .healthtip").html(tipsLib[healthTipId])
      setTimeout(() => {
        healthTipId++
        if (healthTipId >= tipsLib.length) {
          healthTipId = 0
        }
        fadeSlideOut($(".health-tip"), 500, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    healthPromo() {
      $('.titletext').text("")
      $('.headertext').text("")
      $('.titlearrow').fadeOut(0)
      fadeSlideIn($(".health-promo"), 500)

      setTimeout(() => {
        fadeSlideOut($(".health-promo"), 500, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    //garden
    gardenIntro() {
      switchProvider()
      fadeSlideIn($(".garden-intro"), 0)
      $(".garden-intro .circlegroup").fadeIn(500)
      $(".garden-intro .scrollingtext").fadeIn(500)
      setTimeout(() => {
        $(".garden-intro .intro-title").fadeIn(500)
      }, 1000);
      setTimeout(() => {
        $(".garden-intro .circlegroup").fadeOut(500)
        $(".garden-intro .scrollingtext").fadeOut(500)
        $(".garden-intro .intro-title").fadeOut(500)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      setTimeout(() => {
        fadeSlideOut($(".garden-intro"), 0, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);
    },
    gardenForecast() {
      $('.titletext').text("Gardening Forecast")
      $('.headertext').text(weatherData.gardeningIndex.locationName)
      var nameMargin = [30,30,61,122,183,244,305,366,427,488,618]
      if (weatherData.gardeningIndex.noReport == false) {
        fadeSlideIn($(".garden-forecast"), 500)
        $(".garden-forecast .dayname").text(weatherData.gardeningIndex.dayName)
        getIcon($(".garden-forecast .icon"), weatherData.gardeningIndex.icon, "forecast", "medium")
        $(".garden-forecast .high").text(weatherData.gardeningIndex.high)
        $(".garden-forecast .precip").text(weatherData.gardeningIndex.precipChance)
        $(".garden-forecast .cloudcover").text(weatherData.gardeningIndex.cloudCover)
        if (weatherData.gardeningIndex.low == "none") {
          $(".garden-forecast .lowtitle").fadeOut(0)
          $(".garden-forecast .low").fadeOut(0)
          $(".garden-forecast .low").text("")
          $(".garden-forecast .high").css({"top":"319px", "left":"297px"})
          $(".garden-forecast .hightitle").css({"top":"349px", "left":"155px"})
        } else {
          $(".garden-forecast .lowtitle").fadeIn(0)
          $(".garden-forecast .low").fadeIn(0)
          $(".garden-forecast .low").text(weatherData.gardeningIndex.low)
          $(".garden-forecast .high").css({"top":"332px", "left":"317px"})
          $(".garden-forecast .hightitle").css({"top":"284px", "left":"334px"})
        }
        if (weatherData.gardeningIndex.wateringIndex != "FAIL") {
          $(".garden-forecast .box").fadeIn(0)
          $(".garden-forecast .arrow").fadeIn(0)
          $(".garden-forecast .index").text(weatherData.gardeningIndex.wateringIndexWord)
          
          $(".garden-forecast .arrow").animate({"margin-left":(weatherData.gardeningIndex.wateringIndex-1)*61 + "px"}, {duration: (weatherData.gardeningIndex.wateringIndex-1)*250, easing: "linear"})
          setTimeout(() => {
            $(".garden-forecast .index").fadeIn(500)
            $(".garden-forecast .index").css({"display":"flex","margin-left":nameMargin[weatherData.gardeningIndex.wateringIndex] + "px"})
          }, (weatherData.gardeningIndex.wateringIndex-1)*250);
        } else {
          $(".garden-forecast .box").fadeOut(0)
          $(".garden-forecast .arrow").fadeOut(0)
          $(".garden-forecast .index").text("")
        }
        setTimeout(() => {
          fadeSlideOut($(".garden-forecast"), 500, true)
          setTimeout(() => {
            $(".garden-forecast .arrow").css({"margin-left":"0px"})
            $(".garden-forecast .index").css({"margin-left":"0px"})
            $(".garden-forecast .index").fadeOut(0)
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    estimatedPrecip() {
      $("#slides-background").fadeOut(0)
      $('.titletext').text("Estimated Precip")
      $('.headertext').text("")
      $("#slides-background").fadeOut(0)
      fadeSlideIn($(".estimated-precip"), 0)

      //getEstimatedPrecipMap()
      // setTimeout(() => {
      //   if (!estimatedPrecipTransform) {
      //     $("#slides").css("scale","none")
      //     estimatedPrecipMap.resize()
      //     estimatedPrecipTransform = true
      //     $("#slides").css("scale","0.72")
      //   }
      // }, 50);
      if (weatherData.estimatedPrecipMapUnavailable) {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      }
      $("#estimated-precip-map").fadeIn(500)
      $(".estimated-precip .legend").fadeIn(500)
      setTimeout(() => {
        fadeSlideOut($(".estimated-precip"), 0, true, 500)
        $(".estimated-precip .legend").fadeOut(500)
        $("#estimated-precip-map").fadeOut(500)
        setTimeout(() => {
          //$("#slides-background").fadeOIn(0)
        }, 500);
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    precipForecast() {
      $('.titletext').text("Precip Forecast")
      $('.headertext').text("")
      fadeSlideIn($(".precip-forecast"), 0)
      $("#slides-background").fadeOut(0)
      if (weatherData.precipForecastMapUnavailable) {
        //set data map bg to blank basemap
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      }
      $("#precip-forecast-map").fadeIn(500)
      $(".precip-forecast .legend").fadeIn(500)
      setTimeout(() => {
        fadeSlideOut($(".precip-forecast"), 0, true, 500)
        $(".precip-forecast .legend").fadeOut(500)
        $("#precip-forecast-map").fadeOut(500)
        setTimeout(() => {
          //$("#slides-background").fadeIn(0)
        }, 500);
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    droughtMonitor() {
      $('.titletext').text("Drought Monitor")
      $('.headertext').text("")
      fadeSlideIn($(".drought-monitor"), 0)
      $("#slides-background").fadeOut(0)
      if (weatherData.droughtMonitorMapUnavailable) {
        //set data map bg to blank basemap
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      }
      $("#drought-monitor-map").fadeIn(500)
      $(".drought-monitor .legend").fadeIn(500)
      setTimeout(() => {
        fadeSlideOut($(".drought-monitor"), 0, true, 500)
        $(".drought-monitor .legend").fadeOut(500)
        $("#drought-monitor-map").fadeOut(500)
        setTimeout(() => {
          if (!weatherData.frostFreezeWarning) {
            $("#slides-background").fadeIn(0)
          }
        }, 500);
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    frostFreeze() {
      $('.titletext').text("Frost/Freeze Warnings")
      $('.headertext').text("")
      fadeSlideIn($(".frost-freeze"), 0)
      $("#slides-background").fadeOut(0)
      if (weatherData.frostFreezeMapUnavailable) {
        //set data map bg to blank basemap
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      }
      $("#frost-freeze-map").fadeIn(500)
      $(".frost-freeze .legend").fadeIn(500)
      setTimeout(() => {
        fadeSlideOut($(".frost-freeze"), 0, true, 500)
        $(".frost-freeze .legend").fadeOut(500)
        $("#frost-freeze-map").fadeOut(500)
        setTimeout(() => {
          $("#slides-background").fadeIn(0)
        }, 500);
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    gardenPromo() {
      $('.titletext').text("")
      $('.headertext').text("")
      $('.titlearrow').fadeOut(0)
      fadeSlideIn($(".garden-promo"), 500)

      setTimeout(() => {
        fadeSlideOut($(".garden-promo"), 500, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    //ski
    skiIntro() {
      switchProvider()
      fadeSlideIn($(".ski-intro"), 0)
      $(".ski-intro .circlegroup").fadeIn(500)
      $(".ski-intro .scrollingtext").fadeIn(500)
      setTimeout(() => {
        $(".ski-intro .intro-title").fadeIn(500)
      }, 1000);
      setTimeout(() => {
        $(".ski-intro .circlegroup").fadeOut(500)
        $(".ski-intro .scrollingtext").fadeOut(500)
        $(".ski-intro .intro-title").fadeOut(500)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      setTimeout(() => {
        fadeSlideOut($(".ski-intro"), 0, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);
    },
    skiReport() {
      var bump = round*3
      $('.titletext').text("Ski Report")
      $('.headertext').text(weatherData.skiReport.resorts[0+bump].timeStamp)
      var divs = [".one", ".two", ".three"]
      for (var i = 0; i < Math.ceil(systemSettings.ski.resorts.length/3); i++) {
        $(".ski-report .resortname" + divs[i]).text(weatherData.skiReport.resorts[i+bump].resortName)
        $(".ski-report .status" + divs[i]).text(weatherData.skiReport.resorts[i+bump].openPercent)
        $(".ski-report .newsnow" + divs[i]).text(weatherData.skiReport.resorts[i+bump].newSnow)
        $(".ski-report .basesnow" + divs[i]).text(weatherData.skiReport.resorts[i+bump].baseSnowMin + weatherData.skiReport.resorts[i+bump].baseSnowMax)
        $(".ski-report .type" + divs[i]).text(weatherData.skiReport.resorts[i+bump].surface)
      }

      fadeSlideIn($(".ski-report"), 500)

      setTimeout(() => {
          if (round < 2) {
            fadeSlideOut($(".ski-report"), 500, false)
            setTimeout(() => {
              round++
              currentProgram()
            }, 500);
          } else {
            fadeSlideOut($(".ski-report"), 500, true)
          }
        }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/Math.ceil(weatherData.skiReport.resorts.length/3))-500);
    },
    snowfallForecast() {
      $('.titletext').text("Snowfall Forecast")
      $('.headertext').text("")
      fadeSlideIn($(".snowfall-forecast"), 0)
      $("#slides-background").fadeOut(0)
      if (weatherData.snowfallForecastMapUnavailable) {
        //set data map bg to blank basemap
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      }
      $("#snowfall-forecast-map").fadeIn(500)
      $(".snowfall-forecast .legend").fadeIn(500)
      setTimeout(() => {
        fadeSlideOut($(".snowfall-forecast"), 0, true, 500)
        $(".snowfall-forecast .legend").fadeOut(500)
        $("#snowfall-forecast-map").fadeOut(500)
        setTimeout(() => {
          $("#slides-background").fadeIn(0)
        }, 500);
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    skiTip() {
      $('.titletext').text("Weather Safety Tips")
      $('.headertext').text("")
      fadeSlideIn($(".ski-tip"), 500)

      $(".ski-tip .skitip").text("In addition to using sunscreen, cover up:\n- Wear a wide brimmed hat (3\" or greater)\nthat covers ears and neck.\n- Choose tightly knit fabrics, with smaller and\nfewer spaces between threads.\n- Choose dark colored fabrics; they absorb\nmore UV rays that light colors.")
      setTimeout(() => {
        fadeSlideOut($(".ski-tip"), 500, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    //boat beach
    beachIntro() {
      switchProvider()
      fadeSlideIn($(".beach-intro"), 0)
      $(".beach-intro .circlegroup").fadeIn(500)
      $(".beach-intro .scrollingtext").fadeIn(500)
      setTimeout(() => {
        $(".beach-intro .intro-title").fadeIn(500)
      }, 1000);
      setTimeout(() => {
        $(".beach-intro .circlegroup").fadeOut(500)
        $(".beach-intro .scrollingtext").fadeOut(500)
        $(".beach-intro .intro-title").fadeOut(500)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      setTimeout(() => {
        fadeSlideOut($(".beach-intro"), 0, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration);
    },
    surfReport() {
      $('.titletext').text("Current Surf Report")
      $('.headertext').text("")
      if (weatherData.surfReport.noReport == false) {
        fadeSlideIn($(".surf-report"), 500)
        $(".surf-report .locationname").text(weatherData.surfReport.locationName)
        $(".surf-report .wind").text(weatherData.surfReport.wind)
        $(".surf-report .waveperiod").text(weatherData.surfReport.wavePeriod)
        if (weatherData.surfReport.waterTemperature != "FAIL") {
          var marginArr
          var marginTime
          if (weatherData.surfReport.waterTemperature <= 26) {
            marginArr = (26-26)*9.64
            marginTime = 0
          } else if (weatherData.surfReport.waterTemperature > 95) {
            marginArr = (95-26)*9.64
            marginTime = 2000
          } else {
            marginArr = (weatherData.surfReport.waterTemperature-26)*9.64
            marginTime = (weatherData.surfReport.waterTemperature-25)*28.6
          }
          $(".surf-report .temp").text(weatherData.surfReport.waterTemperature)
          $(".surf-report .arrow").fadeIn(0)
          $(".surf-report .tempbar").fadeIn(0)
          $(".surf-report .tempnumbers").fadeIn(0)
          setTimeout(() => {
            $(".surf-report .arrow").animate({"margin-left":marginArr + "px"}, {duration: marginTime, easing: "linear"})
            setTimeout(() => {
              $(".surf-report .temp").text(weatherData.surfReport.waterTemperature)
              $(".surf-report .temp").css({"margin-left":marginArr + "px"})
              $(".surf-report .temp").fadeIn(250)
            }, marginTime);
          }, 500);
        } else {
          $(".surf-report .temp").fadeOut(0)
          $(".surf-report .arrow").fadeOut(0)
          $(".surf-report .tempbar").fadeOut(0)
          $(".surf-report .tempnumbers").fadeOut(0)
        }
        if (weatherData.surfReport.waveHeight != "NONE") {
          $(".surf-report .wavebar").fadeIn(0)
          if (weatherData.surfReport.waveHeight == 0) {
            $(".surf-report .wavebar").css({"height":"77px"})
            $(".surf-report .wavenum").fadeIn(0)
            $(".surf-report .wavenum").text("")
            $(".surf-report .feet").fadeIn(0)
            $(".surf-report .feet").text("Flat")
            $(".surf-report .feet").css({"font-size":"65px", "height":"79px"})
          } else {
            var bumper = (weatherData.surfReport.waveHeight-1)*8
            $(".surf-report .wavenum").fadeOut(0)
            $(".surf-report .feet").fadeOut(0)
            $(".surf-report .wavenum").text(weatherData.surfReport.waveHeight)
            if (weatherData.surfReport.waveHeight == 1) {$(".surf-report .feet").text("foot")} else {$(".surf-report .feet").text("feet")}
            $(".surf-report .wavenum").css({"margin-bottom":bumper + "px"})
            $(".surf-report .feet").css({"margin-bottom":bumper + "px","font-size":"40px", "height":"59px"})
            setTimeout(() => {
              $(".surf-report .wavebar").animate({"height":(120 + bumper) + "px"}, {duration: 1000, easing: "linear"})
              setTimeout(() => {
                $(".surf-report .wavenum").fadeIn(250)
                $(".surf-report .feet").fadeIn(250)
              }, 1000);
            }, 500);
          }
        } else {
          $(".surf-report .wavebar").fadeOut(0)
          $(".surf-report .feet").fadeOut(0)
          $(".surf-report .wavenum").fadeOut(0)
        }

        setTimeout(() => {
          fadeSlideOut($(".surf-report"), 500, true)
          setTimeout(() => {
            $(".surf-report .wavebar").css({"height":"0px"})
            $(".surf-report .arrow").css({"margin-left":"0px"})
            $(".surf-report .temp").css({"margin-left":"0px"})
            $(".surf-report .temp").fadeOut(0)
            $(".surf-report .wavebar").fadeOut(0)
            $(".surf-report .feet").fadeOut(0)
            $(".surf-report .wavenum").fadeOut(0)
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        $(".noreport").fadeIn(500)
        setTimeout(() => {
          $(".noreport").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    waterTemps() {
      $('.titletext').text("Current Water Temps")
      $('.headertext').text("")
      fadeSlideIn($(".water-temps"), 0)
      $("#slides-background").fadeOut(0)
      if (weatherData.waterTempsMapUnavailable) {
        //set data map bg to blank basemap
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      }
      $("#water-temps-map").fadeIn(500)
      $(".water-temps .legend").fadeIn(500)
      setTimeout(() => {
        fadeSlideOut($(".water-temps"), 0, true, 500)
        $(".water-temps .legend").fadeOut(500)
        $("#water-temps-map").fadeOut(500)
        setTimeout(() => {
          $("#slides-background").fadeIn(0)
        }, 500);
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
    },
    coastalForecast() {
      $('.titletext').text("Coastal Waters Forecast")
      $('.headertext').text(weatherData.coastalForecast.locationName)
      if (weatherData.coastalForecast.noReport == false) {
        if (round == 0) {
        fadeSlideIn($(".coastal-forecast"), 500)
      }
      var alertText = ""
      if (round == 0) {
        if (weatherData.coastalForecast.warnings.length > 0) {
          //alertText = "<calert>"
          for (var i = 0; i < weatherData.coastalForecast.warnings.length; i++) {
            alertText = alertText + weatherData.coastalForecast.warnings[i].replaceAll("...", "<br>")
          }
          alertText = alertText + "<br>"
        }
      } else {
        alertText = ""
      }
      $(".coastal-forecast .advisory").html(alertText)
      $(".coastal-forecast .forecast").html(weatherData.coastalForecast.times[round].forecast.replaceAll(" NIGHT", " night"))
      var rdSubtractor = round < 2 ? 0 : 500
      setTimeout(() => {
        if (round < 2) {
          round++
          currentProgram()
        } else {
          fadeSlideOut($(".coastal-forecast"), 500, true)
        }
      }, (slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration/weatherData.coastalForecast.times.length)-rdSubtractor);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    tides() {
      $('.titletext').text("Tides")
      $('.headertext').text("")
      var divs = [".one", ".two"]
      var unAvailable = ((weatherData.tides.stations[0].noReport == true && weatherData.tides.stations[1].noReport == true) ? true : false)
      if (unAvailable == false) {
        fadeSlideIn($(".tides"), 500)

        for (var i = 0; i < weatherData.tides.stations.length; i++) {
          $(".tides .locationname" + divs[i]).text(weatherData.tides.stations[i].stationName)
          $(".tides .hightide" + divs[i]).html(weatherData.tides.stations[i].high[0] + "<br>" + weatherData.tides.stations[i].high[1])
          $(".tides .lowtide" + divs[i]).html(weatherData.tides.stations[i].low[0] + "<br>" + weatherData.tides.stations[i].low[1])
        }
        $(".tides .alamanaclocation").text(weatherData.tides.almanacName)
        $(".tides .sunrise").text(weatherData.tides.sunrise)
        $(".tides .sunset").text(weatherData.tides.sunset)
        
        setTimeout(() => {
          fadeSlideOut($(".tides"), 500, true)
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        $(".tempunavailable").fadeIn(500)
        setTimeout(() => {
          $(".tempunavailable").fadeOut(500)
          setTimeout(() => {
            round = 0
            slideCallBack()
          }, 500);
        }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500); 
      }
    },
    severeMessage() {
      var dataTunnel
      if (locationChoice == "extra") {
        dataTunnel = weatherData.alerts.extraLoc[locationid]
      } else {
        dataTunnel = weatherData.alerts.mainLoc
      }
      if (dataTunnel.warnings.length == 0) {
        $('.titletext').text("Severe Weather Message")
      $('.headertext').text("")
      $(".severe-message .text").html("Weatherscan / " + systemSettings.appearanceSettings.providerName + " brings you<br>this special programming because of<br>severe weather in your area.")
      fadeSlideIn($(".severe-message"), 500)

      setTimeout(() => {
        fadeSlideOut($(".severe-message"), 500, true)
      }, slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration-500);
      } else {
        fadeSlideOut($(".severe-message"), 0, true)
      }
    },
    nullFunction(){
      switchProvider();
      slideCallBack();
    }
  };
function slideKickOff() {
  loadLbarLoc("init")
  Nlocationid = ((systemSettings.extraCity.cities.length > 1) ? 1 : 0)
  groupBackgrounds = {
    "forecast": systemSettings.mainCity.slidesBG,
    "minicoreone":systemSettings.mainCity.slidesBG,
    "minicoretwo":systemSettings.mainCity.slidesBG,
    "extralocal":"core_bg",
    "traffic":"traffic_bg",
    "travel":"travel_bg",
    "airport":"airport_bg",
    "international":"international_bg",
    "golf":"golf_bg",
    "health":"health_bg",
    "garden":"garden_bg",
    "ski":"ski_bg",
    "beach":"boatbeach_bg",
    "spanish":"core_bg",
    "severeA":"severe_core_bg",
    "severeB":"severe_core_bg",
    "severe2":"severe_core_bg"
  }
  createTopArea()
  switchProvider("provider")
  manageDurations()
  setInterval(() => {
    checkWarningCrawl()
  }, 60000);
   //console.log(slideSettings.order[orderidx].slideLineup)
   //console.log(orderidx)
  segmentSet()
  showSlides();
  buildHeader();
  ccTickerLoop(0);
} //end of slideKickOff() function
function showSlides() {
  if (slideSettings.order[orderidx].slideLineup[gidx].group == "extralocal") {
      locationChoice = "extra"
    } else if (slideSettings.order[orderidx].slideLineup[gidx].group == "spanish") {
      locationChoice = "spanish"
    } else {
      locationChoice = "main"
    }
  if (idx >= slideSettings.order[orderidx].slideLineup[gidx].slides.length) {
    //console.log(slideSettings.order[orderidx].slideLineup.length)
    idx = 0;
    gidx++;
    setBackground() //earth day check
    setWInterLegend()
    //re order forecast bar
    
    try {
      if(systemSettings.LBar.locations.type == "extralocal" && slideSettings.order[orderidx].slideLineup[gidx].group == "extralocal"){
        lbarLocId = locationid + 1;
      }else{
        if(systemSettings.LBar.locations.type != "rotate"){
          lbarLocId = 0;
          //this snippet of code is for the main city to be the last object of all LBar locations, 
          //incase someone wants to go wild and make an FiOS config (those rotated extra city lbar locs in a goofy way)
          if(systemSettings.LBar.locations.cities.length > systemSettings.extraCity.cities.length + 1 
            && slideSettings.order[orderidx].slideLineup[gidx].group != "forecast"
            && slideSettings.order[orderidx].slideLineup[gidx].group != "minicoreone"
            && slideSettings.order[orderidx].slideLineup[gidx].group != "minicoretwo"
            && slideSettings.order[orderidx].slideLineup[gidx].group != "spanish"
          ){
            lbarLocId = systemSettings.LBar.locations.cities.length - 1;
          }
        }
      }
    } catch (error) {
      lbarLocId = 0;
    }
    loadLbarLoc("update");

    $('.titlearrow').fadeIn(0)
    if (gidx >= slideSettings.order[orderidx].slideLineup.length) {
      gidx = 0;
      allData();
      loadLbarLoc();
    }
    //check fro severe mode
    //if (slideSettings.order[orderidx].slideLineup[gidx].group != "intro") {
    //}
    if (orderidx == 0) {
      headerRefresh();
    }
    console.log("severemode", weatherData.severemode)
    segmentSet()
  }
  //console.log(slideSettings.order[orderidx].slideLineup[gidx].slides[idx].duration)
  currentProgram = slidePrograms[slideSettings.order[orderidx].slideLineup[gidx].slides[idx].function];
  //currentDiv = slideDivs[slideSettings.order[0].slideLineup[gidx].slides[idx].function];
  currentProgram();
} //END OF showSlides() FUNCTION
function manageDurations() {
  switch (slideSettings.order[orderidx].slideLineup[gidx].group) {
    case "intro":
      slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 10000, function: "cityIntro" },
        ]
        break;
    case "severeA":
      if (weatherData.alerts.mainLoc.pages == 0) {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 6000, function: "severeMessage" },
          { duration: 10000, function: "currentConditions" },
          { duration: 14000, function: "nearbyCities" },
          { duration: 12000, function: "radarSatellite" },
          { duration: 24000, function: "dopplerRadar" },
          { duration: 42000, function: "localForecast" },
          { duration: 12000, function: "extendedForecast" },
        ]
      } else {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 6000 * weatherData.alerts.mainLoc.pages, function: "bulletin" },
          { duration: 10000, function: "currentConditions" },
          { duration: 14000, function: "nearbyCities" },
          { duration: 12000, function: "radarSatellite" },
          { duration: 24000, function: "dopplerRadar" },
          { duration: 42000, function: "localForecast" },
          { duration: 12000, function: "extendedForecast" },
        ]
      }
      break;
    case "severeB":
      if (weatherData.alerts.mainLoc.pages == 0) {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 5000, function: "severeMessage" },
          { duration: 8000, function: "currentConditions" },
          { duration: 24000, function: "dopplerRadar" },
          { duration: 11000, function: "dayPart" },
          { duration: 12000, function: "extendedForecast" },
        ]
      } else {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 5000 * weatherData.alerts.mainLoc.pages, function: "bulletin" },
          { duration: 8000, function: "currentConditions" },
          { duration: 24000, function: "dopplerRadar" },
          { duration: 11000, function: "dayPart" },
          { duration: 12000, function: "extendedForecast" },
        ]
      }
      break;
    case "severe2":
      if (weatherData.alerts.mainLoc.pages == 0) {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 8000, function: "severeMessage" },
          { duration: 52000, function: "dopplerRadar" },
        ]
      } else {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 8000 * weatherData.alerts.mainLoc.pages, function: "bulletin" },
          { duration: 52000, function: "dopplerRadar" },
        ]
      }
      break;
    case "forecast":
      if (weatherData.alerts.mainLoc.pages == 0 || weatherData.alerts.mainLoc.pages == undefined) {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 10000, function: "cityIntro" },
          { duration: 12000, function: "currentConditions" },
          { duration: 16000, function: "nearbyCities" },
          { duration: 16000, function: "dopplerRadar" },
          { duration: 42000, function: "localForecast" },
          { duration: 14000, function: "extendedForecast" },
          { duration: 10000, function: "almanac" },
        ]
      } else if (weatherData.alerts.mainLoc.pages == 1) {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 10000, function: "cityIntro" },
          { duration: 8000, function: "bulletin" },
          { duration: 12000, function: "currentConditions" },
          { duration: 16000, function: "nearbyCities" },
          { duration: 16000, function: "dopplerRadar" },
          { duration: 42000, function: "localForecast" },
          { duration: 16000, function: "extendedForecast" },
        ]
      } else {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 10000, function: "cityIntro" },
          { duration: 14000, function: "bulletin" },
          { duration: 10000, function: "currentConditions" },
          { duration: 14000, function: "nearbyCities" },
          { duration: 16000, function: "dopplerRadar" },
          { duration: 42000, function: "localForecast" },
          { duration: 14000, function: "extendedForecast" },
        ]
      }
      break;
    case "minicoreone":
      if (weatherData.alerts.mainLoc.pages == 0 || weatherData.alerts.mainLoc.pages == undefined) {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          {function: "nullFunction"},
          { duration: 14000, function: "currentConditions" },
          { duration: 16000, function: "radarChooser" },
          { duration: 14000, function: "dayPart" },
          { duration: 16000, function: "extendedForecast" },
        ]
      } else if (weatherData.alerts.mainLoc.pages == 1) {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          {function: "nullFunction"},
          { duration: 8000, function: "bulletin" },
          { duration: 10000, function: "currentConditions" },
          { duration: 16000, function: "radarChooser" },
          { duration: 12000, function: "dayPart" },
          { duration: 14000, function: "extendedForecast" },
        ]
      } else {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          {function: "nullFunction"},
          { duration: 14000, function: "bulletin" },
          { duration: 10000, function: "currentConditions" },
          { duration: 16000, function: "radarChooser" },
          { duration: 10000, function: "dayPart" },
          { duration: 10000, function: "extendedForecast" },
        ]
      }
      break;
    case "minicoretwo":
      if (weatherData.alerts.mainLoc.pages == 0 || weatherData.alerts.mainLoc.pages == undefined) {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 12000, function: "currentConditions" },
          { duration: 12000, function: "dopplerRadar" },
          { duration: 36000, function: "localForecast" },
        ]
      } else if (weatherData.alerts.mainLoc.pages == 1) {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 5000, function: "bulletin" },
          { duration: 7000, function: "currentConditions" },
          { duration: 12000, function: "dopplerRadar" },
          { duration: 36000, function: "localForecast" },
        ]
      } else {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 14000, function: "bulletin" },
          { duration: 10000, function: "currentConditions" },
          { duration: 12000, function: "dopplerRadar" },
          { duration: 24000, function: "localForecast" },
        ]
      }
      break;
    case "extralocal":
      slideSettings.order[orderidx].slideLineup[gidx].slides = []
      slideSettings.order[orderidx].slideLineup[gidx].slides.push({function: "nullFunction"});
      //purpose of the nullFunction is to act as an upNext because I think the locationChoice lags behind by just one slide,
      //making the CC slide of the 1st extra location be the main city, but dayPart is the extra city
      //makes no sense but it worked for me so... -jenson
      for (var eLoc = 0; eLoc < systemSettings.extraCity.cities.length; eLoc++) {
        var eSlides = []
        if (weatherData.alerts.extraLoc[eLoc].pages == 0 || weatherData.alerts.extraLoc[eLoc].pages == undefined) {
          eSlides = extraSlides.noBulletin[Math.floor(Math.random() * extraSlides.noBulletin.length)]
        } else if (weatherData.alerts.extraLoc[eLoc].pages == 1) {
          eSlides = extraSlides.oneBulletin[Math.floor(Math.random() * extraSlides.noBulletin.length)]
        } else {
          eSlides = extraSlides.twoBulletins[Math.floor(Math.random() * extraSlides.noBulletin.length)]
        }
        slideSettings.order[orderidx].slideLineup[gidx].slides.push(...eSlides)
      }
      //it just did the same for going from extralocal->minicore so now its also at the bottom
      slideSettings.order[orderidx].slideLineup[gidx].slides.push({function: "nullFunction"});
      break;
    case "spanish":
      slideSettings.order[orderidx].slideLineup[gidx].slides = [
        { function: "nullFunction" },
        { duration: 14000, function: "currentConditions" },
        { duration: 16000, function: "dopplerRadar" },
        { duration: 14000, function: "dayPart" },
        { duration: 16000, function: "extendedForecast" },
         { function: "nullFunction" },
      ]
      break;
    case "radar":
      slideSettings.order[orderidx].slideLineup[gidx].slides = [
        { duration: 60000, function: "dopplerRadar" }
      ]
      break;
    case "health":
      slideSettings.order[orderidx].slideLineup[gidx].slides = [
        { duration: 4000, function: "healthIntro" },
        { duration: 10000, function: "outdoorActivity" },
      ]
      if (weatherData.pollen.noReport) {
        if (weatherData.airQuality.noReport) {
          slideSettings.order[orderidx].slideLineup[gidx].slides.push(
            { duration: 12000, function: "healthForecast" },
            { duration: 12000, function: "uvIndex" },
            { duration: 10000, function: "healthTip" },
            { duration: 8000, function: "healthTip" },
            { duration: 4000, function: "healthPromo" },
          )
        } else {
          slideSettings.order[orderidx].slideLineup[gidx].slides.push(
            { duration: 8000, function: "healthForecast" },
            { duration: 8000, function: "airQuality" },
            { duration: 8000, function: "uvIndex" },
            { duration: 10000, function: "healthTip" },
            { duration: 8000, function: "healthTip" },
            { duration: 4000, function: "healthPromo" },
          )
        }
      } else {
        if (weatherData.airQuality.noReport) {
          slideSettings.order[orderidx].slideLineup[gidx].slides.push(
            { duration: 8000, function: "allergyReport" },
            { duration: 8000, function: "healthForecast" },
            { duration: 8000, function: "uvIndex" },
            { duration: 10000, function: "healthTip" },
            { duration: 8000, function: "healthTip" },
            { duration: 4000, function: "healthPromo" },
          )
        } else {
          slideSettings.order[orderidx].slideLineup[gidx].slides.push(
            { duration: 8000, function: "allergyReport" },
            { duration: 8000, function: "healthForecast" },
            { duration: 8000, function: "airQuality" },
            { duration: 8000, function: "uvIndex" },
            { duration: 10000, function: "healthTip" },
            { duration: 4000, function: "healthPromo" },
          )
        }
      }
      break;
    case "airport":
      //read national airports for more info
      if(systemSettings.airport.main.length <= 2){
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 4000, function: "airportIntro" },
          { duration: 20000, function: "airportConditions" },
          { duration: 36000, function: "nationalAirports" },
        ]
      }else if(systemSettings.airport.main.length == 3){
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 4000, function: "airportIntro" },
          { duration: 29000, function: "airportConditions" },
          { duration: 27000, function: "nationalAirports" },
        ]
      }else if(systemSettings.airport.main.length >= 4){
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 4000, function: "airportIntro" },
          { duration: 38000, function: "airportConditions" },
          { duration: 18000, function: "nationalAirports" },
        ]
      }
      break;
    case "travel":
      slideSettings.order[orderidx].slideLineup[gidx].slides = [
        { duration: 4000, function: "travelIntro" },
        { duration: 9000, function: "travelWeather" },
        { duration: 18000, function: "travelForecast" },
        { duration: 29000, function: "destinationForecast" },
      ]
      break;
    case "international":
      if(systemSettings.international.maxMaps <= 2){
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 4000, function: "internationalIntro" },
          { duration: 18000, function: "internationalMap" },
          { duration: 38000, function: "internationalForecast" },
        ]
      }else if(systemSettings.international.maxMaps == 3){
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 4000, function: "internationalIntro" },
          { duration: 27000, function: "internationalMap" },
          { duration: 29000, function: "internationalForecast" },
        ]
      }else if(systemSettings.international.maxMaps >= 4){
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 4000, function: "internationalIntro" },
          { duration: 36000, function: "internationalMap" },
          { duration: 20000, function: "internationalForecast" },
        ]
      }
      break;
    case "golf":
      slideSettings.order[orderidx].slideLineup[gidx].slides = [
        { duration: 4000, function: "golfIntro" },
        { duration: 12000, function: "teeTime" },
        { duration: 12000, function: "golfIndex" },
        { duration: 24000, function: "courseForecast" },
        { duration: 8000, function: "golfPromo" },
      ]
      break;
    case "garden":
      slideSettings.order[orderidx].slideLineup[gidx].slides = [
        { duration: 4000, function: "gardenIntro" },
        { duration: 12000, function: "gardenForecast" },
        { duration: 12000, function: "estimatedPrecip" },
        { duration: 8000, function: "precipForecast" },
        { duration: 12000, function: "droughtMonitor" },
      ]
      if (weatherData.frostFreezeWarning) {
        slideSettings.order[orderidx].slideLineup[gidx].slides.push({ duration: 12000, function: "frostFreeze" })
      } else {
        slideSettings.order[orderidx].slideLineup[gidx].slides.push({ duration: 12000, function: "gardenPromo" })
      }
      break;
    case "ski":
      slideSettings.order[orderidx].slideLineup[gidx].slides = [
        { duration: 4000, function: "skiIntro" },
        { duration: 36000, function: "skiReport" },
        { duration: 10000, function: "snowfallForecast" },
        { duration: 10000, function: "skiTip" },
      ]
      break;
    case "beach":
      slideSettings.order[orderidx].slideLineup[gidx].slides = [
        { duration: 4000, function: "beachIntro" },
        { duration: 8000, function: "surfReport" },
        { duration: 9000, function: "waterTemps" },
        { duration: 30000, function: "coastalForecast" },
        { duration: 9000, function: "tides" },
      ]
      break;
    case "traffic":
      var trafPages = Math.ceil(weatherData.trafficReport.incidents.length/2)
      if (trafPages == 3){
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 4000, function: "trafficIntro" },
          { duration: [9000], function: "trafficOverview" },
          { duration: [10000,9000,9000], function: "trafficReport" },
          { duration: [10000,9000], function: "trafficFlow" },
        ]
      } else if (trafPages == 2) {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 4000, function: "trafficIntro" },
          { duration: [10000,9000], function: "trafficOverview" },
          { duration: [10000,9000], function: "trafficReport" },
          { duration: [9000,9000], function: "trafficFlow" },
        ]
      } else if (trafPages == 1) {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 4000, function: "trafficIntro" },
          { duration: [10000,9000], function: "trafficOverview" },
          { duration: [12000], function: "trafficReport" },
          { duration: [14000,11000], function: "trafficFlow" },
        ]
      } else {
        slideSettings.order[orderidx].slideLineup[gidx].slides = [
          { duration: 4000, function: "trafficIntro" },
          { duration: [13000,10000], function: "trafficOverview" },
          { duration: [23000,10000], function: "trafficFlow" },
        ]
      }
      break;
    default:
      break;
  }

  console.log("current package: ",slideSettings.order[orderidx].slideLineup[gidx])
}
function buildHeader(){
  //im guessing orderidx equaling 1 means severe weather mode
  //to be honest i think this should be redone and we could re-purpose the upNextTickTtls array
  if(orderidx == 1){
    //severe weather update takes title, header is emptied?
    return;
  }
  $("#slides-scroller .package-list").empty()
  let packageTotal = 0;
  var n = 1;
  for(let i = gidx; i < slideSettings.order[0].slideLineup.length; i++, n++){
    if (n >= slideSettings.order[orderidx].slideLineup.length) {n = 0}
    let packageName = "";
    try {
      if((slideSettings.order[orderidx].slideLineup[i].group == "forecast" || slideSettings.order[orderidx].slideLineup[i].group == "minicoreone" || slideSettings.order[orderidx].slideLineup[i].group == "minicoretwo") && (slideSettings.order[orderidx].slideLineup[n].group == "forecast" || slideSettings.order[orderidx].slideLineup[n].group == "minicoreone" || slideSettings.order[orderidx].slideLineup[n].group == "minicoretwo")){
        continue;
      }else if(slideSettings.order[orderidx].slideLineup[i].group == slideSettings.order[orderidx].slideLineup[n].group){continue;}
    } catch (error) {
      console.error(error)
      //absolutely nothing
    }
    if(i == slideSettings.order[0].slideLineup.length - 1){
      if((slideSettings.order[orderidx].slideLineup[i].group == "forecast" || slideSettings.order[orderidx].slideLineup[i].group == "minicoreone" || slideSettings.order[orderidx].slideLineup[i].group == "minicoretwo") && (slideSettings.order[orderidx].slideLineup[0].group == "forecast" || slideSettings.order[orderidx].slideLineup[0].group == "minicoreone" || slideSettings.order[orderidx].slideLineup[0].group == "minicoretwo")){
        $('#slides-scroller .package-list .divider-arrow').last().remove();
        break;
      }
    }
    
    switch(slideSettings.order[0].slideLineup[i].group){
      case "forecast":
        packageName = systemSettings.mainCity.scrollerName == undefined ? systemSettings.mainCity.locationName.toUpperCase() : systemSettings.mainCity.scrollerName.toUpperCase();
        break;
      case "minicoreone":
        packageName = systemSettings.mainCity.scrollerName == undefined ? systemSettings.mainCity.locationName.toUpperCase() : systemSettings.mainCity.scrollerName.toUpperCase();
        break;
      case "minicoretwo":
        packageName = systemSettings.mainCity.scrollerName == undefined ? systemSettings.mainCity.locationName.toUpperCase() : systemSettings.mainCity.scrollerName.toUpperCase();
        break;
      case "extralocal":
        packageName = "EXTRALOCAL";
        break;
      case "intro":
        packageName = "WELCOME";
        break;
      case "health":
        packageName = "HEALTH";
        break;
      case "travel":
        packageName = "TRAVEL";
        break;
      case "airport":
        packageName = "AIRPORT";
        break;
      case "garden":
        packageName = "GARDEN";
        break;
      case "ski":
        packageName = "SKI";
        break;
      case "beach":
        packageName = "BOAT & BEACH";
        break;
      case "international":
        packageName = "INTERNATIONAL";
        break;
      case "traffic":
        packageName = "TRAFFIC";
        break;
      case "radar":
        packageName = "LOCAL RADAR";
        break;
      case "golf":
        packageName = "GOLF";
        break;
      case "spanish":
        packageName = "ESPANOL";
        break;
      default:
        packageName = "UNDEFINED";
        break;
    }
    if(packageName != "EXTRALOCAL"){
      $('#slides-scroller .package-list').append(`<span class=" listElement shrinkY ${packageTotal === 0 ? "main": ""}${packageTotal === 1 ? "next": ""}">${packageName}</span>`);
    } else {
      //append all these mfs (i'll do it later)
      for(let e = 0; e < systemSettings.extraCity.cities.length; e++){
        $('#slides-scroller .package-list').append(`<span class=" listElement shrinkY ${packageTotal === 0 && e === 0 ? "main": ""}${packageTotal === 1 && e === 0 ? "next": ""}">${systemSettings.extraCity.cities[e].scrollerName != undefined ? systemSettings.extraCity.cities[e].scrollerName.toUpperCase() : systemSettings.extraCity.cities[e].locationName.toUpperCase()}</span>`);
        if (e != systemSettings.extraCity.cities.length-1) $('#slides-scroller .package-list').append(`<span class="shrinkY divider-arrow"> < </span>`);
      }
    }
    if(i < slideSettings.order[0].slideLineup.length - 1){
      $('#slides-scroller .package-list').append(`<span class="shrinkY divider-arrow"> < </span>`);
    }
    packageTotal++;
  }
}
function headerRefresh() {
  try {
    if((slideSettings.order[orderidx].slideLineup[gidx-1].group == "forecast" || slideSettings.order[orderidx].slideLineup[gidx-1].group == "minicoreone" || slideSettings.order[orderidx].slideLineup[gidx-1].group == "minicoretwo") && (slideSettings.order[orderidx].slideLineup[gidx].group == "forecast" || slideSettings.order[orderidx].slideLineup[gidx].group == "minicoreone" || slideSettings.order[orderidx].slideLineup[gidx].group == "minicoretwo")){
      return;
    }else if(slideSettings.order[orderidx].slideLineup[gidx-1].group == slideSettings.order[orderidx].slideLineup[gidx].group){return;}
  } catch (error) {console.error(error)
    if(gidx == 0 && ((slideSettings.order[orderidx].slideLineup[0].group == "forecast" || slideSettings.order[orderidx].slideLineup[0].group == "minicoreone" || slideSettings.order[orderidx].slideLineup[0].group == "minicoretwo") && (slideSettings.order[orderidx].slideLineup[slideSettings.order[orderidx].slideLineup.length-1].group == "forecast" || slideSettings.order[orderidx].slideLineup[slideSettings.order[orderidx].slideLineup.length-1].group == "minicoreone" || slideSettings.order[orderidx].slideLineup[slideSettings.order[orderidx].slideLineup.length-1].group == "minicoretwo"))){return;}
  }

  $('#slides-scroller span.main').removeClass("main");
  $('#slides-scroller span.next').addClass("main");
  $('#slides-scroller span.next').removeClass("next");
  var sliderLeft = 0;
  var prevslides = $("#slides-scroller .package-list" + ' span.main').prevAll('span')
  var firstWidth = -1*($('#slides-scroller .package-list .listElement').first().width() + 41)
  var time = ((firstWidth+37)/-135)*800
  $("#slides-scroller .package-list").children().each((index, element) =>{
    var truewidth = $(element).width();
    $(element).css('width', truewidth);
    if($(element).hasClass('divider-arrow')){
      $(element).css('width', '');
    }
  })
  
  $('#slides-scroller .package-list').animate({ 'margin-left': firstWidth + 'px' }, time, 'linear', function(){
    setTimeout(function () {
      var prevSlide = $("#slides-scroller .package-list span:first-of-type");
      var prevArrow = $("#slides-scroller .package-list span:first-of-type").next("span");
      $('#slides-scroller .package-list span:first-of-type').next("span").next("span").next("span").next("span").addClass("next");
      $("#slides-scroller .package-list").css('margin-left','0px');
      $("#slides-scroller .package-list span:first-of-type").remove();
      $("#slides-scroller .package-list span:first-of-type").remove();
      $("#slides-scroller .package-list").append(prevArrow).append(prevSlide);
    }, 50)
  })
}
