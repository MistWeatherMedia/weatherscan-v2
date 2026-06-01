var lBarData = {
  cities: [],
  radarUnavailable: false
}
var localTickerData = {
  airport: {
    airports: [],
    airportDelays: []
  },
  arrowName: "",
  cities: {
    current: {
      //noReport: true,
      cities: []
    },
    forecast: {
      //noReport: true,
      cities: []
    }
  },
  travelCities: {
    current: {
      //noReport: true,
      cities: []
    },
    forecast: {
      //noReport: true,
      cities: []
    }
  }
}
var lbarLocId = 0
var fcstlbarInterval = 15000
var cclbarInterval = 6000
var sidx = 0
var fidx = 0
var currentFB
var currentCC
var currentCCInterval
function getlBarData(lbarLoc) {
  lBarData.cities[lbarLoc] = emptyLBarData();
  async function ccLBAR() {
    var url = "https://api.weather.com/v3/wx/observations/current?" + systemSettings.LBar.locations.cities[lbarLoc].header + "&units=e&language=en-US&format=json&apiKey=" + api_key

    const data = await $.getJSON(url);

    try {
      lBarData.cities[lbarLoc].currentConditions.noReport = false
      lBarData.cities[lbarLoc].currentConditions.icon = data.iconCodeExtend
      lBarData.cities[lbarLoc].currentConditions.temperature = data.temperature
      lBarData.cities[lbarLoc].currentConditions.condition = getCCObs(data.iconCodeExtend)
      lBarData.cities[lbarLoc].currentConditions.wind = ((data.windDirectionCardinal == "CALM" || data.windSpeed == 0) ? "Calm" : data.windDirectionCardinal + " " + data.windSpeed)
      lBarData.cities[lbarLoc].currentConditions.humidity = data.relativeHumidity + "%"
      lBarData.cities[lbarLoc].currentConditions.dewPoint = data.temperatureDewPoint + "°"
      lBarData.cities[lbarLoc].currentConditions.pressure = data.pressureAltimeter.toFixed(2)
      lBarData.cities[lbarLoc].currentConditions.pressureTrend = data.pressureTendencyCode === 1 || data.pressureTendencyCode === 3 ? "↑" : data.pressureTendencyCode === 2 || data.pressureTendencyCode === 4 ? "↓" : "S"
      lBarData.cities[lbarLoc].currentConditions.visibility = (data.visibility > 2 ? data.visibility : data.visibility.toFixed(1)) + " mi"
      lBarData.cities[lbarLoc].currentConditions.ceiling = data.cloudCeiling == null ? "null" : data.cloudCeiling + " ft"
      lBarData.cities[lbarLoc].currentConditions.uvIndex = data.uvIndex = data.uvDescription
      lBarData.cities[lbarLoc].currentConditions.gusts = data.windGust == undefined ? "none" : data.windGust + " mph"
      lBarData.cities[lbarLoc].currentConditions.feelslike = data.temperatureFeelsLike == data.temperature ? "none" : (data.temperature > 65 ? "heat index " + data.temperatureFeelsLike + "°" : "wind chill " + data.temperatureFeelsLike + "°")
    } catch (error) {
      console.error(error)
      
      lBarData.cities[lbarLoc].currentConditions.noReport = true
    }
  }
  ccLBAR()
  async function fcstLBAR() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.LBar.locations.cities[lbarLoc].lat + "," + systemSettings.LBar.locations.cities[lbarLoc].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key

    const data = await $.getJSON(url);

    try {
      var today = longWeekDays[new Date().getDay()] 
      lBarData.cities[lbarLoc].forecast.noReport = false;
      lBarData.cities[lbarLoc].forecast.extendedForecast.noReport = false;
      lBarData.cities[lbarLoc].forecast.localForecast.noReport = false;
      var li = 0,  ii = 0, ji = 0;
      if (data.daypart[0].dayOrNight[0] == null) {
        ii = 1
        ji = 1
        li = 2
      }
      for(let i = 0; i < lBarData.cities[lbarLoc].forecast.extendedForecast.days.length; i++, ii++, li +=2){
        lBarData.cities[lbarLoc].forecast.extendedForecast.days[i].day = data.dayOfWeek[ii].substring(0,3).toUpperCase();
        lBarData.cities[lbarLoc].forecast.extendedForecast.days[i].icon = data.daypart[0].iconCodeExtend[li];
        lBarData.cities[lbarLoc].forecast.extendedForecast.days[i].high = data.temperatureMax[ii];
        if(data.dayOfWeek[ii] == today && new Date().getHours() >= 4){
          lBarData.cities[lbarLoc].forecast.extendedForecast.days[i].low = ""
        } else {
          lBarData.cities[lbarLoc].forecast.extendedForecast.days[i].low = data.temperatureMin[ii];
        }
      }
      for(var j = 0; j < lBarData.cities[lbarLoc].forecast.localForecast.days.length; j++, ji++){
        lBarData.cities[lbarLoc].forecast.localForecast.days[j].day = data.daypart[0].daypartName[ji].toUpperCase() == "TOMORROW" ? data.dayOfWeek[j].toUpperCase() : data.daypart[0].daypartName[ji].toUpperCase();
        lBarData.cities[lbarLoc].forecast.localForecast.days[j].desc = buildShortcast(data.daypart[0].narrative[ji], data.daypart[0].iconCodeExtend[ji], data.daypart[0].windPhrase[ji]);
      }
    } catch (error) {
      console.error(error)
      
      lBarData.cities[lbarLoc].forecast.noReport = true;
      lBarData.cities[lbarLoc].forecast.extendedForecast.noReport = true;
      lBarData.cities[lbarLoc].forecast.localForecast.noReport = true;
    }
  }
  fcstLBAR()
  async function dpartLBAR(){
    var url = "https://api.weather.com/v3/wx/forecast/hourly/2day?geocode=" + systemSettings.LBar.locations.cities[lbarLoc].lat + "," + systemSettings.LBar.locations.cities[lbarLoc].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var dpHours = [];
    var dayOfWeek = {
        0: ["SUNDAY'S FORECAST", "SUN NIGHT/MON", "MONDAY'S FORECAST"], 1: ["MONDAY'S FORECAST", "MON NIGHT/TUE", "TUESDAY'S FORECAST"], 2: ["TUESDAY'S FORECAST", "TUE NIGHT/WED", "WEDNESDAY'S FORECAST"], 3: ["WEDNESDAY'S FORECAST", "WED NIGHT/THU", "THURSDAY'S FORECAST"],
        4: ["THURSDAY'S FORECAST", "THU NIGHT/FRI", "FRIDAY'S FORECAST"], 5: ["FRIDAY'S FORECAST", "FRI NIGHT/SAT", "SATURDAY'S FORECAST"], 6: ["SATURDAY'S FORECAST", "SAT NIGHT/SUN", "SUNDAY'S FORECAST"]
    };
    var dpCurrent = dateFns.getHours(new Date())
    /***
     * Day Part Times
      9pm-2am - [6,12,15,17]
      3-8am - [12,15,17,20]
      9-11am - [15,17,20,0]
      12-1pm - [17,20,0,6]
      2-4pm - [20,0,6,12]
      5-8pm - [0,6,12,15]
      9pm-2am - [6,12,15,17]
     */
    if (dpCurrent < 3) {
        lBarData.cities[lbarLoc].forecast.dayPart.dayName = "TODAY'S FORECAST";
        dpHours = [6, 12, 15, 17];
    } else if (dpCurrent >= 3 && dpCurrent < 9) {
        lBarData.cities[lbarLoc].forecast.dayPart.dayName = "TODAY'S FORECAST";
        dpHours = [12, 15, 17, 20];
    } else if (dpCurrent >= 9 && dpCurrent < 12) {
        lBarData.cities[lbarLoc].forecast.dayPart.dayName = "TODAY'S FORECAST";
        dpHours = [15, 17, 20, 0];
    } else if (dpCurrent >= 12 && dpCurrent < 14) {
        lBarData.cities[lbarLoc].forecast.dayPart.dayName = "TONIGHT'S FORECAST";
        dpHours = [17, 20, 0, 6];
    } else if (dpCurrent >= 14 && dpCurrent < 17) {
        lBarData.cities[lbarLoc].forecast.dayPart.dayName = dayOfWeek[new Date().getDay()][1];
        dpHours = [20, 0, 6, 12];
    } else if (dpCurrent >= 17 && dpCurrent < 21) {
        lBarData.cities[lbarLoc].forecast.dayPart.dayName = dayOfWeek[new Date().getDay()][2];
        dpHours = [0, 6, 12, 15];
    } else if (dpCurrent >= 21) {
        lBarData.cities[lbarLoc].forecast.dayPart.dayName = dayOfWeek[new Date().getDay()][2];
        dpHours = [6, 12, 15, 17];
    }

    const data = await $.getJSON(url);

    try {
      lBarData.cities[lbarLoc].forecast.dayPart.noReport = false;
      var dpidx = 0;
      for(let i = 0; i < data.validTimeLocal.length; i++){
        var dpTime = dateFns.getHours(data.validTimeLocal[i]);
        if(dpTime == dpHours[dpidx]){
          lBarData.cities[lbarLoc].forecast.dayPart.hours[dpidx].time = {"0":"midnight","6":"6 am","12":"noon","15":"3 pm","17":"5 pm","20":"8 pm"}[dpTime];
          lBarData.cities[lbarLoc].forecast.dayPart.hours[dpidx].icon = data.iconCodeExtend[i];
          lBarData.cities[lbarLoc].forecast.dayPart.hours[dpidx].temp = data.temperature[i];
          dpidx++;
        }
      }
    } catch (error) {
      console.error(error)
      
      lBarData.cities[lbarLoc].forecast.dayPart.noReport = true;
    }
  }
  dpartLBAR();
}
function getTickerData(){
  async function getAirportDelays() {
    localTickerData.airport.airportDelays = []//https://nasstatus.faa.gov/api/airport-events

    const eventdata = await $.getJSON("/airports")

    try {
      for (const airportevent of eventdata) {
        var delay = {iataCode:"", departureDelay:0,closed:false}
        delay.iataCode = airportevent.airportId
        if (airportevent.groundStop != null) {
          if (delay.closed == false) {
            delay.departureDelay = ((differenceUTC(airportevent.groundStop.endTime) > delay.departureDelay) ? differenceUTC(airportevent.groundStop.endTime) : delay.departureDelay)
          }
        }
        if (airportevent.groundDelay != null) {
          if (delay.closed == false) {
            delay.departureDelay = ((airportevent.groundDelay.avgDelay > delay.departureDelay) ? airportevent.groundDelay.avgDelay : delay.departureDelay)
          }
        }
        if (airportevent.airportClosure != null) {
          delay.closed = true
          delay.departureDelay = "Closed"
        }
        if (airportevent.departureDelay != null) {
          if (delay.closed == false) {
            delay.departureDelay = ((airportevent.departureDelay.averageDelay > delay.departureDelay) ? airportevent.departureDelay.averageDelay : delay.departureDelay)
          }
        }

        if (delay.departureDelay != "Closed") {
          if (delay.departureDelay != 0) {
            delay.departureDelay = formatMinutes(delay.departureDelay).replaceAll(" hrONLYH", " hr") + " delays"
          } else {
            delay.departureDelay = "No Delay"
          }
        }
        localTickerData.airport.airportDelays.push(delay)
      }
      /*for (var i = 0; i < localTickerData.airport.airportDelays.length; i++) {
        if (localTickerData.airport.airportDelays[i].departureDelay != "Closed") {
          if (localTickerData.airport.airportDelays[i].departureDelay != 0) {
            localTickerData.airport.airportDelays[i].departureDelay = formatMinutes(localTickerData.airport.airportDelays[i].departureDelay).replaceAll(" hrONLYH", " hr") + " delays"
          } else {
            localTickerData.airport.airportDelays[i].departureDelay = "No Delay"
          }
        }
      }*/
    } catch (error) {
      console.error(error)

      localTickerData.airport.airportDelays = []
    }
  }
  getAirportDelays()
  //airports
  async function ccTickerArpt(num) {
    var airportCC = {airportName:"",cond:"",temp:"",delay:""};
    var url = "https://api.weather.com/v3/wx/observations/current?iataCode=" + systemSettings.LBar.ccTicker.airports[num].iataCode + "&units=e&language=en-US&format=json&apiKey=" + api_key

    const data = await $.getJSON(url);

    try {
      //console.log(data);
      //localTickerData.airport.noReport = false;
      airportCC.airportName =systemSettings.LBar.ccTicker.airports[num].airportName
      airportCC.cond = getTickerObs(data.iconCodeExtend) + ","
      airportCC.temp = data.temperature
      airportCC.delay = getTickerDelay(systemSettings.LBar.ccTicker.airports[num].iataCode) //get delays
      
      localTickerData.airport.airports[num] = airportCC;
    } catch (error) {
      console.error(error)
      
      airportCC.airportName = systemSettings.LBar.ccTicker.airports[num].airportName
      airportCC.cond = ""
      airportCC.temp = ""
      airportCC.delay = ""
      
      localTickerData.airport.airports[num] = airportCC;
    }
  }

  for(let i = 0; i < systemSettings.LBar.ccTicker.airports.length; i++){
    ccTickerArpt(i)
  }

  async function otherTickerObs(type){
    var tunnel;
    var htunnel;
    if(type == "cities"){
      tunnel = systemSettings.LBar.ccTicker.cities;
    }else if(type == "travel"){
      tunnel = systemSettings.LBar.ccTicker.travelCities;
    }else{
      console.error("Ticker type is undefined.");
    }
    //console.log(tunnel);
    //console.log(tunnel == systemSettings.LBar.ccTicker.cities);
    //console.log(tunnel == systemSettings.LBar.ccTicker.travelCities);
  //cc
  
  for(let j = 0; j < tunnel.length; j++){
    var locationTickerCC = {locationName:"",cond:"",temp:""};
    var url = "https://api.weather.com/v3/wx/observations/current?geocode=" + tunnel[j].header + "&units=e&language=en-US&format=json&apiKey=" + api_key
    
    const data = await $.getJSON(url)

    try {
      //console.log(data);
      if(type == "cities"){
        //localTickerData.cities.current.noReport = false;
      } else {
        //localTickerData.travelCities.current.noReport = false;
      }
      locationTickerCC = {
        locationName: tunnel[j].locationName,
        cond: getTickerObs(data.iconCodeExtend),
        temp: data.temperature,
      }
      if(type == "cities"){
        localTickerData.cities.current.cities[j] = locationTickerCC;
      } else {
        localTickerData.travelCities.current.cities[j] = locationTickerCC;
      }
      //console.log(locationTickerCC);
    } catch (error) {
      console.error(error)
      
      locationTickerCC = {
        locationName: tunnel[j].locationName,
        cond: "",
        temp: "",
      }
      if(type == "cities"){
        localTickerData.cities.current.cities[j] = locationTickerCC;
        //localTickerData.cities.current.noReport = true;
      } else {
        localTickerData.travelCities.current.cities[j] = locationTickerCC;
        //localTickerData.travelCities.current.noReport = true;
      }
    }
  }
  //fc
  var dayTime = new Date()
  for(let k = 0; k < tunnel.length; k++){
    var url = "https://api.weather.com/v3/wx/forecast/daily/3day?geocode=" + tunnel[k].header + "&format=json&units=e&language=en-US&apiKey=" + api_key

    const data = await $.getJSON(url);

    try {
      //console.log(tunnel[k].locationName, data);
      if(type == "cities"){
        //localTickerData.cities.forecast.noReport = false;
      } else {
        //localTickerData.travelCities.forecast.noReport = false;
      }
      var ii = 0, ki = 1;
      if(dayTime.getHours() >= 15){
        ii = 1;
        localTickerData.arrowName = data.dayOfWeek[ki].substring(0, 3).toUpperCase();
        ki = 2;
      }else{
        localTickerData.arrowName = "TONIGHT";
      }
      var locationTickerFC = {locationName:"",cond:"",temp:""};
      locationTickerFC = {
        locationName: tunnel[k].locationName,
        cond: getTickerFcst(data.daypart[0].iconCodeExtend[ki]),
        temp: localTickerData.arrowName == "TONIGHT" ? data.temperatureMin[ii] : data.temperatureMax[ii]
      }
      if(type == "cities"){
        localTickerData.cities.forecast.cities[k] = locationTickerFC;
      } else {
        localTickerData.travelCities.forecast.cities[k] = locationTickerFC;
      }
      //console.log(locationTickerFC);
    } catch (error) {
      console.error(error)
      
      locationTickerFC = {
        locationName: tunnel[k].locationName,
        cond: "",
        temp: ""
      }
      if(type == "cities"){
        localTickerData.cities.forecast.cities[k] = locationTickerFC;
        //localTickerData.cities.forecast.noReport = true;
      } else {
        localTickerData.travelCities.forecast.cities[k] = locationTickerFC;
        //localTickerData.travelCities.forecast.noReport = true;
      }
    }
  }
  }
  otherTickerObs("cities");
  otherTickerObs("travel");
}

function sideBarLoop(idx) {
  LBarSlideSettings = []
  
  if (orderidx == 0) {
  var sideBarFunctions = {
  condition() {$(".obs-lbar .obs-ticker").html(lBarData.cities[lbarLocId].currentConditions.condition); currentCCInterval = setTimeout(() => {sidx++; showCC()}, 6000)},
  wind() {$(".obs-lbar .obs-ticker").html("wind " + lBarData.cities[lbarLocId].currentConditions.wind); currentCCInterval = setTimeout(() => {sidx++; showCC()}, 6000)},
  gusts() {$(".obs-lbar .obs-ticker").html("gusts " + lBarData.cities[lbarLocId].currentConditions.gusts); currentCCInterval = setTimeout(() => {sidx++; showCC()}, 6000)},
  humidity() {$(".obs-lbar .obs-ticker").html("humidity " + lBarData.cities[lbarLocId].currentConditions.humidity); currentCCInterval = setTimeout(() => {sidx++; showCC()}, 6000)},
  dewpoint() {$(".obs-lbar .obs-ticker").html("dew point " + lBarData.cities[lbarLocId].currentConditions.dewPoint); currentCCInterval = setTimeout(() => {sidx++; showCC()}, 6000)},
  feelslike() {$(".obs-lbar .obs-ticker").html(lBarData.cities[lbarLocId].currentConditions.feelslike); currentCCInterval = setTimeout(() => {sidx++; showCC()}, 6000)},
  pressure() {$(".obs-lbar .obs-ticker").html("pressure " + lBarData.cities[lbarLocId].currentConditions.pressure + " " + configureLBarArrow(lBarData.cities[lbarLocId].currentConditions.pressureTrend)); currentCCInterval = setTimeout(() => {sidx++; showCC()}, 6000)},
  visibility() {$(".obs-lbar .obs-ticker").html("visibility " + lBarData.cities[lbarLocId].currentConditions.visibility); currentCCInterval = setTimeout(() => {sidx++; showCC()}, 6000)},
  ceiling() {$(".obs-lbar .obs-ticker").html("ceiling " + lBarData.cities[lbarLocId].currentConditions.ceiling); currentCCInterval = setTimeout(() => {sidx++; showCC()}, 6000)},
  uvindex() {$(".obs-lbar .obs-ticker").html("UV index " + lBarData.cities[lbarLocId].currentConditions.uvIndex); currentCCInterval = setTimeout(() => {sidx++; showCC()}, 6000)},
}
    if (lBarData.cities[lbarLocId].currentConditions.feelslike == "none") {delete sideBarFunctions["feelslike"]}
    if (lBarData.cities[lbarLocId].currentConditions.ceiling == "null" || lBarData.cities[lbarLocId].currentConditions.ceiling == null) {delete sideBarFunctions["ceiling"]}
    if (lBarData.cities[lbarLocId].currentConditions.gusts == "none") {delete sideBarFunctions["gusts"]}
  var j = 0
    var cap = Math.floor((slideSettings.order[orderidx].slideLineup[gidx].duration/1000)/6)

    // if(slideSettings.order[orderidx].slideLineup[gidx].group == "extralocal"){
    //   for(var e = 0; e < systemSettings.extraCity.cities.length; e++){
    //     for (var i = 0; i < cap; i++) {
    //       LBarSlideSettings.push(Object.keys(sideBarFunctions)[j])
    //       j++
    //       if (j >= Object.keys(sideBarFunctions).length) {j = 0}
    //     }
    //     j = 0;
    //   }
    // } else {
      for (var i = 0; i < cap; i++) {
        LBarSlideSettings.push(Object.keys(sideBarFunctions)[j])
        j++
        if (j >= Object.keys(sideBarFunctions).length) {j = 0}
      }
    // }
    
    //console.log(LBarSlideSettings);
    function showCC() {
      if (sidx < LBarSlideSettings.length) {
        if(idx != undefined){
          currentCC = sideBarFunctions[LBarSlideSettings[idx]]
          sidx = 0;
          idx = undefined;
          clearInterval(currentCCInterval);
          startMiniRadar(true);
        }else{
          currentCC = sideBarFunctions[LBarSlideSettings[sidx]]
          startMiniRadar(false);
        }
        currentCC()
      } else {
        sidx = 0
      }
    }
    showCC()
  } else {
    console.log("severe sidebar")
    $(".obs-lbar .obs-ticker").text(lBarData.cities[lbarLocId].currentConditions.condition)
    var sideBarFunctionsSevere = {
  pageOne() {
    var text = ""
    text += "wind " + lBarData.cities[lbarLocId].currentConditions.wind + "\n"
    if (lBarData.cities[lbarLocId].currentConditions.gusts != "none") {
      text += "gusts " + lBarData.cities[lbarLocId].currentConditions.gusts + "\n"
    }
    text += "humidity " + lBarData.cities[lbarLocId].currentConditions.humidity + "\n"
    text += "dew point " + lBarData.cities[lbarLocId].currentConditions.dewPoint
    $(".obs-lbar .obs-ticker-severe").html(text);
    currentCCInterval = setTimeout(() => {sidx++; showCC()}, 6000)
  },
  pageTwo() {
    var text = ""
    if (lBarData.cities[lbarLocId].currentConditions.feelslike != "none") {
      text += lBarData.cities[lbarLocId].currentConditions.feelslike + "\n"
    }
    text += "pressure " + lBarData.cities[lbarLocId].currentConditions.pressure + " " + configureLBarArrow(lBarData.cities[lbarLocId].currentConditions.pressureTrend, orderidx) + "\n"
    text += "visibility " + lBarData.cities[lbarLocId].currentConditions.visibility + "\n"
    if (lBarData.cities[lbarLocId].currentConditions.ceiling != "null" && lBarData.cities[lbarLocId].currentConditions.ceiling != null) {
      text += "ceiling " + lBarData.cities[lbarLocId].currentConditions.ceiling
    }
    $(".obs-lbar .obs-ticker-severe").html(text);
    currentCCInterval = setTimeout(() => {sidx++; showCC()}, 6000)},
}
    var j = 0
    var cap = Math.floor((slideSettings.order[orderidx].slideLineup[gidx].duration/1000)/6)
    console.log("duration", slideSettings.order[orderidx].slideLineup[gidx].duration)
    console.log("cap", cap)
    //var cap = slideSettings.order[orderidx].slideLineup[gidx].duration == 120000 ? 20 : slideSettings.order[orderidx].slideLineup[gidx].duration == 60000 ? 10 : 30
    for (var i = 0; i < cap; i++) {
      LBarSlideSettings.push(Object.keys(sideBarFunctionsSevere)[j])
      j++
      if (j >= Object.keys(sideBarFunctionsSevere).length) {j = 0}
    }
    function showCC() {
      if (sidx < LBarSlideSettings.length) {
        currentCC = sideBarFunctionsSevere[LBarSlideSettings[sidx]]
        currentCC()
      } else {
        sidx = 0
      }
      stopMiniRadar();
    }
    showCC()
  }
}
function loadLbarLoc(type) {
  if (type != "init" && type != "update") {
    if(systemSettings.LBar.locations.type == "rotate"){
      lbarLocId++
    }
  }
  if (lbarLocId >= systemSettings.LBar.locations.cities.length) {lbarLocId = 0}
  $(".lbar-location").text(systemSettings.LBar.locations.cities[lbarLocId].obsName)
  if (systemSettings.LBar.radar.legend) {
    $(".radar-lbar .minitimestamp").css({"text-align":"left"})
    $(".radar-lbar .minilegend").fadeIn(0)
  } else {
    $(".radar-lbar .minitimestamp").css({"text-align":"right"})
    $(".radar-lbar .minilegend").fadeOut(0)
  }
  aLLH()// stands for adjust lbar location height
  if (lBarData.cities[lbarLocId].currentConditions.noReport) {
    $(".obs-lbar").fadeOut(0)
    $(".lbar-noreport").fadeIn(0)
  } else {
    $(".obs-lbar .temperature").text(lBarData.cities[lbarLocId].currentConditions.temperature)
    getIcon($(".obs-lbar .icon"), lBarData.cities[lbarLocId].currentConditions.icon, "ccObs", "small")
    $(".obs-lbar .obs-ticker").text(lBarData.cities[lbarLocId].currentConditions.condition);
    $(".obs-lbar").fadeIn(0)
    $(".lbar-noreport").fadeOut(0)
    if (orderidx == 0) {
      $(".obs-lbar .obs-ticker-severe").fadeOut(0)
    } else {
      $(".obs-lbar .obs-ticker-severe").fadeIn(0)
    }
  }
  $(".text-lbar").fadeOut(0)
  $(".extended-lbar").fadeOut(0)
  //$(".daypart-lbar").fadeOut(0)
  $("#lbar .daypart-lbar .timestamp").html(`${systemSettings.LBar.locations.cities[lbarLocId].locationName.toUpperCase()}: &nbsp; <em>${lBarData.cities[lbarLocId].forecast.dayPart.dayName}</em>`);
  if (lBarData.cities[lbarLocId].forecast.noReport) {
    $(".lbar-tempunavailable").fadeIn(0)
  } else {
    $(".lbar-tempunavailable").fadeOut(0)
    //start forecast loop
  }
  // loops current package duration
}

function shrinkForecastText(){
  //temp for now since we needa just find a shortcast
      var fcastFontSize = 45;
      while($("#lbar .text-lbar .forecast").outerHeight() > 151.641){
        fcastFontSize-=.25;
        $("#lbar .text-lbar .forecast").css('font-size', `${fcastFontSize}px`);
      }
}

function forecastBarLoop(idx){
  fcstBarSlideSettings = []
  var forecastFunctions = {
    dayPart(){
		  $(".headerline").css({
    marginTop: "-2px"
  });

  $("#lbar .daypart-lbar .temp").css("bottom", "208.25px")
      $("#lbar .daypart-lbar .temp").css("bottom", "208.25px")
      $("#lbar .daypart-lbar .tempbar").css("height", "0px")
      var divs = [".one", ".two", ".three", ".four"]
      $("#lbar .daypart-lbar .timestamp").empty();
      $('#lbar .daypart-lbar').fadeIn(0);
      if(lBarData.cities[lbarLocId].forecast.dayPart.noReport != true){
        $("#lbar .lbar-tempunavailable").fadeOut(0);
        $('#lbar .daypart-lbar .section').fadeIn(0);
        $("#lbar .daypart-lbar .timestamp").append(`${systemSettings.LBar.locations.cities[lbarLocId].locationName.toUpperCase()}: &nbsp; <em>${lBarData.cities[lbarLocId].forecast.dayPart.dayName}</em>`);
        var barTemps = []
        var barHeights = []
        for (var i = 0; i < 4; i++) {
          barTemps.push(lBarData.cities[lbarLocId].forecast.dayPart.hours[i].temp)
        }
        for (var i = 0; i < 4; i++) {
          barHeights.push(calcBarHeights(lBarData.cities[lbarLocId].forecast.dayPart.hours[i].temp, Math.max(...barTemps), Math.min(...barTemps), 93, 50))
        }
        var ii = 0
        for(let i = 0; i < 4; i++){
          $(`#lbar .daypart-lbar .section.${numToWord(i+1)} .time`).text(lBarData.cities[lbarLocId].forecast.dayPart.hours[i].time)
          $(`#lbar .daypart-lbar .section.${numToWord(i+1)} .temp`).text(lBarData.cities[lbarLocId].forecast.dayPart.hours[i].temp)
          getIcon($(`#lbar .daypart-lbar .section.${numToWord(i+1)} .icon`), lBarData.cities[lbarLocId].forecast.dayPart.hours[i].icon, "forecast", "small");
        }
        $("#lbar .daypart-lbar .section").each(function() {
					$('#lbar .daypart-lbar .section' + divs[ii] + ' .tempbar').animate({height:barHeights[ii]+"px"}, {duration: 1000, easing: "linear"});
          $("#lbar .daypart-lbar .section" + divs[ii] + " .temp").css("bottom",208.25 + barHeights[ii]+"px")
					ii = ii + 1
        })
        setTimeout(() => {
          $("#lbar .daypart-lbar .temp").fadeIn(167)
        }, 1333);
      } else {
        $('#lbar .daypart-lbar .section').fadeOut(0);

        $("#lbar .lbar-tempunavailable").fadeIn(0);
      }
      setTimeout(() => {
        fidx++; showFB()
        $("#lbar .daypart-lbar .temp").fadeOut(0)
      }, fcstlbarInterval);
    },
    descOne(){
		$(".headerline").css({
  marginTop: "0px"
});
      $('#lbar .text-lbar').fadeIn(0);
      $("#lbar .text-lbar .timestamp").empty();
      if(lBarData.cities[lbarLocId].forecast.localForecast.noReport != true){
        $("#lbar .text-lbar .background").fadeIn(0);
        $("#lbar .text-lbar .background-bottom").fadeIn(0);
        $("#lbar .text-lbar .forecast").fadeIn(0);
        $("#lbar .lbar-tempunavailable").fadeOut(0);

        $("#lbar .text-lbar .timestamp").append(`${systemSettings.LBar.locations.cities[lbarLocId].locationName.toUpperCase()}: &nbsp; <em>${lBarData.cities[lbarLocId].forecast.localForecast.days[0].day}'S FORECAST</em>`);
        $("#lbar .text-lbar .forecast").text(lBarData.cities[lbarLocId].forecast.localForecast.days[0].desc);
      } else {
        $("#lbar .text-lbar .background").fadeOut(0);
        $("#lbar .text-lbar .background-bottom").fadeOut(0);
        $("#lbar .text-lbar .forecast").fadeOut(0);
        $("#lbar .lbar-tempunavailable").fadeIn(0);
      }
      shrinkForecastText();
      if($("#lbar .text-lbar .forecast").outerHeight() == 0){
        setTimeout(shrinkForecastText, 10);
      }
      setTimeout(() => {
        fidx++; showFB()
      }, fcstlbarInterval);
    },
    descTwo(){
		$(".headerline").css({
  marginTop: "0px"
});
      $("#lbar .text-lbar .forecast").css('font-size', `45px`);
      $('#lbar .text-lbar').fadeIn(0);
      $("#lbar .text-lbar .timestamp").empty();
      if(lBarData.cities[lbarLocId].forecast.localForecast.noReport != true){
        $("#lbar .text-lbar .background").fadeIn(0);
        $("#lbar .text-lbar .background-bottom").fadeIn(0);
        $("#lbar .text-lbar .forecast").fadeIn(0);
        $("#lbar .lbar-tempunavailable").fadeOut(0);

        $("#lbar .text-lbar .timestamp").append(`${systemSettings.LBar.locations.cities[lbarLocId].locationName.toUpperCase()}: &nbsp; <em>${lBarData.cities[lbarLocId].forecast.localForecast.days[1].day}'S FORECAST</em>`);
        $("#lbar .text-lbar .forecast").text(lBarData.cities[lbarLocId].forecast.localForecast.days[1].desc);
      } else {
        $("#lbar .text-lbar .background").fadeOut(0);
        $("#lbar .text-lbar .background-bottom").fadeOut(0);
        $("#lbar .text-lbar .forecast").fadeOut(0);
        $("#lbar .lbar-tempunavailable").fadeIn(0);
      }
      var fcastFontSize = 45;
      while($("#lbar .text-lbar .forecast").outerHeight() > 151.641){
        fcastFontSize-=.25;
        $("#lbar .text-lbar .forecast").css('font-size', `${fcastFontSize}px`);
      }
      setTimeout(() => {
        fidx++; showFB()
        $("#lbar .text-lbar .forecast").css('font-size', `45px`);
      }, fcstlbarInterval);
    },
    fiveDay(){
		$(".headerline").css({
  marginTop: "0px"
});
      $('#lbar .extended-lbar').fadeIn(0);
      $("#lbar .extended-lbar .timestamp").empty();
      if(lBarData.cities[lbarLocId].forecast.extendedForecast.noReport != true){
        $("#lbar .extended-lbar .day").fadeIn(0);
        $("#lbar .extended-lbar .timestamp").append(`${systemSettings.LBar.locations.cities[lbarLocId].locationName.toUpperCase()}: &nbsp; <em>5 DAY FORECAST</em>`);
        for(let i = 0; i < 5; i++){
          $(`#lbar .extended-lbar .day.${numToWord(i+1)}`).removeClass("weekend");
          if(lBarData.cities[lbarLocId].forecast.extendedForecast.days[i].day == "SAT" || lBarData.cities[lbarLocId].forecast.extendedForecast.days[i].day == "SUN"){
            $(`#lbar .extended-lbar .day.${numToWord(i+1)}`).addClass("weekend");
          }
          $(`#lbar .extended-lbar .day.${numToWord(i+1)} .dayname`).text(lBarData.cities[lbarLocId].forecast.extendedForecast.days[i].day);
          $(`#lbar .extended-lbar .day.${numToWord(i+1)} .high`).text(lBarData.cities[lbarLocId].forecast.extendedForecast.days[i].high);
          $(`#lbar .extended-lbar .day.${numToWord(i+1)} .low`).text(lBarData.cities[lbarLocId].forecast.extendedForecast.days[i].low);
          getIcon($(`#lbar .extended-lbar .day.${numToWord(i+1)} .icon`), lBarData.cities[lbarLocId].forecast.extendedForecast.days[i].icon, "forecast", "small");
        }
      } else {
        $("#lbar .extended-lbar .day").fadeOut(0);
        $("#lbar .lbar-tempunavailable").fadeIn(0);
      }
      setTimeout(() => {
        fidx++; showFB()
      }, fcstlbarInterval);
    }
  }
  var forecastFunctionArray = [];
  switch(slideSettings.order[orderidx].slideLineup[gidx].group){
    case "severeA":
      forecastFunctionArray = [0,3,0,3,0,3,0,3];
      break;
    case "forecast":
      forecastFunctionArray = [0,3,0,3,0,3,0,3];
      break;
    case "extralocal":
      var el = []
      for(let sl = 0; sl < slideSettings.order[orderidx].slideLineup[gidx].slides.length; sl++){
        el.push(slideSettings.order[orderidx].slideLineup[gidx].slides[sl]);
        if(slideSettings.order[orderidx].slideLineup[gidx].slides[sl].function == "changeELoc"){
            if(el.some(a => a.function === "localForecast")){
              forecastFunctionArray.push(...[0,3,0,3]);
            }else{
              forecastFunctionArray.push(...[0,1,2,3]);
            }
            el = [];
        } 
      }
      break;
    case "minicoretwo":
      forecastFunctionArray = [0,3,0,3];
      break;
    default:
      forecastFunctionArray = [0,1,2,3];
  }
  var j = 0
  var cap = Math.floor((slideSettings.order[orderidx].slideLineup[gidx].duration/1000)/15)
  if(slideSettings.order[orderidx].slideLineup[gidx].group == "extralocal"){
    cap = cap * systemSettings.extraCity.cities.length;
  }
  for (var i = 0; i < cap; i++) {
    fcstBarSlideSettings.push(Object.keys(forecastFunctions)[forecastFunctionArray[j]])
    j++
    if (j >= forecastFunctionArray.length) {j = 0}
  }
  //console.log(fcstBarSlideSettings);
    function showFB() {
      if (fidx < fcstBarSlideSettings.length) {
        $('#lbar .daypart-lbar').fadeOut(0);
        $('#lbar .extended-lbar').fadeOut(0);
        $('#lbar .text-lbar').fadeOut(0);
        if(idx != undefined){
          //could def be a better way but for now this should fix the freeze on some slides
          currentFB = forecastFunctions[fcstBarSlideSettings[0]]
          idx = undefined;
        }else{
          currentFB = forecastFunctions[fcstBarSlideSettings[fidx]]
        }
        currentFB()
      } else {
        fidx = 0
      }
    }
    showFB()
}
