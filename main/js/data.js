var locationChoice = "main"
var weatherData = {
  alerts: {
    mainLoc: {
      locationName:"", 
      warnings:[],
      pages:"",
    },
    extraLoc:[]
  },
  crawlAlerts: {
    warnings:[]
  },
  currentConditions: {
    english: {
      mainLoc: {
        noReport:true,
        locationName:"",
        humidity:"",
        dewPoint:"",
        pressure:"",
        pressureTrend:"",
        wind:"",
        gusts:"",
        feelsLike:"",
        feelsLikeTitle:"",
        icon:"",
        condition:"",
        temperature:"",
      },
      extraLoc: []
    },
    spanish: {
      noReport:true,
      locationName:"",
      humidity:"",
      dewPoint:"",
      pressure:"",
      pressureTrend:"",
      wind:"",
      gusts:"",
      feelsLike:"",
      feelsLikeTitle:"",
      icon:"",
      condition:"",
      temperature:"",
    }
  },
  nearbyCities: {
    cities: [
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:"",},
    ]
  },
  localForecast: {
    mainLoc: {
      noReport: true,
      locationName:"",
      times: [
        {timetitle:"",forecast:""},
        {timetitle:"",forecast:""},
        {timetitle:"",forecast:""},
        {timetitle:"",forecast:""},
      ]
    },
    extraLoc: []
  },
  dayPart: {
    english: {
      mainLoc: {
        noReport: true,
        locationName:"",
        header:"",
        times: [
          {time:"", icon:"",condition:"",temperature:"",wind:""},
          {time:"", icon:"",condition:"",temperature:"",wind:""},
          {time:"", icon:"",condition:"",temperature:"",wind:""},
          {time:"", icon:"",condition:"",temperature:"",wind:""},
        ]
      },
      extraLoc: []
    },
    spanish: {
      noReport: true,
      locationName:"",
      header:"",
      times: [
        {time:"", icon:"",condition:"",temperature:"",wind:""},
        {time:"", icon:"",condition:"",temperature:"",wind:""},
        {time:"", icon:"",condition:"",temperature:"",wind:""},
        {time:"", icon:"",condition:"",temperature:"",wind:""},
      ]
    },
  },
  extendedForecast: {
    english: {
      mainLoc: {
        noReport: true,
        locationName:"",
        days:[
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
        ]
      },
      extraLoc: [],
    },
    spanish: {
      noReport: true,
        locationName:"",
        days:[
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
        ]
    },
  },
  almanac: {
    noReport:true,
    locationName:"",
    day:"",
    averageHigh:"",
    averageLow:"",
    recordHigh:"",
    recordLow:"",
    highYear:"",
    lowYear:"",
    sunrise:"",
    sunset:"",
    moonphases:[
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
    ],
  },
  trafficReport: {
    locationName:"",
    noReport: true,
    incidents:[],
  },
  trafficFlow: {
    locationName:"",
    noReport: true,
    routes:[],
  },
  travelMapUnavailable: true,
  travelForecast: {
    dayName:["null","null",],
    cities:[],
  },
  destinationForecast: {
    dayName:["null","null","null",],
    cities:[],
  },
  outdoorActivity: {
    noReport: true,
    locationName: "",
    dayName:"",
    icon:"",
    high:"",
    low:"",
    precipChance:"",
    humidity:"",
    wind:"",
    feelsLike:"",
    feelsLikeNum:"",
  },
  pollen: {
    noReport: true,
    locationName: "",
    date:"",
    pollenCount:"",
    pollenCountCategory:"",
    indices: [],
    treeType:"",
  },
  achesBreathe: {
    locationName:"",
    dayName:"",
    achesIndex:"",
    achesWord:"",
    breatheIndex:"",
    breatheWord:"",
  },
  airQuality: {
    noReport: true,
    locationName:"",
    dayName:"",
    index:"",
    primaryPollutant:"",
    ozoneAction:false,
  },
  uvIndex: {
    locationName:"",
    current: {
      noReport: true,
      index:"",
      word:"",
    },
    forecast: {
      noReport: true,
      times: [
        {hour:"", day:"",index:"",word:""},
        {hour:"", day:"",index:"",word:""},
        {hour:"", day:"",index:"",word:""},
      ],
    },
  },
  airportDelayList: [],
  localAirportConditions: [],
  nationalAirportConditions: [],
  internationalMap: {
    canada: [],
    mexico: [],
    caribbean: [],
    southamerica: [],
    britain: [],
    europe: [],
    africa: [],
    india: [],
    eastasia: [],
    oceania: [],
    australia: [],
  },
  internationalForecast: {
    dayName: ["null", "null", "null"],
    cities: [],
  },
  teeTime: {
    noReport: true,
    locationName:"",
    times: [
      {time:"", icon:"",day:"",temperature:"",wind:""},
      {time:"", icon:"",day:"",temperature:"",wind:""},
      {time:"", icon:"",day:"",temperature:"",wind:""},
      {time:"", icon:"",day:"",temperature:"",wind:""},
      {time:"", icon:"",day:"",temperature:"",wind:""},
    ]
  },
  golfIndexUnavailable:true,
  courseForecast: [],
  gardeningIndex: {
    noReport: true,
    locationName: "",
    dayName:"",
    low:"",
    high:"",
    precipChance:"",
    cloudCover:"",
    wateringIndex:"",
    wateringIndexWord:"",
  },
  estimatedPrecipMapUnavailable: true,
  precipForecastMapUnavailable: true,
  droughtMonitorMapUnavailable: true,
  frostFreezeWarning: false,
  frostFreezeMapUnavailable: true,
  skiReport: {
    resorts:[]
  },
  snowfallForecastMapUnavailable: true,
  surfReport: {
    locationName:"",
    wind:"",
    wavePeriod:"",
    waterTemperature:"",
    waveHeight:"",
  },
  waterTempsMapUnavailable: true,
  coastalForecast: {
    noReport: true,
    locationName:"",
    warnings:[],
    times: [
      {forecast:""},
      {forecast:""},
      {forecast:""},
    ]
  },
  tides: {
    stations: [
      {noReport: true, stationName:"",high:["",""],low:["",""]},
      {noReport: true, stationName:"",high:["",""],low:["",""]},
    ],
    almanacName:"",
    sunrise:"",
    sunset:"",
  },
  trafficMapUnavailable: true,
  satUnavailable: true,
  dopplerUnavailable: true,
  winterLegend: false,
  severemode: false,
}
async function eachAlert(key) {//asynchornous, bcuz getJSON is an asynchronous function
  const data = await $.getJSON("https://api.weather.com/v3/alerts/detail?alertId=" + key + "&format=json&language=en-US&apiKey=" + api_key)
    return {
      event: data.alertDetail.eventDescription,
      type: data.alertDetail.messageType == "Update" ? " Update" : data.alertDetail.messageType == "Cancel" ? " Cancellation" : "",
      crawl: data.alertDetail.texts[0].description.replaceAll("\n", " "),
      color: warningSettings[data.alertDetail.eventDescription].color,
      sortNum: warningSettings[data.alertDetail.eventDescription].priority,
      severe: warningSettings[data.alertDetail.eventDescription].severe
    }
}
async function getCrawlAlerts() {
  weatherData.severemode = false;
  var enableSev = weatherData.severemode;

  var url = "https://api.weather.com/v3/alerts/headlines?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&language=en-US&apiKey=" + api_key;

  try {
    const data = await $.getJSON(url);

    if (data != undefined && data.alerts != undefined) {
      weatherData.crawlAlerts = {
        locationName: (systemSettings.mainCity.bulletinName == "") ? systemSettings.mainCity.locationName + " Area" : systemSettings.mainCity.bulletinName,
        warnings: []
      };

      var array = []

      for (var i = 0; i < data.alerts.length; i++) {
        var eventDesc = data.alerts[i].eventDescription;

        if (warningSettings[eventDesc] != undefined && warningSettings[eventDesc].severe) {
          enableSev = true;
        }

        if (warningSettings[eventDesc] != undefined && warningSettings[eventDesc].included) {
          array.push(await eachAlert(data.alerts[i].detailKey));
        }
      }

      array.sort((a, b) => a.sortNum - b.sortNum);

      const finalArray = [...new Map(array.map(item => [item.event, item])).values()];

      weatherData.crawlAlerts.warnings = finalArray

      weatherData.severemode = enableSev
      
      //console.log("All crawl alerts fetched and sorted:", weatherData.crawlAlerts.warnings);
      //console.log("severenode crawlAlerts", weatherData.severemode)
      
    } else {
      weatherData.crawlAlerts = { locationName: systemSettings.mainCity.locationName, warnings: [] };
      weatherData.severemode = false;
    }
  } catch (error) {
    console.error(error)

    weatherData.crawlAlerts = { locationName: systemSettings.mainCity.locationName, warnings: [] };
    weatherData.severemode = false;
  }
}
async function getCoreData() {
  async function getBulletinAlerts() {
  var url = "https://api.weather.com/v3/alerts/headlines?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&language=en-US&apiKey=" + api_key;
  weatherData.airQuality.ozoneAction = false
  weatherData.frostFreezeWarning = false

  try {
    const data = await $.getJSON(url);

    if (data != undefined && data.alerts != undefined) {
      weatherData.alerts.mainLoc = {
        locationName:((systemSettings.mainCity.bulletinName == "") ? systemSettings.mainCity.locationName + " Area": systemSettings.mainCity.bulletinName), 
        warnings:[]
      }

      var array = [];

      for (var i = 0; i < data.alerts.length; i++) {
        var eventDesc = data.alerts[i].eventDescription;

        if (eventDesc == "Ozone Action Day") {weatherData.airQuality.ozoneAction = true}
        if (eventDesc == "Freeze Warning" || eventDesc == "Hard Freeze Warning" || eventDesc == "Frost Advisory") {weatherData.frostFreezeWarning = true}

        function addAlert() {
          var alertEvent = weatherData.crawlAlerts.warnings.length > 0 ? weatherData.crawlAlerts.warnings[0].event : "none"
          if (!warningSettings[eventDesc].marine && eventDesc != "Special Weather Statement") {
            if ((warningSettings[eventDesc].severe && eventDesc != alertEvent) || !warningSettings[eventDesc].severe) {
              var duplicate = false
              for (var ii = 0; ii < array.length; ii++) {
                if (array[ii].includes(eventDesc)) duplicate = true;
              }
              if (!duplicate) {
                array.push(data.alerts[i].headlineText)
              }
            }
          }
        }

        if (warningSettings[eventDesc] != undefined && warningSettings[eventDesc].included) {
          await addAlert();
        }
      }

      array.sort((a, b) => a.sortNum - b.sortNum);

      weatherData.alerts.mainLoc.warnings = array

      var atext = ""
      $(".gbul .alerts").text("")
      for (var i = 0; i < weatherData.alerts.mainLoc.warnings.length; i++) {
        atext = atext + weatherData.alerts.mainLoc.warnings[i] + " " + "\n\n"
      }
      $(".gbul .alerts").text(atext.slice(0, -2))
      weatherData.alerts.mainLoc.pages = Math.ceil($(".gbul .alerts").height() / 534)

      if (weatherData.alerts.mainLoc.pages > 2) {
        weatherData.alerts.mainLoc.pages = 2
      }
      
      //console.log("All bulletin alerts fetched and sorted:", weatherData.alerts.mainLoc.warnings);
      
    } else {
      weatherData.alerts.mainLoc = {locationName:systemSettings.mainCity.locationName,warnings:[], pages:0, alertsAmount:0}
    }
  } catch (error) {
    console.log("catch bulletin alerts error")
    console.error(error)
    weatherData.alerts.mainLoc = {locationName:systemSettings.mainCity.locationName,warnings:[], pages:0,alertsAmount:0}
  }
}
  getBulletinAlerts()
  async function getCurrent() {
    var url = "https://api.weather.com/v3/wx/observations/current?" + systemSettings.mainCity.header + "&units=e&language=en-US&format=json&apiKey=" + api_key
    const data = await $.getJSON(url)

    try {
      weatherData.currentConditions.english.mainLoc.locationName = systemSettings.mainCity.obsName
      weatherData.currentConditions.english.mainLoc.noReport = false
      weatherData.currentConditions.english.mainLoc.humidity = data.relativeHumidity + "%"
      weatherData.currentConditions.english.mainLoc.dewPoint = data.temperatureDewPoint
      weatherData.currentConditions.english.mainLoc.pressure = data.pressureAltimeter.toFixed(2)
      weatherData.currentConditions.english.mainLoc.pressureTrend = data.pressureTendencyCode
      weatherData.currentConditions.english.mainLoc.wind = ((data.windDirectionCardinal == "CALM" || data.windSpeed == 0) ? "Calm" : data.windDirectionCardinal + " " + data.windSpeed)
      weatherData.currentConditions.english.mainLoc.gusts = ((data.windGust != null) ? data.windGust + " mph" : "None")
      weatherData.currentConditions.english.mainLoc.feelsLikeTitle = ((data.temperature > 65) ? "Heat Index" : "Wind Chill")
      weatherData.currentConditions.english.mainLoc.feelsLike = ((data.temperatureFeelsLike == data.temperature) ? "none" : data.temperatureFeelsLike)
      weatherData.currentConditions.english.mainLoc.icon = data.iconCodeExtend
      weatherData.currentConditions.english.mainLoc.condition = getCond(data.iconCodeExtend, "current")
      weatherData.currentConditions.english.mainLoc.temperature = data.temperature
      weatherData.almanac.sunrise = dateFns.format(new Date(data.sunriseTimeLocal),"h:mm a").toLowerCase()
      weatherData.almanac.sunset = dateFns.format(new Date(data.sunsetTimeLocal),"h:mm a").toLowerCase()
    } catch (error) {
      console.error(error)
    
      weatherData.currentConditions.english.mainLoc.locationName = systemSettings.mainCity.obsName
      weatherData.currentConditions.english.mainLoc.noReport = true
      weatherData.almanac.sunrise = ""
      weatherData.almanac.sunset = ""
    }
  }
  getCurrent()
  async function getNearby(num) {
    var url = "https://api.weather.com/v3/wx/observations/current?" + systemSettings.nearbyCities.cities[num].header + "&units=e&language=en-US&format=json&apiKey=" + api_key
    
    const data = await $.getJSON(url)

    var obj = {noReport:true,locationName:systemSettings.nearbyCities.cities[num].obsName,icon:"",temperature:"",wind:""}

    try {
      obj.noReport = false
      obj.locationName = systemSettings.nearbyCities.cities[num].obsName
      obj.icon = data.iconCodeExtend
      obj.temperature = data.temperature
      obj.wind = ((data.windDirectionCardinal == "CALM" || data.windSpeed == 0) ? "Calm" : data.windDirectionCardinal + " " + data.windSpeed)
    } catch (error) {
      console.error(error)

      obj.noReport = true
      obj.locationName = systemSettings.nearbyCities.cities[num].obsName
      obj.icon = "blank"
      obj.temperature = ""
      obj.wind = ""
    }

    weatherData.nearbyCities.cities[num] = obj
  }

  for (var i = 0; i < systemSettings.nearbyCities.cities.length; i++) {
    await getNearby(i)
  }

  async function getLF() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    
    const data = await $.getJSON(url)

    try {
      var ii = 0
      var ni = 1
      if (data.daypart[0].daypartName[0] == null) {
          ii = 1
         // ni = 1
        }
        weatherData.localForecast.mainLoc.locationName = systemSettings.mainCity.locationName
        weatherData.localForecast.mainLoc.noReport = false
        for (var i = 0; i < weatherData.localForecast.mainLoc.times.length; i++, ii++) {
          /*if (data.daypart[0].daypartName[ii] == "Today" || data.daypart[0].daypartName[ii] == "Tonight") {
            if (data.daypart[0].daypartName[ii] == "Tonight") {
              ni++
            }
            weatherData.localForecast.mainLoc.times[i].timetitle = data.daypart[0].daypartName[ii]
          } else {
            if (data.daypart[0].dayOrNight[ii] == "N") {
              weatherData.localForecast.mainLoc.times[i].timetitle = data.dayOfWeek[ni] + " Night"
              ni++
            } else {
              weatherData.localForecast.mainLoc.times[i].timetitle = data.dayOfWeek[ni]
            }
          }*/
          weatherData.localForecast.mainLoc.times[i].timetitle = data.daypart[0].daypartName[ii].replaceAll(" night", " Night").replaceAll("Tomorrow", data.dayOfWeek[ni])
          weatherData.localForecast.mainLoc.times[i].forecast = data.daypart[0].narrative[ii].replaceAll("F. ", ". ");
        }
    } catch (error) {
      console.error(error)

      weatherData.localForecast.mainLoc.locationName = systemSettings.mainCity.locationName
      weatherData.localForecast.mainLoc.noReport = true
    }
  }
  getLF()
  async function getDayPart() {
    var url = "https://api.weather.com/v3/wx/forecast/hourly/2day?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var currenthr = dateFns.getHours(new Date());
    const data = await $.getJSON(url)

    try {
      var targetHours
      function timeTitleCreate(time){
        var hour = dateFns.getHours(time);
        if (hour == 0) {
          return 'Midnight';
        } else if (hour == 12){
          return 'Noon';
        }
        return (dateFns.format(time,'h a')).replace(" ", "").toLowerCase();
      }
      switch (true) {
        case (currenthr < 3):
          weatherData.dayPart.english.mainLoc.header = "Today's Forecast"
          targetHours = [6, 12, 15, 17];
        case (currenthr < 9):
          weatherData.dayPart.english.mainLoc.header = "Today's Forecast"
          targetHours = [12, 15, 17, 20]; break;
        case (currenthr < 12):
          weatherData.dayPart.english.mainLoc.header = "Tonight's Forecast"
          targetHours = [15, 17, 20, 0]; break;
        case (currenthr < 14):
          weatherData.dayPart.english.mainLoc.header = "Tonight's Forecast"
          targetHours = [17, 20, 0, 6]; break;
        case (currenthr < 17):
          weatherData.dayPart.english.mainLoc.header = "Tomorrow's Forecast"
          targetHours = [6, 12, 15, 17]; break;
        case (currenthr < 20):
          weatherData.dayPart.english.mainLoc.header = "Tomorrow's Forecast"
          targetHours = [6, 12, 15, 17]; break;
        default:
          weatherData.dayPart.english.mainLoc.header = "Tomorrow's Forecast"
          targetHours = [6, 12, 15, 17]
      }
     var ii = 0
      weatherData.dayPart.english.mainLoc.locationName = systemSettings.mainCity.locationName
      weatherData.dayPart.english.mainLoc.noReport = false
      for (var i = 0; i < data.validTimeLocal.length; i++) {
        if (ii < 4) {
          var dpTime = dateFns.getHours(data.validTimeLocal[i])
          if (dpTime == targetHours[ii]) {
            weatherData.dayPart.english.mainLoc.times[ii].time = timeTitleCreate(data.validTimeLocal[i])
            weatherData.dayPart.english.mainLoc.times[ii].icon = data.iconCodeExtend[i]
            weatherData.dayPart.english.mainLoc.times[ii].condition = getCond(data.iconCodeExtend[i], "daypart")
            weatherData.dayPart.english.mainLoc.times[ii].temperature = data.temperature[i]
            weatherData.dayPart.english.mainLoc.times[ii].wind = ((data.windDirectionCardinal[i] == "CALM" || data.windSpeed[i] == 0) ? "Calm" : data.windDirectionCardinal[i] + " " + data.windSpeed[i])
            ii++
          }
        } else {
          break
        }
      }
    } catch (error) {
      console.error(error)
    
      switch (true) {
        case (currenthr < 3):
          weatherData.dayPart.english.mainLoc.header = "Today's Forecast"
        case (currenthr < 9):
          weatherData.dayPart.english.mainLoc.header = "Today's Forecast"
        case (currenthr < 12):
          weatherData.dayPart.english.mainLoc.header = "Tonight's Forecast"
        case (currenthr < 14):
          weatherData.dayPart.english.mainLoc.header = "Tonight's Forecast"
        case (currenthr < 17):
          weatherData.dayPart.english.mainLoc.header = "Tomorrow's Forecast"
        case (currenthr < 20):
          weatherData.dayPart.english.mainLoc.header = "Tomorrow's Forecast"
        default:
          weatherData.dayPart.english.mainLoc.header = "Tomorrow's Forecast"
      }
      weatherData.dayPart.english.mainLoc.locationName = systemSettings.mainCity.locationName
      weatherData.dayPart.english.mainLoc.noReport = true
    }
  }
  getDayPart()
  async function getExtended() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    
    const data = await $.getJSON(url)

    try {
      var today = longWeekDays[new Date().getDay()] 
      weatherData.extendedForecast.english.mainLoc.locationName = systemSettings.mainCity.locationName
      weatherData.extendedForecast.english.mainLoc.noReport = false
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1
        dpi = 2
      }
      for (var i = 0; i < weatherData.extendedForecast.english.mainLoc.days.length; i++, ii++, dpi = dpi + 2) {
        weatherData.extendedForecast.english.mainLoc.days[i].day = data.dayOfWeek[ii].substring(0,3)
        weatherData.extendedForecast.english.mainLoc.days[i].icon = data.daypart[0].iconCodeExtend[dpi]
        weatherData.extendedForecast.english.mainLoc.days[i].condition = getCond(weatherData.extendedForecast.english.mainLoc.days[i].icon, "forecast")
        if (data.dayOfWeek[ii] == today && new Date().getHours() >= 4) {
          weatherData.extendedForecast.english.mainLoc.days[i].low = ""
        } else {
          weatherData.extendedForecast.english.mainLoc.days[i].low = data.temperatureMin[ii]
        }
        weatherData.extendedForecast.english.mainLoc.days[i].high = data.temperatureMax[ii]
      }
    } catch (error) {
      console.error(error)
    
      weatherData.extendedForecast.english.mainLoc.locationName = systemSettings.mainCity.locationName
      weatherData.extendedForecast.english.mainLoc.noReport = true
    }
  }
  getExtended()
  async function getAlmanac() {
    var url = "https://api.weather.com/v3/wx/almanac/daily/5day?" + systemSettings.mainCity.header + `&format=json&units=e&startDay=${dateFns.format(new Date(),"d")}&startMonth=${dateFns.format(new Date(),"M")}&apiKey=` + api_key
    
    const data = await $.getJSON(url)

    try {
      weatherData.almanac.locationName = systemSettings.mainCity.almanacLocationName
      weatherData.almanac.noReport = false
      weatherData.almanac.day = dateFns.format(new Date(),"MMMM d")
      weatherData.almanac.averageHigh = data.temperatureAverageMax[0]
      weatherData.almanac.averageLow = data.temperatureAverageMin[0]
      weatherData.almanac.recordHigh = data.temperatureRecordMax[0]
      weatherData.almanac.recordLow = data.temperatureRecordMin[0]
      weatherData.almanac.highYear = data.almanacRecordYearMax[0]
      weatherData.almanac.lowYear = data.almanacRecordYearMin[0]
    } catch (error) {
      console.error(error)

      weatherData.almanac.locationName = systemSettings.mainCity.almanacLocationName
      weatherData.almanac.noReport = true
    }
  }
  getAlmanac()

  async function getMoons() {
        var ii = 0
        var firstURL = `https://www.icalendar37.net/lunar/api/?lang=en&month=${dateFns.format(new Date(),"M")}&year=${dateFns.format(new Date(),"yyyy")}`
        
        const firstData = await $.getJSON(firstURL)

        try {
          weatherData.almanac.locationName = systemSettings.mainCity.almanacLocationName

          for (phase in firstData.phase) {
            if (firstData.phase[phase].isPhaseLimit != false) {
              if(phase < new Date().getDate()){continue}
              weatherData.almanac.moonphases[ii].moon = {"New Moon": "NEW", "First quarter": "FIRST", "Full moon": "FULL", "Last quarter": "LAST"}[firstData.phase[phase].phaseName]
              weatherData.almanac.moonphases[ii].date = String(firstData.monthName).slice(0,3) + " " + phase
              weatherData.almanac.moonphases[ii].date =  ((phase.toString().length == 1) ? weatherData.almanac.moonphases[ii].date : weatherData.almanac.moonphases[ii].date)
              ii += 1;
            }
          }
        } catch (error) {
          console.error(error)

          weatherData.almanac.locationName = systemSettings.mainCity.almanacLocationName
          weatherData.almanac.noReport = true
        }

        if (weatherData.almanac.moonphases[3].date == "") {
          var secondURL = `https://www.icalendar37.net/lunar/api/?lang=en&month=${dateFns.format((dateFns.addMonths(new Date(),1)),"M")}&year=${dateFns.format(dateFns.addMonths(new Date(),1),"yyyy")}`
          const secondData = await $.getJSON(secondURL)

          try {
            weatherData.almanac.locationName = systemSettings.mainCity.almanacLocationName

            for (phase in secondData.phase) {
              if (secondData.phase[phase].isPhaseLimit != false) {
                weatherData.almanac.moonphases[ii].moon = {"New Moon": "NEW", "First quarter": "FIRST", "Full moon": "FULL", "Last quarter": "LAST"}[secondData.phase[phase].phaseName]
                weatherData.almanac.moonphases[ii].date = String(secondData.monthName).slice(0,3) + " " + phase
                weatherData.almanac.moonphases[ii].date =  ((phase.toString().length == 1) ? weatherData.almanac.moonphases[ii].date : weatherData.almanac.moonphases[ii].date)
                ii += 1;
              }
            }
          } catch (error) {
            console.error(error)

            weatherData.almanac.locationName = systemSettings.mainCity.almanacLocationName
            weatherData.almanac.noReport = true
          }
        }
      }

      getMoons()
}
function getExtraCore(locNum) {
  async function getBulletinAlerts() {
  var url = "https://api.weather.com/v3/alerts/headlines?geocode=" + systemSettings.extraCity.cities[locNum].lat + "," + systemSettings.extraCity.cities[locNum].lon + "&format=json&language=en-US&apiKey=" + api_key;
  weatherData.airQuality.ozoneAction = false
  weatherData.frostFreezeWarning = false
  
  try {
    const data = await $.getJSON(url);

    if (data != undefined && data.alerts != undefined) {
      weatherData.alerts.extraLoc[locNum] = {
        locationName:((systemSettings.extraCity.cities[locNum].bulletinName == "") ? systemSettings.extraCity.cities[locNum].locationName + " Area": systemSettings.extraCity.cities[locNum].bulletinName), 
        warnings:[]
      }

      var array = [];

      for (var i = 0; i < data.alerts.length; i++) {
        var eventDesc = data.alerts[i].eventDescription;
        
        function addAlert() {
          var alertEvent = weatherData.crawlAlerts.warnings.length > 0 ? weatherData.crawlAlerts.warnings[0].event : "none"
          if (!warningSettings[eventDesc].marine && eventDesc != "Special Weather Statement") {
            var duplicate = false
            for (var ii = 0; ii < array.length; ii++) {
              if (array[ii].includes(eventDesc)) duplicate = true;
            }
            if (!duplicate) {
              array.push(data.alerts[i].headlineText)
            }
          }
        }
        
        if (warningSettings[eventDesc] != undefined && warningSettings[eventDesc].included) {
          await addAlert();
        }
      }
      
      array.sort((a, b) => a.sortNum - b.sortNum);

      weatherData.alerts.extraLoc[locNum].warnings = array;
      
      //console.log("All extra bulletin alerts fetched and sorted:", weatherData.alerts.extraLoc[locNum].warnings);

      var atext = ""
      $(".gbul .alerts").text("")
      for (var i = 0; i < weatherData.alerts.extraLoc[locNum].warnings.length; i++) {
        atext = atext + weatherData.alerts.extraLoc[locNum].warnings[i] + " " + "\n\n"
      }
      $(".gbul .alerts").text(atext.slice(0, -2))
      weatherData.alerts.extraLoc[locNum].pages = Math.ceil($(".gbul .alerts").height() / 534)

      if (weatherData.alerts.extraLoc[locNum].pages > 2) {
        weatherData.alerts.extraLoc[locNum].pages = 2
      }
      
    } else {
      weatherData.alerts.extraLoc[locNum] = {locationName:systemSettings.extraCity.cities[locNum].locationName,warnings:[], pages:0}
      weatherData.alerts.extraLoc[locNum].alertsAmount = 0
    }
  } catch (error) {
    console.error(error)
    
    weatherData.alerts.extraLoc[locNum] = {locationname:systemSettings.extraCity.cities[locNum].locationName,warnings:[], pages:0}
    weatherData.alerts.extraLoc[locNum].alertsAmount = 0
  }
}
  getBulletinAlerts()
  async function getCurrent() {
    var url = "https://api.weather.com/v3/wx/observations/current?" + systemSettings.extraCity.cities[locNum].header + "&units=e&language=en-US&format=json&apiKey=" + api_key
    var eLocData = {noReport:true,locationName:"",humidity:"",dewPoint:"",pressure:"",pressureTrend:"",wind:"",gusts:"",feelsLike:"",feelsLikeTitle:"",icon:"",condition:"",temperature:"",}
    
    const data = await $.getJSON(url)

    try {
      eLocData.locationName = systemSettings.extraCity.cities[locNum].obsName
      eLocData.noReport = false
      eLocData.humidity = data.relativeHumidity + "%"
      eLocData.dewPoint = data.temperatureDewPoint
      eLocData.pressure = data.pressureAltimeter.toFixed(2)
      eLocData.pressureTrend = data.pressureTendencyCode
      eLocData.wind = ((data.windDirectionCardinal == "CALM" || data.windSpeed == 0) ? "Calm" : data.windDirectionCardinal + " " + data.windSpeed)
      eLocData.gusts = ((data.windGust != null) ? data.windGust + " mph" : "None")
      eLocData.feelsLikeTitle = ((data.temperature > 65) ? "Heat Index" : "Wind Chill")
      eLocData.feelsLike = ((data.temperatureFeelsLike == data.temperature) ? "none" : data.temperatureFeelsLike)
      eLocData.icon = data.iconCodeExtend
      eLocData.condition = getCond(data.iconCodeExtend, "current")
      eLocData.temperature = data.temperature
    } catch (error) {
      console.error(error)

      eLocData.locationName = systemSettings.extraCity.cities[locNum].obsName
      eLocData.noReport = true
    }
    weatherData.currentConditions.english.extraLoc[locNum] = eLocData
  }
  getCurrent()
  async function getLF(){
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.extraCity.cities[locNum].lat + "," + systemSettings.extraCity.cities[locNum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    
    var eLocLF = {noReport:true,locationName:"",times:[{timetitle:"",forecast:""},{timetitle:"",forecast:""},{timetitle:"",forecast:""},{timetitle:"",forecast:""}]}
    
    const data = await $.getJSON(url)

    try {
      var ii = 0
      var ni = 1
      if (data.daypart[0].daypartName[0] == null) {
          ii = 1
         // ni = 1
        }
        eLocLF.locationName = systemSettings.extraCity.cities[locNum].locationName
        eLocLF.noReport = false
        for (var i = 0; i < eLocLF.times.length; i++, ii++) {
          /*if (data.daypart[0].daypartName[ii] == "Today" || data.daypart[0].daypartName[ii] == "Tonight") {
            if (data.daypart[0].daypartName[ii] == "Tonight") {
              ni++
            }
            weatherData.localForecast.mainLoc.times[i].timetitle = data.daypart[0].daypartName[ii]
          } else {
            if (data.daypart[0].dayOrNight[ii] == "N") {
              weatherData.localForecast.mainLoc.times[i].timetitle = data.dayOfWeek[ni] + " Night"
              ni++
            } else {
              weatherData.localForecast.mainLoc.times[i].timetitle = data.dayOfWeek[ni]
            }
          }*/
          eLocLF.times[i].timetitle = data.daypart[0].daypartName[ii].replaceAll(" night", " Night").replaceAll("Tomorrow", data.dayOfWeek[ni])
          eLocLF.times[i].forecast = data.daypart[0].narrative[ii].replace("F. ", ". ");
        }
    } catch (error) {
      console.error(error)

      eLocLF.locationName = systemSettings.extraCity.cities[locNum].obsName
      eLocLF.noReport = true;
    }
    
    weatherData.localForecast.extraLoc[locNum] = eLocLF;
  }
  getLF()

  async function getDayPart() {
    var url = "https://api.weather.com/v3/wx/forecast/hourly/2day?geocode=" + systemSettings.extraCity.cities[locNum].lat + "," + systemSettings.extraCity.cities[locNum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var elocData = {noReport: true,locationName:"",header:"",times: [{time:"", icon:"",condition:"",temperature:"",wind:""},{time:"", icon:"",condition:"",temperature:"",wind:""},{time:"", icon:"",condition:"",temperature:"",wind:""},{time:"", icon:"",condition:"",temperature:"",wind:""},]}
    var currenthr = dateFns.getHours(new Date());

    const data = await $.getJSON(url)

    try {
      var targetHours
      function timeTitleCreate(time){
        var hour = dateFns.getHours(time);
        if (hour == 0) {
          return 'Midnight';
        } else if (hour == 12){
          return 'Noon';
        }
        return (dateFns.format(time,'h a')).replace(" ", "").toLowerCase();
      }
      switch (true) {
        case (currenthr < 3):
          elocData.header = "Today's Forecast"
          targetHours = [6, 12, 15, 17];
        case (currenthr < 9):
          elocData.header = "Today's Forecast"
          targetHours = [12, 15, 17, 20]; break;
        case (currenthr < 12):
          elocData.header = "Tonight's Forecast"
          targetHours = [15, 17, 20, 0]; break;
        case (currenthr < 14):
          elocData.header = "Tonight's Forecast"
          targetHours = [17, 20, 0, 6]; break;
        case (currenthr < 17):
          elocData.header = "Tomorrow's Forecast"
          targetHours = [6, 12, 15, 17]; break;
        case (currenthr < 20):
          elocData.header = "Tomorrow's Forecast"
          targetHours = [6, 12, 15, 17]; break;
        default:
          elocData.header = "Tomorrow's Forecast"
          targetHours = [6, 12, 15, 17]
      }
     var ii = 0
      elocData.locationName = systemSettings.extraCity.cities[locNum].locationName
      elocData.noReport = false
      for (var i = 0; i < data.validTimeLocal.length; i++) {
        if (ii < 4) {
          var dpTime = dateFns.getHours(data.validTimeLocal[i])
          if (dpTime == targetHours[ii]) {
            elocData.times[ii].time = timeTitleCreate(data.validTimeLocal[i])
            elocData.times[ii].icon = data.iconCodeExtend[i]
            elocData.times[ii].condition = getCond(data.iconCodeExtend[i], "daypart")
            elocData.times[ii].temperature = data.temperature[i]
            elocData.times[ii].wind = ((data.windDirectionCardinal[i] == "CALM" || data.windSpeed[i] == 0) ? "Calm" : data.windDirectionCardinal[i] + " " + data.windSpeed[i])
            ii++
          }
        } else {
          break
        }
      }
    } catch (error) {
      console.error(error)
      
      switch (true) {
        case (currenthr < 3):
          elocData.header = "Today's Forecast"
        case (currenthr < 9):
          elocData.header = "Today's Forecast"
        case (currenthr < 12):
          elocData.header = "Tonight's Forecast"
        case (currenthr < 14):
          elocData.header = "Tonight's Forecast"
        case (currenthr < 17):
          elocData.header = "Tomorrow's Forecast"
        case (currenthr < 20):
          elocData.header = "Tomorrow's Forecast"
        default:
          elocData.header = "Tomorrow's Forecast"
      }
      elocData.locationName = systemSettings.extraCity.cities[locNum].locationName
      elocData.noReport = true
    }

    weatherData.dayPart.english.extraLoc[locNum] = elocData
  }
  getDayPart()
  async function getExtended() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.extraCity.cities[locNum].lat + "," + systemSettings.extraCity.cities[locNum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var eLocData = {noReport: true,locationName:"",days:[{day:"",icon:"",condition:"",high:"",low:""},{day:"",icon:"",condition:"",high:"",low:""},{day:"",icon:"",condition:"",high:"",low:""},{day:"",icon:"",condition:"",high:"",low:""},{day:"",icon:"",condition:"",high:"",low:""},]}
    
    const data = await $.getJSON(url)

    try {
      var today = longWeekDays[new Date().getDay()] 
      eLocData.locationName = systemSettings.extraCity.cities[locNum].locationName
      eLocData.noReport = false
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1
        dpi = 2
      }
      for (var i = 0; i < eLocData.days.length; i++, ii++, dpi = dpi + 2) {
        eLocData.days[i].day = data.dayOfWeek[ii].substring(0,3)
        eLocData.days[i].icon = data.daypart[0].iconCodeExtend[dpi]
        eLocData.days[i].condition = getCond(eLocData.days[i].icon, "forecast")
        if (data.dayOfWeek[ii] == today && new Date().getHours() >= 4) {
          eLocData.days[i].low = ""
        } else {
          eLocData.days[i].low = data.temperatureMin[ii]
        }
        eLocData.days[i].high = data.temperatureMax[ii]
      }
    } catch (error) {
      console.error(error)
      
      eLocData.locationName = systemSettings.extraCity.cities[locNum].locationName
      eLocData.noReport = true
    }
    weatherData.extendedForecast.english.extraLoc[locNum] = eLocData
  }
  getExtended()
}
function getSpanishData() {
  async function getCurrent() {
    var url = "https://api.weather.com/v3/wx/observations/current?" + systemSettings.mainCity.header + "&units=e&language=es-US&format=json&apiKey=" + api_key
    const data = await $.getJSON(url)

    try {
      weatherData.currentConditions.spanish.locationName = systemSettings.mainCity.obsName
      weatherData.currentConditions.spanish.noReport = false
      weatherData.currentConditions.spanish.humidity = data.relativeHumidity + "%"
      weatherData.currentConditions.spanish.dewPoint = data.temperatureDewPoint
      weatherData.currentConditions.spanish.pressure = data.pressureAltimeter.toFixed(2)
      weatherData.currentConditions.spanish.pressureTrend = data.pressureTendencyCode
      weatherData.currentConditions.spanish.wind = ((data.windDirectionCardinal == "CALM" || data.windSpeed == 0) ? "Calma" : data.windDirectionCardinal + " " + data.windSpeed)
      weatherData.currentConditions.spanish.gusts = ((data.windGust != null) ? data.windGust + " mph" : "None")
      weatherData.currentConditions.spanish.feelsLikeTitle = "Sensación téermica"
      weatherData.currentConditions.spanish.feelsLike = ((data.temperatureFeelsLike == data.temperature) ? "none" : data.temperatureFeelsLike)
      weatherData.currentConditions.spanish.icon = data.iconCodeExtend
      weatherData.currentConditions.spanish.condition = getCond(data.iconCodeExtend, "current", "spanish")
      weatherData.currentConditions.spanish.temperature = data.temperature
    } catch (error) {
      console.error(error)
      
      weatherData.currentConditions.spanish.locationName = systemSettings.mainCity.obsName
      weatherData.currentConditions.spanish.noReport = true
    }
  }
  getCurrent()
  
  async function getDayPart() {
    var url = "https://api.weather.com/v3/wx/forecast/hourly/2day?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&units=e&language=es-US&apiKey=" + api_key
    var currenthr = dateFns.getHours(new Date());
    const data = await $.getJSON(url);
    
    try {
      var targetHours
      function timeTitleCreate(time){
        var hour = dateFns.getHours(time);
        if (hour == 0) {
          return 'Medionoche';
        } else if (hour == 12){
          return 'Mediodia';
        }
        return (dateFns.format(time,'h a')).replace(" ", "").toLowerCase();
      }
      switch (true) {
        case (currenthr < 3):
          weatherData.dayPart.spanish.header = "Pronóstico de hoy"
          targetHours = [6, 12, 15, 17];
        case (currenthr < 9):
          weatherData.dayPart.spanish.header = "Pronóstico de hoy"
          targetHours = [12, 15, 17, 20]; break;
        case (currenthr < 12):
          weatherData.dayPart.spanish.header = "Pronóstico esta noche"
          targetHours = [15, 17, 20, 0]; break;
        case (currenthr < 14):
          weatherData.dayPart.spanish.header = "Pronóstico esta noche"
          targetHours = [17, 20, 0, 6]; break;
        case (currenthr < 17):
          weatherData.dayPart.spanish.header = "Pronóstico para mañana"
          targetHours = [6, 12, 15, 17]; break;
        case (currenthr < 20):
          weatherData.dayPart.spanish.header = "Pronóstico para mañana"
          targetHours = [6, 12, 15, 17]; break;
        default:
          weatherData.dayPart.spanish.header = "Pronóstico para mañana"
          targetHours = [6, 12, 15, 17]
      }
     var ii = 0
      weatherData.dayPart.spanish.locationName = systemSettings.mainCity.locationName
      weatherData.dayPart.spanish.noReport = false
      for (var i = 0; i < data.validTimeLocal.length; i++) {
        if (ii < 4) {
          var dpTime = dateFns.getHours(data.validTimeLocal[i])
          if (dpTime == targetHours[ii]) {
            weatherData.dayPart.spanish.times[ii].time = timeTitleCreate(data.validTimeLocal[i])
            weatherData.dayPart.spanish.times[ii].icon = data.iconCodeExtend[i]
            weatherData.dayPart.spanish.times[ii].condition = getCond(data.iconCodeExtend[i], "daypart", "spanish")
            weatherData.dayPart.spanish.times[ii].temperature = data.temperature[i]
            weatherData.dayPart.spanish.times[ii].wind = ((data.windDirectionCardinal[i] == "CALMA" || data.windSpeed[i] == 0) ? "Calma" : data.windDirectionCardinal[i] + " " + data.windSpeed[i])
            ii++
          }
        } else {
          break
        }
      }
    } catch (error) {
      console.error(error);
      
      switch (true) {
        case (currenthr < 3):
          weatherData.dayPart.spanish.header = "Pronóstico de hoy"
        case (currenthr < 9):
          weatherData.dayPart.spanish.header = "Pronóstico de hoy"
        case (currenthr < 12):
          weatherData.dayPart.spanish.header = "Pronóstico esta noche"
        case (currenthr < 14):
          weatherData.dayPart.spanish.header = "Pronóstico esta noche"
        case (currenthr < 17):
          weatherData.dayPart.spanish.header = "Pronóstico para mañana"
        case (currenthr < 20):
          weatherData.dayPart.spanish.header = "Pronóstico para mañana"
        default:
          weatherData.dayPart.spanish.header = "Pronóstico para mañana"
      }
      weatherData.dayPart.spanish.locationName = systemSettings.mainCity.locationName
      weatherData.dayPart.spanish.noReport = true
    }
  }
  getDayPart()
  async function getExtended() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&units=e&language=es-US&apiKey=" + api_key
    
    const data = await $.getJSON(url);
    
    try {
      var today = longWeekDays[new Date().getDay()] 
      weatherData.extendedForecast.spanish.locationName = systemSettings.mainCity.locationName
      weatherData.extendedForecast.spanish.noReport = false
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1
        dpi = 2
      }
      for (var i = 0; i < weatherData.extendedForecast.spanish.days.length; i++, ii++, dpi = dpi + 2) {
        weatherData.extendedForecast.spanish.days[i].day = data.dayOfWeek[ii].substring(0,3).replaceAll("Vie", "Vier").replaceAll("Mié", "Miér")
        weatherData.extendedForecast.spanish.days[i].icon = data.daypart[0].iconCodeExtend[dpi]
        weatherData.extendedForecast.spanish.days[i].condition = getCond(weatherData.extendedForecast.spanish.days[i].icon, "forecast", "spanish")
        if (data.dayOfWeek[ii] == today && new Date().getHours() >= 4) {
          weatherData.extendedForecast.spanish.days[i].low = ""
        } else {
          weatherData.extendedForecast.spanish.days[i].low = data.temperatureMin[ii]
        }
        weatherData.extendedForecast.spanish.days[i].high = data.temperatureMax[ii]
      }
    } catch (error) {
      console.error(error);
      
      weatherData.extendedForecast.spanish.locationName = systemSettings.mainCity.locationName
      weatherData.extendedForecast.spanish.noReport = true
    }
  }
  getExtended()
}
async function getTrafficData() {
  async function getTrafficReport() {
    try {
    var trafurl = "https://data.traffic.hereapi.com/v7/incidents?in=circle:" + systemSettings.traffic.lat + "," + systemSettings.traffic.lon + ";r=4000&locationReferencing=tmc&lang=en-US&type=construction,accident&apiKey=" + traf_key
    
    const data = await $.getJSON(trafurl)

    
      var spacer = {"LOW IMPACT":"                     ", "MEDIUM IMPACT":"                            ", "HIGH IMPACT":"                      "}
      weatherData.trafficReport.incidents = []
      weatherData.trafficReport.noReport = false
      weatherData.trafficReport.locationName = systemSettings.traffic.locationName
      var t = 0
      if (data.results.length > 0) {
        for (var i = 0; i < data.results.length; i++) {
          if (t < 6) {
            var trafficObj = {impact:"", desc:"", title:""}
            trafficObj.title = incidentType(data.results[i].incidentDetails.type) + parseStreetName(data.results[i].incidentDetails.description.value)
            trafficObj.impact = incidentImpact(data.results[i].incidentDetails.criticality)
            trafficObj.desc = spacer[incidentImpact(data.results[i].incidentDetails.criticality)] + data.results[i].incidentDetails.description.value
            if (parseStreetName(data.results[i].incidentDetails.description.value) != false) {
              weatherData.trafficReport.incidents.push(trafficObj)
              t++
            }
          } else {break}
        }
      } else {
        weatherData.trafficReport.incidents = []
        weatherData.trafficReport.noReport = true
        weatherData.trafficReport.locationName = systemSettings.traffic.locationName
      }
    } catch (error) {
      console.error(error)
      
      weatherData.trafficReport.incidents = []
      weatherData.trafficReport.noReport = true
      weatherData.trafficReport.locationName = systemSettings.traffic.locationName
    }
  }
  getTrafficReport()

  async function getTrafficFlow(routenum) {
    var flowObj = {routeIcon:"",from:"",to:"",speed:"",baseSpeed:"",travelTime:"",color:"",mph:""}
    try {
    var url = "https://router.hereapi.com/v8/routes?transportMode=car&origin=" + systemSettings.traffic.routes[routenum].from + "&destination=" + systemSettings.traffic.routes[routenum].to + "&return=summary,travelSummary,polyline&apiKey=" + traf_key
    
    const data = await $.getJSON(url)

      weatherData.trafficFlow.locationName = systemSettings.traffic.locationName
      weatherData.trafficFlow.noReport = false
      
      flowObj.from = systemSettings.traffic.routes[routenum].fromStreet
      flowObj.to = systemSettings.traffic.routes[routenum].toStreet
      flowObj.baseSpeed = Math.round(metStoMPH(data.routes[0].sections[0].summary.length/data.routes[0].sections[0].summary.baseDuration))
      flowObj.mph = Math.round(metStoMPH(data.routes[0].sections[0].summary.length/data.routes[0].sections[0].summary.duration))
      flowObj.speed = ((flowObj.mph >= flowObj.baseSpeed) ? "CLEAR" : metStoMPH(data.routes[0].sections[0].summary.length/data.routes[0].sections[0].summary.duration))
      flowObj.travelTime = Math.round(data.routes[0].sections[0].summary.duration/60)
      flowObj.color = ((flowObj.speed == "CLEAR") ? "GREEN" : (flowObj.speed <= 25) ? "RED" : (flowObj.mph >= 40) ? "GREEN" : "YELLOW")
      flowObj.routeIcon = "images/roadSigns/" + systemSettings.traffic.routes[routenum].routeIcon + ".png"
    } catch (error) {
      console.error(error)

      flowObj.from = systemSettings.traffic.routes[routenum].fromStreet
      flowObj.to = systemSettings.traffic.routes[routenum].toStreet
      flowObj.color = "NOREPORT"
      flowObj.routeIcon = "images/roadSigns/" + systemSettings.traffic.routes[routenum].routeIcon + ".png"
    }
    weatherData.trafficFlow.routes[routenum] = flowObj
  }

  weatherData.trafficFlow.routes = []
  for (var i = 0; i < systemSettings.traffic.routes.length; i++) {
    await getTrafficFlow(i)
  }
}
async function getTravelData() {
  async function getTravelMapData(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.travel.regionalMap.cities[citynum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    
    var tfObj = {tfData: [
      {noReport:true,locationName:"",temperature:"",icon:""},
      {noReport:true,locationName:"",temperature:"",icon:""},
    ]}

    const data = await $.getJSON(url);

    try {
      var validTime = data.validTimeLocal[0]
      //console.log(validTime)
      var hourOffset = getHourAtOffset(Number.parseInt(data.validTimeLocal[0].slice(-5, -2))) //(new Date(data.validTimeLocal[0]).getTimezoneOffset()/60)*100
      //if it is between 16:00 and 4:00 in the time zone of location
      var ii = hourOffset < 15 && hourOffset > 4 ? 0 : 1;
      var dpi = hourOffset < 15 && hourOffset > 4 ? 0 : 2;
      
      for (var i = 0; i < tfObj.tfData.length; i++, ii++, dpi = dpi + 2) {
        tfObj.tfData[i].noReport = false
        weatherData.travelForecast.dayName[i] = ((weatherData.travelForecast.dayName[i] == "null") ? data.dayOfWeek[ii] : weatherData.travelForecast.dayName[i])
        tfObj.tfData[i].locationName = systemSettings.travel.regionalMap.cities[citynum].locationName
        tfObj.tfData[i].temperature = data.temperatureMax[ii]
        tfObj.tfData[i].icon = data.daypart[0].iconCodeExtend[dpi]
      }
    } catch (error) {
      console.error(error)

      for (var i = 0; i < tfObj.tfData.length; i++) {
        tfObj.tfData[i].noReport = true
      }
    }
    weatherData.travelForecast.cities[citynum] = tfObj
  }
  weatherData.travelForecast.cities = []
  for (var i = 0; i < systemSettings.travel.regionalMap.cities.length; i++) {
    await getTravelMapData(i)
  }
  async function getDestinationData(){
    var url = "https://api.weather.com/v3/aggcommon/v3-wx-forecast-daily-5day?geocodes="
    for (let i = 0; i < systemSettings.travel.destinationForecast.length; i++) {
      url = url + `${systemSettings.travel.destinationForecast[i].header};`;
    }
    url += "&language=en-US&units=e&format=json&apiKey=" + api_key;
    weatherData.destinationForecast.cities = [];
    weatherData.destinationForecast.dayName = ["null","null","null"];

    const data = await $.getJSON(url)

    try {
      data.forEach((ajaxedLoc, i) => {
        var today = longWeekDays[new Date().getDay()]
        var hourOffset = false;
        if (data[0]["v3-wx-forecast-daily-5day"].daypart[0].daypartName[0] == null) {
          hourOffset = true;
        }
        var ii = hourOffset ? 1 : 0;
        var dpi = hourOffset ? 2 : 0;
        var dfObj = {noReport:true, locationName:"",days:[{high:"",low:"",icon:""},{high:"",low:"",icon:""},{high:"",low:"",icon:""}]}
        try {
          dfObj.noReport = false;
          dfObj.locationName = systemSettings.travel.destinationForecast[i].locationName;
          for (var ji = 0; ji < dfObj.days.length; ji++, ii++, dpi = dpi + 2) {
            weatherData.destinationForecast.dayName[ji] = ((weatherData.destinationForecast.dayName[ji] == "null") ? ajaxedLoc["v3-wx-forecast-daily-5day"].dayOfWeek[ii].substring(0,3) : weatherData.destinationForecast.dayName[ji])
            if(weatherData.destinationForecast.dayName[ji] != ajaxedLoc["v3-wx-forecast-daily-5day"].dayOfWeek[ii].substring(0,3)){
              ji--;
              continue;
            }
            dfObj.days[ji].high = ajaxedLoc["v3-wx-forecast-daily-5day"].temperatureMax[ii]
            if (ajaxedLoc["v3-wx-forecast-daily-5day"].dayOfWeek[ii] == today/* && new Date().getHours() >= 4*/) {
              dfObj.days[ji].low = ""
            } else {
              dfObj.days[ji].low = ajaxedLoc["v3-wx-forecast-daily-5day"].temperatureMin[ii]
            }
            dfObj.days[ji].icon = ajaxedLoc["v3-wx-forecast-daily-5day"].daypart[0].iconCodeExtend[dpi]
          }
        } catch (error) {
          dfObj.noReport = true;
          dfObj.locationName = systemSettings.travel.destinationForecast[i].locationName;
        }
        weatherData.destinationForecast.cities.push(dfObj);
      })
    } catch (error) {
      console.error(error)

      weatherData.destinationForecast.cities.push(
        {noReport:true, locationName:"",days:[{high:"",low:"",icon:""},{high:"",low:"",icon:""},{high:"",low:"",icon:""}]}
      )
    }
  }
  getDestinationData();
}
function getHealthData() {
  async function getOdActivityData() {
    try {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.health.lat + "," + systemSettings.health.lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    
    const data = await $.getJSON(url)
    
      var today = longWeekDays[new Date().getDay()] 
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }
      weatherData.outdoorActivity.noReport = false
      weatherData.outdoorActivity.locationName = systemSettings.health.locationName
      weatherData.outdoorActivity.dayName = data.dayOfWeek[ii]
      weatherData.outdoorActivity.icon = data.daypart[0].iconCodeExtend[dpi]
      weatherData.outdoorActivity.high = data.temperatureMax[ii]
      //WIND CHILLL / HEAT INDEX
      weatherData.outdoorActivity.low = ((data.dayOfWeek[ii] == today) ? "none" : data.temperatureMin[ii])
      weatherData.outdoorActivity.feelsLike = ((data.daypart[0].temperature[dpi] > 65) ? "Heat Index   " + data.daypart[0].temperatureHeatIndex[dpi] : "Wind Chill   " + data.daypart[0].temperatureWindChill[dpi])
      weatherData.outdoorActivity.feelsLikeNum = ((data.daypart[0].temperature[dpi] > 65) ? data.daypart[0].temperatureHeatIndex[dpi] : data.daypart[0].temperatureWindChill[dpi])
      weatherData.outdoorActivity.precipChance = data.daypart[0].precipChance[dpi] + "%"
      weatherData.outdoorActivity.humidity = data.daypart[0].relativeHumidity[dpi] + "%"
      weatherData.outdoorActivity.wind =  ((data.daypart[0].windDirectionCardinal[dpi] == "CALM" || data.daypart[0].windSpeed[dpi] == 0) ? "Calm" : data.daypart[0].windDirectionCardinal[dpi] + " " + data.daypart[0].windSpeed[dpi])
    } catch (error) {
      console.error(error)
      
      weatherData.outdoorActivity.noReport = true
      weatherData.outdoorActivity.locationName = systemSettings.health.locationName
    }
  }
  getOdActivityData()
  async function getPollenData() {
    var url = "https://api.weather.com/v1/geocode/" + systemSettings.health.lat + "/" + systemSettings.health.lon + "/observations/pollen.json?language=en-US&apiKey=" + api_key
    
    const data = await $.getJSON(url)

    try {
      if (data.pollenobservations !== undefined) {
        if (data.pollenobservations[0].stn_cmnt_cd != "A" && data.pollenobservations[0].stn_cmnt_cd != "B" && data.pollenobservations[0].stn_cmnt_cd != "C" && data.pollenobservations[0].stn_cmnt_cd != "D") {
          weatherData.pollen.noReport = false
          weatherData.pollen.locationName = ((systemSettings.health.locationName == "") ? data.pollenobservations[0].loc_nm : systemSettings.health.locationName) 
          weatherData.pollen.date = dateFns.format(new Date(data.pollenobservations[0].rpt_dt), "MMM d")
          weatherData.pollen.pollenCount = ((data.pollenobservations[0].total_pollen_cnt == null) ? "" : data.pollenobservations[0].total_pollen_cnt)
          weatherData.pollen.pollenCountCategory = data.pollenobservations[0].total_pollen_desc
          weatherData.pollen.indices[0] = ((data.pollenobservations[0].pollenobservation[0].pollen_idx == 9) ? 0 : data.pollenobservations[0].pollenobservation[0].pollen_idx)
          weatherData.pollen.indices[1] = ((data.pollenobservations[0].pollenobservation[1].pollen_idx == 9) ? 0 : data.pollenobservations[0].pollenobservation[1].pollen_idx)
          weatherData.pollen.indices[2] = ((data.pollenobservations[0].pollenobservation[2].pollen_idx == 9) ? 0 : data.pollenobservations[0].pollenobservation[2].pollen_idx)
          weatherData.pollen.indices[3] = ((data.pollenobservations[0].pollenobservation[3].pollen_idx == 9) ? 0 : data.pollenobservations[0].pollenobservation[3].pollen_idx)
          weatherData.pollen.treeType = ((data.pollenobservations[0].treenames[0].tree_nm != "No Report") ? toSentenceCase(data.pollenobservations[0].treenames[0].tree_nm) : "")
        } else {
          weatherData.pollen.noReport = true
          weatherData.pollen.locationName = ""
        }
      } else {
        weatherData.pollen.noReport = true
        weatherData.pollen.locationName = ""
      }
    } catch (error) {
      console.error(error)

      weatherData.pollen.noReport = true
      weatherData.pollen.locationName = ""
    }
  }
  getPollenData()
  async function getAchesPains() {
    var achesurl = "https://api.weather.com/v2/indices/achePain/daypart/3day?geocode=" + systemSettings.health.lat + "," + systemSettings.health.lon + "&language=en-US&format=json&apiKey=" + api_key

    const achesdata = await $.getJSON(achesurl)

    try {
      var ii = 0
      if (achesdata.achesPainsIndex12hour.dayInd[0] == "N") {
        ii = 1
      }
      weatherData.achesBreathe.locationName = systemSettings.health.locationName
      weatherData.achesBreathe.dayName = dateFns.format(new Date(achesdata.achesPainsIndex12hour.fcstValidLocal[ii]), "dddd")
      weatherData.achesBreathe.achesIndex = achesdata.achesPainsIndex12hour.achesPainsIndex[ii]
      weatherData.achesBreathe.achesWord = achesdata.achesPainsIndex12hour.achesPainsCategory[ii]
    } catch (error) {
      console.error(error)
      
      weatherData.achesBreathe.achesIndex = "FAIL"
      weatherData.achesBreathe.locationName = systemSettings.health.locationName
    }

    var breathurl = "https://api.weather.com/v2/indices/breathing/daypart/3day?geocode=" + systemSettings.health.lat + "," + systemSettings.health.lon + "&language=en-US&format=json&apiKey=" + api_key

    const breathdata = await $.getJSON(breathurl)

    try {
      var ii = 0
      if (breathdata.breathingIndex12hour.dayInd[0] == "N") {
        ii = 1
      }
      weatherData.achesBreathe.breatheIndex = breathdata.breathingIndex12hour.breathingIndex[ii]
      weatherData.achesBreathe.breatheWord = breathdata.breathingIndex12hour.breathingCategory[ii]
      weatherData.achesBreathe.dayName = dateFns.format(new Date(breathdata.breathingIndex12hour.fcstValidLocal[ii]), "dddd")
    } catch (error) {
      console.error(error)
      
      weatherData.achesBreathe.breatheIndex = "FAIL"
      weatherData.achesBreathe.locationName = systemSettings.health.locationName
    }
  }
  getAchesPains()
  async function getAirQuality() {
    var url = "https://api.weather.com/v3/wx/globalAirQuality?geocode=" + systemSettings.health.lat + "," + systemSettings.health.lon + "&language=en-US&scale=EPA&format=json&apiKey=" + api_key
    
    const data = await $.getJSON(url)

    try {
      weatherData.airQuality.noReport = false
      weatherData.airQuality.locationName = systemSettings.health.locationName
      weatherData.airQuality.dayName = dateFns.format(new Date(data.globalairquality.expireTimeGmt * 1000), "dddd")
      weatherData.airQuality.index = Math.round(data.globalairquality.airQualityCategoryIndex/2)
      weatherData.airQuality.primaryPollutant = data.globalairquality.primaryPollutant.replace("CO","Ozone").replace("NO2","Ozone").replace("O3","Ozone").replace("PM10","Fine\nParticulates").replace("PM2.5","Fine\nParticulates").replace("SO2","Ozone")
    } catch (error) {
      console.error(error)

      weatherData.airQuality.noReport = true
      weatherData.airQuality.locationName = systemSettings.health.locationName
    }
  }
  getAirQuality()
  async function getUVData() {
    var currenturl = "https://api.weather.com/v3/wx/observations/current?icaoCode=" + systemSettings.health.icaoCode + "&units=e&language=en-US&format=json&apiKey=" + api_key

    const currentdata = await $.getJSON(currenturl)

    try {
      if (currentdata.uvIndex >= 0) {
        weatherData.uvIndex.locationName = systemSettings.health.locationName
        weatherData.uvIndex.current.noReport = false
        weatherData.uvIndex.current.index = ((currentdata.uvIndex > 10) ? 10 : currentdata.uvIndex)
        weatherData.uvIndex.current.word = currentdata.uvDescription
      } else {
        weatherData.uvIndex.current.noReport = true
      }
    } catch (error) {
      console.error(error)
      
      weatherData.uvIndex.current.noReport = true
    }

    var forecasturl = "https://api.weather.com/v2/indices/uv/hourly/48hour?geocode=" + systemSettings.health.lat + "," + systemSettings.health.lon + "&language=en-US&format=json&apiKey=" + api_key
    var currenthr = dateFns.getHours(new Date())

    const forecastdata = await $.getJSON(forecasturl)

    try {
      function timeTitleCreate(time){
        return (dateFns.format(time,'h a')).replace(" ", "").toLowerCase();
      }
      var targetHours
      switch (true) {
        case (currenthr < 6):
          targetHours = [9, 12, 15]; break
        case (currenthr < 9):
          targetHours = [12, 15, 18]; break
        case (currenthr < 12):
          targetHours = [15, 18, 9]; break
        case (currenthr < 15):
          targetHours = [18, 9, 12]; break
        case (currenthr < 18):
          targetHours = [9, 12, 15]; break
        default:
          targetHours = [9, 12, 15]
      }
      var ii = 0
      weatherData.uvIndex.forecast.noReport = false
      weatherData.uvIndex.locationName = systemSettings.health.locationName
      for (var i = 0; i < forecastdata.uvIndex1hour.fcstValidLocal.length; i++) {
        if (ii < 3) {
          var uvTime = dateFns.getHours(forecastdata.uvIndex1hour.fcstValidLocal[i])
          if (uvTime == targetHours[ii]) {
            if (forecastdata.uvIndex1hour.uvIndex[i] >= 0) {
              weatherData.uvIndex.forecast.times[ii].hour = timeTitleCreate(forecastdata.uvIndex1hour.fcstValidLocal[i])
              weatherData.uvIndex.forecast.times[ii].day = forecastdata.uvIndex1hour.dow[i].substring(0, 3)
              weatherData.uvIndex.forecast.times[ii].index = ((forecastdata.uvIndex1hour.uvIndex[i] > 10) ? 10 : forecastdata.uvIndex1hour.uvIndex[i])
              weatherData.uvIndex.forecast.times[ii].word = forecastdata.uvIndex1hour.uvDesc[i]
              ii++
            } else {
              weatherData.uvIndex.forecast.noReport = true
              break
            }
          }
        } else {
          break
        }
      }
    } catch (error) {
      console.error(error)

      weatherData.uvIndex.forecast.noReport = true
    }
  }
  getUVData()
}
async function getAirporData() {
  async function grabAirportDelays() {
    weatherData.airportDelayList = []//https://nasstatus.faa.gov/api/airport-events

    var url = "/airports"

    const eventdata = await $.getJSON(url)

    try {
      for (const airportevent of eventdata) {
        var delay = {iataCode:"", arrivalDelay:0, arrivalDelayReason:"", departureDelay:0, departureDelayReason:"",closed:false}
        delay.iataCode = airportevent.airportId
        if (airportevent.groundStop != null) {
          if (delay.closed == false) {
            delay.departureDelay = ((differenceUTC(airportevent.groundStop.endTime) > delay.departureDelay) ? differenceUTC(airportevent.groundStop.endTime) : delay.departureDelay)
            delay.departureDelayReason = ((delay.departureDelayReason == "") ? airportevent.groundStop.impactingCondition: delay.departureDelayReason + ", " + airportevent.groundStop.impactingCondition)
          }
        }
        if (airportevent.groundDelay != null) {
          if (delay.closed == false) {
            delay.departureDelay = ((airportevent.groundDelay.avgDelay > delay.departureDelay) ? airportevent.groundDelay.avgDelay : delay.departureDelay)
            delay.departureDelayReason = ((delay.departureDelayReason == "") ? airportevent.groundDelay.impactingCondition: delay.departureDelayReason + ", " + airportevent.groundDelay.impactingCondition)
          }
        }
        if (airportevent.airportClosure != null) {
          delay.closed = true
          delay.departureDelay = "Closed"
          delay.departureDelayReason = ""
        }
        if (airportevent.arrivalDelay != null) {
          delay.arrivalDelay = ((airportevent.arrivalDelay.averageDelay > delay.arrivalDelay) ? airportevent.arrivalDelay.averageDelay : delay.arrivalDelay)
        }
        if (airportevent.departureDelay != null) {
          if (delay.closed == false) {
            delay.departureDelay = ((airportevent.departureDelay.averageDelay > delay.departureDelay) ? airportevent.departureDelay.averageDelay : delay.departureDelay)
          }
        }
        /*if (airportevent.deicing != null) {
          delay.arrivalDelay = ((differenceUTC(airportevent.deicing.expTime) > delay.arrivalDelay) ? differenceUTC(airportevent.deicing.expTime) : delay.arrivalDelay)
          delay.arrivalDelayReason = ((delay.arrivalDelayReason == "") ? "Deicing" : delay.arrivalDelayReason + ", " + "Deicing")
          if (delay.closed == false) {
            delay.departureDelay = ((differenceUTC(airportevent.deicing.expTime) > delay.departureDelay) ? differenceUTC(airportevent.deicing.expTime) : delay.departureDelay)
            delay.departureDelayReason = ((delay.departureDelayReason == "") ? "Deicing" : delay.departureDelayReason + ", " + "Deicing")
          }
        }*/
        weatherData.airportDelayList.push(delay)
      }
      for (var i = 0; i < weatherData.airportDelayList.length; i++) {
        if (weatherData.airportDelayList[i].arrivalDelay != "Closed") {
          if (weatherData.airportDelayList[i].arrivalDelay != 0) {
            weatherData.airportDelayList[i].arrivalDelay = weatherData.airportDelayList[i].arrivalDelay
            weatherData.airportDelayList[i].arrivalDelay = formatMinutes(weatherData.airportDelayList[i].arrivalDelay)
            var ogATime = weatherData.airportDelayList[i].arrivalDelay
            weatherData.airportDelayList[i].arrivalDelay = "<em>" + ogATime.replaceAll(" hr ", "</em> hr <em>").replaceAll(" min", "</em> min").replaceAll(" hrONLYH", "</em> hr")
          } else {
            weatherData.airportDelayList[i].arrivalDelay = "No Delay"
          }
        }
        if (weatherData.airportDelayList[i].departureDelay != "Closed") {
          if (weatherData.airportDelayList[i].departureDelay != 0) {
            weatherData.airportDelayList[i].departureDelay = weatherData.airportDelayList[i].departureDelay
            weatherData.airportDelayList[i].departureDelay = formatMinutes(weatherData.airportDelayList[i].departureDelay)
            var ogDTime = weatherData.airportDelayList[i].departureDelay
            weatherData.airportDelayList[i].departureDelay = "<em>" + ogDTime.replaceAll(" hr ", "</em> hr <em>").replaceAll(" min", "</em> min").replaceAll(" hrONLYH", "</em> hr")
          } else {
            weatherData.airportDelayList[i].departureDelay = "No Delay"
          }
        }
      }
    } catch (error) {
      console.error(error)

      for (var i = 0; i < systemSettings.airport.main.length; i++) {
        var delay = {iataCode:systemSettings.airport.main[i].iataCode, arrivalDelay:"No Report", arrivalDelayReason:"", departureDelay:"No Report", departureDelayReason:"",closed:false}
        weatherData.airportDelayList.push(delay)
      }
      for (var i = 0; i < systemSettings.airport.national.length; i++) {
        var delay = {iataCode:systemSettings.airport.national[i].iataCode, arrivalDelay:"", arrivalDelayReason:"", departureDelay:"", departureDelayReason:"",closed:false}
        weatherData.airportDelayList.push(delay)
      }
    }
  }
  grabAirportDelays()
  async function getLocalAirports(num) {
    var url = "https://api.weather.com/v3/wx/observations/current?iataCode=" + systemSettings.airport.main[num].iataCode + "&units=e&language=en-US&format=json&apiKey=" + api_key
    
    const data = await $.getJSON(url)
    
    try {
      var airportObj = {noReport:true,iataCode:"",airportName:"",arrivalDelay:"",arrivalDelayReason:"",departureDelay:"",departureDelayReason:"",icon:"",condition:"",temperature:""}
      airportObj.noReport = false
      airportObj.airportName = systemSettings.airport.main[num].airportName
      airportObj.iataCode = systemSettings.airport.main[num].iataCode
      airportObj.icon = data.iconCodeExtend
      airportObj.condition = getCond(data.iconCodeExtend, "current")
      airportObj.temperature = data.temperature
      for (const delay of weatherData.airportDelayList) {
        if (delay.iataCode == airportObj.iataCode) {
          airportObj.arrivalDelay = delay.arrivalDelay
          airportObj.arrivalDelayReason = delay.arrivalDelayReason
          airportObj.departureDelay = delay.departureDelay
          airportObj.departureDelayReason = delay.departureDelayReason
        }
      }
      if (airportObj.arrivalDelay == "") {
        airportObj.arrivalDelay = "No Delay"
      }
      if (airportObj.departureDelay == "") {
        airportObj.departureDelay = "No Delay"
      }
      weatherData.localAirportConditions.push(airportObj)
    } catch (error) {
      console.error(error)

      var airportObj = {noReport:true,iataCode:systemSettings.airport.main[num].iataCode,airportName:systemSettings.airport.main[num].airportName,arrivalDelay:"No Report",arrivalDelayReason:"",departureDelay:"No Report",departureDelayReason:"",icon:"",condition:"",temperature:""}
      weatherData.localAirportConditions.push(airportObj)
    }
  }
  weatherData.localAirportConditions = []

  for (let i = 0; i < systemSettings.airport.main.length; i++) {
      await getLocalAirports(i)
  }

  async function getNatAirports(num) {
    var url = "https://api.weather.com/v3/wx/observations/current?iataCode=" + systemSettings.airport.national[num].iataCode + "&units=e&language=en-US&format=json&apiKey=" + api_key

    const data = await $.getJSON(url)

    try {
      var airportObj = {noReport:true,iataCode:"",airportName:"",delay:"",delayReason:"",icon:"",temperature:""}
      airportObj.noReport = false
      airportObj.airportName = systemSettings.airport.national[num].airportName
      airportObj.iataCode = systemSettings.airport.national[num].iataCode
      airportObj.icon = data.iconCodeExtend
      airportObj.temperature = data.temperature
      for (const delay of weatherData.airportDelayList) {
        if (delay.iataCode == airportObj.iataCode) {
          airportObj.delay = delay.departureDelay
          airportObj.delayReason = delay.departureDelayReason
        }
      }
      if (airportObj.delay == "") {
        airportObj.delay = "No Delay"
      }

      weatherData.nationalAirportConditions[num] = airportObj
    } catch (error) {
      console.error(error)
      
      var airportObj = {noReport:true,iataCode:systemSettings.airport.national[num].iataCode,airportName:systemSettings.airport.national[num].airportName,delay:"",delayReason:"",icon:"",temperature:""}

      weatherData.nationalAirportConditions[num] = airportObj
    }
  }

  weatherData.nationalAirportConditions = []
  for (let i = 0; i < systemSettings.airport.national.length; i++) {
    await getNatAirports(i)
  }
}
async function getIntlData() {
  async function getIntlMapDataCA(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.canada[citynum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:"", dayName:""}
    
    const data = await $.getJSON(url)

    try {
      var hourOffset = getHourAtOffset(Number.parseInt(data.validTimeLocal[0].slice(-5, -2))) //(new Date(data.validTimeLocal[0]).getTimezoneOffset()/60)*100
      //if it is between 16:00 and 4:00 in the time zone of location
      var ii = hourOffset < 15 && hourOffset > 4 ? 0 : 1;
      var dpi = hourOffset < 15 && hourOffset > 4 ? 0 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.canada[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    } catch (error) {
      console.error(error)

      imObj.noReport = true
    }
    
    weatherData.internationalMap.canada[citynum] = imObj
  }

  weatherData.internationalMap.canada = []
  for (var i = 0; i < systemSettings.international.map.canada.length; i++) {
    await getIntlMapDataCA(i)
  }

  async function getIntlMapDataMX(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.mexico[citynum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:"", dayName:""}
    
    const data = await $.getJSON(url)

    try {
      var hourOffset = getHourAtOffset(Number.parseInt(data.validTimeLocal[0].slice(-5, -2))) //(new Date(data.validTimeLocal[0]).getTimezoneOffset()/60)*100
      //if it is between 16:00 and 4:00 in the time zone of location
      var ii = hourOffset < 16 && hourOffset > 4 ? 0 : 1;
      var dpi = hourOffset < 16 && hourOffset > 4 ? 0 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.mexico[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    } catch (error) {
      console.error(error)

      imObj.noReport = true
    }

    weatherData.internationalMap.mexico[citynum] = imObj
  }

  weatherData.internationalMap.mexico = []
  for (var i = 0; i < systemSettings.international.map.mexico.length; i++) {
    await getIntlMapDataMX(i)
  }

  async function getIntlMapDataCB(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.caribbean[citynum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:"", dayName:""}
    
    const data = await $.getJSON(url)

    try {
      var hourOffset = getHourAtOffset(Number.parseInt(data.validTimeLocal[0].slice(-5, -2))) //(new Date(data.validTimeLocal[0]).getTimezoneOffset()/60)*100
      //if it is between 16:00 and 4:00 in the time zone of location
      var ii = hourOffset < 16 && hourOffset > 4 ? 0 : 1;
      var dpi = hourOffset < 16 && hourOffset > 4 ? 0 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.caribbean[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    } catch (error) {
      console.error(error)
      
      imObj.noReport = true
    }
    
    weatherData.internationalMap.caribbean[citynum] = imObj
  }

  weatherData.internationalMap.caribbean = []
  for (var i = 0; i < systemSettings.international.map.caribbean.length; i++) {
    await getIntlMapDataCB(i)
  }

  async function getIntlMapDataSA(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.southamerica[citynum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:"", dayName:""}
    
    const data = await $.getJSON(url)

    try {
      var hourOffset = getHourAtOffset(Number.parseInt(data.validTimeLocal[0].slice(-5, -2))) //(new Date(data.validTimeLocal[0]).getTimezoneOffset()/60)*100
      //if it is between 16:00 and 4:00 in the time zone of location
      var ii = hourOffset < 16 && hourOffset > 4 ? 0 : 1;
      var dpi = hourOffset < 16 && hourOffset > 4 ? 0 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.southamerica[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    } catch (error) {
      console.error(error)
      
      imObj.noReport = true
    }
    
    weatherData.internationalMap.southamerica[citynum] = imObj
  }

  weatherData.internationalMap.southamerica = []
  for (var i = 0; i < systemSettings.international.map.southamerica.length; i++) {
    await getIntlMapDataSA(i)
  }

  async function getIntlMapDataGB(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.britain[citynum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:"", dayName:""}
    
    const data = await $.getJSON(url)

    try {
      var hourOffset = getHourAtOffset(Number.parseInt(data.validTimeLocal[0].slice(-5, -2))) //(new Date(data.validTimeLocal[0]).getTimezoneOffset()/60)*100
      //if it is between 16:00 and 4:00 in the time zone of location
      var ii = hourOffset < 16 && hourOffset > 4 ? 0 : 1;
      var dpi = hourOffset < 16 && hourOffset > 4 ? 0 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.britain[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    } catch (error) {
      console.error(error)

      imObj.noReport = true
    }
    
    weatherData.internationalMap.britain[citynum] = imObj
  }

  weatherData.internationalMap.britain = []
  for (var i = 0; i < systemSettings.international.map.britain.length; i++) {
    await getIntlMapDataGB(i)
  }

  async function getIntlMapDataEU(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.europe[citynum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:"", dayName:""}
    
    const data = await $.getJSON(url)

    try {
      var hourOffset = getHourAtOffset(Number.parseInt(data.validTimeLocal[0].slice(-5, -2))) //(new Date(data.validTimeLocal[0]).getTimezoneOffset()/60)*100
      //if it is between 16:00 and 4:00 in the time zone of location
      var ii = hourOffset < 16 && hourOffset > 4 ? 0 : 1;
      var dpi = hourOffset < 16 && hourOffset > 4 ? 0 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.europe[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    } catch (error) {
      console.error(error)
      
      imObj.noReport = true
    }
    weatherData.internationalMap.europe[citynum] = imObj
  }
  
  weatherData.internationalMap.europe = []
  for (var i = 0; i < systemSettings.international.map.europe.length; i++) {
    await getIntlMapDataEU(i)
  }

  async function getIntlMapDataAF(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.africa[citynum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:"", dayName:""}
    
    const data = await $.getJSON(url)

    try {
      var hourOffset = getHourAtOffset(Number.parseInt(data.validTimeLocal[0].slice(-5, -2))) //(new Date(data.validTimeLocal[0]).getTimezoneOffset()/60)*100
      //if it is between 16:00 and 4:00 in the time zone of location
      var ii = hourOffset < 16 && hourOffset > 4 ? 0 : 1;
      var dpi = hourOffset < 16 && hourOffset > 4 ? 0 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.africa[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    } catch (error) {
      console.error(error)
      
      imObj.noReport = true
    }

    weatherData.internationalMap.africa[citynum] = imObj
  }

  weatherData.internationalMap.africa = []
  for (var i = 0; i < systemSettings.international.map.africa.length; i++) {
    await getIntlMapDataAF(i)
  }

  async function getIntlMapDataIN(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.india[citynum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:"", dayName:""}
    
    const data = await $.getJSON(url)
    
    try {
      var hourOffset = getHourAtOffset(Number.parseInt(data.validTimeLocal[0].slice(-5, -2))) //(new Date(data.validTimeLocal[0]).getTimezoneOffset()/60)*100
      //if it is between 16:00 and 4:00 in the time zone of location
      var ii = hourOffset < 16 && hourOffset > 4 ? 0 : 1;
      var dpi = hourOffset < 16 && hourOffset > 4 ? 0 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.india[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    } catch (error) {
      console.error(error)
      
      imObj.noReport = true
    }

    weatherData.internationalMap.india[citynum] = imObj
  }

  weatherData.internationalMap.india = []
  for (var i = 0; i < systemSettings.international.map.india.length; i++) {
    await getIntlMapDataIN(i)
  }

  async function getIntlMapDataEA(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.eastasia[citynum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:"", dayName:""}
    
    const data = await $.getJSON(url)
    
    try {
      var hourOffset = getHourAtOffset(Number.parseInt(data.validTimeLocal[0].slice(-5, -2))) //(new Date(data.validTimeLocal[0]).getTimezoneOffset()/60)*100
      //if it is between 16:00 and 4:00 in the time zone of location
      var ii = hourOffset < 16 && hourOffset > 4 ? 0 : 1;
      var dpi = hourOffset < 16 && hourOffset > 4 ? 0 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.eastasia[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    } catch (error) {
      console.error(error)

      imObj.noReport = true
    }

    weatherData.internationalMap.eastasia[citynum] = imObj
  }

  weatherData.internationalMap.eastasia = []
  for (var i = 0; i < systemSettings.international.map.eastasia.length; i++) {
    await getIntlMapDataEA(i)
  }

  async function getIntlMapDataOC(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.oceania[citynum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:"", dayName:""}
    
    const data = await $.getJSON(url)

    try {
      var hourOffset = getHourAtOffset(Number.parseInt(data.validTimeLocal[0].slice(-5, -2))) //(new Date(data.validTimeLocal[0]).getTimezoneOffset()/60)*100
      //if it is between 16:00 and 4:00 in the time zone of location
      var ii = hourOffset < 16 && hourOffset > 4 ? 0 : 1;
      var dpi = hourOffset < 16 && hourOffset > 4 ? 0 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.oceania[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    } catch (error) {
      console.error(error)
      
      imObj.noReport = true
    }
    
    weatherData.internationalMap.oceania[citynum] = imObj
  }

  weatherData.internationalMap.oceania = []
  for (var i = 0; i < systemSettings.international.map.oceania.length; i++) {
    await getIntlMapDataOC(i)
  }

  async function getIntlMapDataAU(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.australia[citynum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:"", dayName:""}
    
    const data = await $.getJSON(url)

    try {
      var hourOffset = getHourAtOffset(Number.parseInt(data.validTimeLocal[0].slice(-5, -2))) //(new Date(data.validTimeLocal[0]).getTimezoneOffset()/60)*100
      //if it is between 16:00 and 4:00 in the time zone of location
      var ii = hourOffset < 16 && hourOffset > 4 ? 0 : 1;
      var dpi = hourOffset < 16 && hourOffset > 4 ? 0 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.australia[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    } catch (error) {
      console.error(error)

      imObj.noReport = true
    }

    weatherData.internationalMap.australia.push(imObj)
  }

  weatherData.internationalMap.australia = []
  for (var i = 0; i < systemSettings.international.map.australia.length; i++) {
    await getIntlMapDataAU(i)
  }

  async function getIntlForecastData(){
    var url = "https://api.weather.com/v3/aggcommon/v3-wx-forecast-daily-7day?geocodes="
    for (let i = 0; i < systemSettings.international.forecast.length; i++) {
      url = url + `${systemSettings.international.forecast[i].header};`;
    }
    url += "&language=en-US&units=e&format=json&apiKey=" + api_key;

    weatherData.internationalForecast.cities = []

    const data = await $.getJSON(url)

    try {
      data.forEach((ajaxedLoc, i) => {
        var ii = 1;
        var dpi = 2;
        var ifObj = {noReport:true, locationName:"",days:[{high:"",low:"",icon:""},{high:"",low:"",icon:""},{high:"",low:"",icon:""}]}
        try {
          ifObj.noReport = false;
          ifObj.locationName = systemSettings.international.forecast[i].locationName;
          for (var ji = 0; ji < ifObj.days.length; ji++, ii++, dpi = dpi + 2) {
            weatherData.internationalForecast.dayName[ji] = ((weatherData.internationalForecast.dayName[ji] == "null") ? ajaxedLoc["v3-wx-forecast-daily-7day"].dayOfWeek[ii].substring(0,3) : weatherData.internationalForecast.dayName[ji])
            if(weatherData.internationalForecast.dayName[ji] != ajaxedLoc["v3-wx-forecast-daily-7day"].dayOfWeek[ii].substring(0,3)){
              ji--;
              ii-=2;
              dpi-=4;
              continue;
            }
            ifObj.days[ji].high = ajaxedLoc["v3-wx-forecast-daily-7day"].temperatureMax[ii]
            ifObj.days[ji].low = ajaxedLoc["v3-wx-forecast-daily-7day"].temperatureMin[ii]
            ifObj.days[ji].icon = ajaxedLoc["v3-wx-forecast-daily-7day"].daypart[0].iconCodeExtend[dpi]
          }
        } catch (error) {
          console.error('went to error catcher', error);
          ifObj.noReport = true;
          ifObj.locationName = systemSettings.international.forecast[i].locationName;
        }
        weatherData.internationalForecast.cities[i] = ifObj;
      })
    } catch (error) {
      console.error(error)

      for (var i = 0; i < systemSettings.international.forecast.length; i++) {
        var ifObj = {noReport:true, locationName:"",days:[{high:"",low:"",icon:""},{high:"",low:"",icon:""},{high:"",low:"",icon:""}]}
        ifObj.noReport = true
        ifObj.locationName = systemSettings.international.forecast[i].locationName
        for (var ii = 0; ii < ifObj.days.length; i++) {
          ifObj.days[ii].high = ""
          ifObj.days[ii].low = ""
          ifObj.days[ii].icon = "blank"
        }
        weatherData.internationalForecast.cities[i] = ifObj;
      }
    }
  }

  getIntlForecastData()
}
async function getGolfData() {
  async function getTeeTimeData() {
    var url = "https://api.weather.com/v3/wx/forecast/hourly/2day?geocode=" + systemSettings.golf.teeTime.header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var currenthr = dateFns.getHours(new Date());
    
    const data = await $.getJSON(url)

    try {
      var targetHours
      function timeTitleCreate(time){
        var hour = dateFns.getHours(time);
        if (hour == 0) {
          return 'Midnight';
        } else if (hour == 12){
          return 'Noon';
        }
        return (dateFns.format(time,'h a')).replace(" ", "").toLowerCase();
      }
      switch (true) {
        case (currenthr < 6):
          targetHours = [6, 8, 10, 12, 14];
        case (currenthr < 8):
          targetHours = [8, 10, 12, 14, 16]; break;
        case (currenthr < 10):
          targetHours = [10, 12, 14, 16, 18]; break;
        case (currenthr < 12):
          targetHours = [12, 14, 16, 18, 20]; break;
        case (currenthr < 14):
          targetHours = [14, 16, 18, 20, 6]; break;
        case (currenthr < 16):
          targetHours = [16, 18, 20, 6, 8]; break;
        case (currenthr < 18):
          targetHours = [18, 20, 6, 8, 10]; break;
        case (currenthr < 20):
          targetHours = [20, 6, 8, 10, 12]; break;
        default:
          targetHours = [6, 8, 10, 12, 14];
      }
     var ii = 0
      weatherData.teeTime.locationName = systemSettings.golf.teeTime.locationName
      weatherData.teeTime.noReport = false
      for (var i = 0; i < data.validTimeLocal.length; i++) {
        if (ii < 5) {
          var dpTime = dateFns.getHours(data.validTimeLocal[i])
          if (dpTime == targetHours[ii]) {
            weatherData.teeTime.times[ii].time = timeTitleCreate(data.validTimeLocal[i])
            weatherData.teeTime.times[ii].icon = data.iconCodeExtend[i]
            weatherData.teeTime.times[ii].day = data.dayOfWeek[i].substring(0,3)
            weatherData.teeTime.times[ii].temperature = data.temperature[i]
            weatherData.teeTime.times[ii].wind = ((data.windDirectionCardinal[i] == "CALM" || data.windSpeed[i] == 0) ? "Calm" : data.windDirectionCardinal[i] + " " + data.windSpeed[i])
            ii++
          }
        } else {
          break
        }
      }
    } catch (error) {
      console.error(error)
      
      weatherData.teeTime.locationName = systemSettings.golf.teeTime.locationName
      weatherData.teeTime.noReport = true
    }
  }
  getTeeTimeData()
  async function getCourseData(coursenum) {
    var Furl = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.golf.courses[coursenum].header + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var today = longWeekDays[new Date().getDay()] 
    var golfObj = {noReport: true, locationName:"", days:[{day:"",icon:"",high:"",low:"",wind:"", index:"", indexName:""},{day:"",icon:"",high:"",low:"",wind:"", index:"", indexName:""},{day:"",icon:"",high:"",low:"",wind:"", index:"", indexName:""}]}
    
    const Fdata = await $.getJSON(Furl)

    try {
      golfObj.noReport = false
      golfObj.locationName = systemSettings.golf.courses[coursenum].courseName
      var ii = 0
      var dpi = 0
      if (Fdata.daypart[0].daypartName[0] == null) {
        ii = 1
        dpi = 2
      }
      for (var i = 0; i < golfObj.days.length; i++, ii++, dpi = dpi + 2) {
        golfObj.days[i].day = Fdata.dayOfWeek[ii]
        golfObj.days[i].high = Fdata.temperatureMax[ii]
        if (Fdata.dayOfWeek[ii] == today) {
          golfObj.days[i].low = ""
        } else {
          golfObj.days[i].low = Fdata.temperatureMin[ii]
        }
        golfObj.days[i].icon = Fdata.daypart[0].iconCodeExtend[dpi]
        golfObj.days[i].wind = ((Fdata.daypart[0].windDirectionCardinal[dpi] == "CALM" || Fdata.daypart[0].windSpeed[dpi] == 0) ? "Calm" : Fdata.daypart[0].windDirectionCardinal[dpi] + " " + Fdata.daypart[0].windSpeed[dpi])
      }
    } catch (error) {
      console.error(error)
      
      golfObj.noReport = true
      golfObj.locationName = systemSettings.golf.courses[coursenum].courseName
    }

    var Iurl = "https://api.weather.com/v2/indices/golf/daypart/15day?geocode=" + systemSettings.golf.courses[coursenum].header + "&language=en-US&format=json&apiKey=" + api_key
    
    const Idata = await $.getJSON(Iurl)

    try {
      var dpi = 0
      if (Idata.golfIndex12hour.dayInd[0] == "N") {
        dpi = 1
      }
      for (var i = 0; i < golfObj.days.length; i++, dpi = dpi + 2) {
        golfObj.days[i].index = Idata.golfIndex12hour.golfIndex[dpi]
        golfObj.days[i].indexName = ((Idata.golfIndex12hour.golfIndex[dpi] == 2 ) ? "Poor" : Idata.golfIndex12hour.golfCategory[dpi])
      }
    } catch (error) {
      console.error(error)
      
      for (var i = 0; i < golfObj.days.length; i++) {
        golfObj.days[i].index = "FAIL"
        golfObj.days[i].indexName = ""
      }
    }
    
    weatherData.courseForecast.push(golfObj)
  }

  weatherData.courseForecast = []
  for (var i = 0; i < systemSettings.golf.courses.length; i++) {
    await getCourseData(i)
  }
}
function getGardenData() {
  async function getGardeningInfo() {
    var Furl = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.garden.header + "&format=json&units=e&language=en-US&apiKey=" + api_key

    const Fdata = await $.getJSON(Furl)
    
    try {
      var today = longWeekDays[new Date().getDay()] 
      var ii = 0
      var dpi = 0
      if (Fdata.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }
      
      weatherData.gardeningIndex.noReport = false
      weatherData.gardeningIndex.locationName = systemSettings.garden.locationName
      weatherData.gardeningIndex.dayName = Fdata.dayOfWeek[ii]
      weatherData.gardeningIndex.icon = Fdata.daypart[0].iconCodeExtend[dpi]
      weatherData.gardeningIndex.high = Fdata.temperatureMax[ii]
      weatherData.gardeningIndex.low = ((Fdata.dayOfWeek[ii] == today) ? "none" : Fdata.temperatureMin[ii])
      weatherData.gardeningIndex.precipChance = Fdata.daypart[0].precipChance[dpi] + "%"
      weatherData.gardeningIndex.cloudCover = Fdata.daypart[0].cloudCover[dpi] + "%"
    } catch (error) {
      console.error(error)
      
      weatherData.gardeningIndex.noReport = true
      weatherData.gardeningIndex.locationName = systemSettings.health.locationName
    }
    
    var Wurl = "https://api.weather.com/v2/indices/wateringNeeds/daypart/5day?geocode=" + systemSettings.garden.header + "&language=en-US&format=json&apiKey=" + api_key
    
    const Wdata = await $.getJSON(Wurl)

    try {
      var widxWords = ["Low", "Low", "Low", "Low", "Moderate", "Moderate", "Moderate", "Moderate", "High", "High", "High"]//0 and 1 are all the way to left, 10 is all the way to right
      var dpi = 0
      if (Wdata.wateringNeedsIndex12hour.dayInd[0] == "N") {
        dpi = 1
      }
      weatherData.gardeningIndex.wateringIndex = Wdata.wateringNeedsIndex12hour.wateringNeedsIndex[dpi]
      weatherData.gardeningIndex.wateringIndexWord = widxWords[Wdata.wateringNeedsIndex12hour.wateringNeedsIndex[dpi]]
    } catch (error) {
      console.error(error)
      
      weatherData.gardeningIndex.wateringIndex = "FAIL"
      weatherData.gardeningIndex.wateringIndexWord = ""
    }
  }
  getGardeningInfo()
}
async function getSkiData() {
  async function getSkiReport(resortnum) {
    var url = "https://feeds.snocountry.net/getSnowReport.php?apiKey=SnoCountry.example&ids=" + systemSettings.ski.resorts[resortnum].resortId

    const data = await $.getJSON(url)

    try {
      var skiObj = {resortName:"", newSnow:"", baseSnowMin:"", baseSnowMax:"", surface:"", openPercent:"", timeReported:"", timeStamp:""}
      skiObj.resortName = systemSettings.ski.resorts[resortnum].displayName + ", " + systemSettings.ski.resorts[resortnum].state
      skiObj.newSnow = data.items[0].newSnowMin == "" ? "0\"" : data.items[0].newSnowMin + "\""
      skiObj.baseSnowMin = data.items[0].avgBaseDepthMin == "" ? "0 - " : data.items[0].avgBaseDepthMin + " - "
      skiObj.baseSnowMax = data.items[0].avgBaseDepthMax == "" ? "0\"" : data.items[0].avgBaseDepthMax + "\""
      skiObj.surface = data.items[0].primarySurfaceCondition == null ? "" : data.items[0].primarySurfaceCondition
      skiObj.openPercent = data.items[0].openDownHillTrails == "" ? "0 Trails" : data.items[0].openDownHillTrails == 1 ? "1 Trail" : data.items[0].openDownHillTrails + " Trails"
      skiObj.timeReported = getEpoch(data.items[0].reportDateTime)
      skiObj.timeStamp = makeTimetable(data.items[0].reportDateTime)
      weatherData.skiReport.resorts[resortnum] = skiObj
    } catch (error) {
      console.error(error)
      
      weatherData.skiReport.time = new Date().getHours() < 12 ? new Date().toLocaleDateString('en-US', { weekday: 'long' }) + " am" : new Date().toLocaleDateString('en-US', { weekday: 'long' }) + " pm"
      var skiObj = {resortName:systemSettings.ski.resorts[resortnum].displayName + ", " + systemSettings.ski.resorts[resortnum].state, newSnow:"", baseSnowMin:"No Report", baseSnowMax:"", surface:"", openPercent:"", timeReported:0, timeStamp:""}
      weatherData.skiReport.resorts.push[resortnum] = skiObj
    }
  }

  weatherData.skiReport.resorts = []
  for (var i = 0; i < systemSettings.ski.resorts.length; i++) {
    await getSkiReport(i)
  }
  
  weatherData.skiReport.resorts.sort((a, b) => a.timeReported-b.timeReported)
}
function getBeachData() {
  async function getSurfReport() {
    const data = await $.get('/surf/' + systemSettings.beach.surfReport.buoy.toLowerCase() + '.txt')

      try {
        var stringedData = data.replaceAll("Peak Period", "Peak WavePreiod").split(/\r?\n/)
      for (var i = 0; i < stringedData.length; i++) {
      }
      function getLineNo(arr, phrase, skipAmount) {
        var skipped = 0
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].includes(phrase)) {
            if (skipped == skipAmount) {
              return i
            } else {
              skipped++
            }
          }
        }
      }
      if (getLineNo(stringedData, "Wind:", 0) != undefined) {
        var cutWindSpeedStr = stringedData[getLineNo(stringedData, "Wind:", 0)].substring(stringedData[getLineNo(stringedData, "Wind:", 0)].indexOf(",")).replaceAll(", ", "").replaceAll(" kt", "")
        var cutWindDirStr = stringedData[getLineNo(stringedData, "Wind: ", 0)].substring(6)
        cutWindDirStr = cutWindDirStr.substring(0, cutWindDirStr.indexOf("("))
        if (cutWindDirStr == "CALM" || cutWindDirStr == "Calm" || Math.round(cutWindSpeedStr*1.151) == "0") {
          weatherData.surfReport.wind = "Calm"
        } else {
          cutWindSpeedStr = Math.round(cutWindSpeedStr*1.151) + " mph"
          weatherData.surfReport.wind = cutWindDirStr + cutWindSpeedStr
        }
      } else {
        weatherData.surfReport.wind  = ""
      }
      if (data.includes("Swell:") == true) {
        if (getLineNo(stringedData, "Period:", 1) != undefined) {
          var periodText = stringedData[getLineNo(stringedData, "Period:", 1)].substring(8).replaceAll(" sec", "")
          weatherData.surfReport.wavePeriod = Math.round(Number(periodText)) + " Seconds"
        } else {
          weatherData.surfReport.wavePeriod = ""
        }
      } else {
        if (getLineNo(stringedData, "Period:", 0) != undefined) {
          var periodText = stringedData[getLineNo(stringedData, "Period:", 0)].substring(8).replaceAll(" sec", "")
          weatherData.surfReport.wavePeriod = Math.round(Number(periodText)) + " Seconds"
        } else {
          weatherData.surfReport.wavePeriod = ""
        }
      }
      if (data.includes("Water Temp:")) {
        var tempText = stringedData[getLineNo(stringedData, "Water Temp:", 0)].substring(12).slice(0, -3).replaceAll(" °F", "")//
        weatherData.surfReport.waterTemperature = Math.round(Number(tempText))
      } else {
        weatherData.surfReport.waterTemperature = "FAIL"
      }
      if (data.includes("Wind Wave:")) {
        var waveText = stringedData[getLineNo(stringedData, "Wind Wave:", 0)].substring(11).replaceAll(" ft", "")
        weatherData.surfReport.waveHeight = Math.round(Number(waveText))
      } else {
        weatherData.surfReport.waveHeight = "NONE"
      }
      weatherData.surfReport.locationName = ((systemSettings.beach.surfReport.displayName != "") ? systemSettings.beach.surfReport.displayName : "DFLTNAME")
      weatherData.surfReport.noReport = false
      } catch (error) {
        console.error(error)

        weatherData.surfReport.noReport = true
      }
  }

  getSurfReport()
  
  async function coastForecast() {
    const data = await $.get('/coastalwaters/' + systemSettings.beach.coastalForecast.office)

    try {
      var id = data["@graph"][0].id;
      await cwfId(id);
    } catch (error) {
      console.error(error)
      
      weatherData.coastalForecast.noReport = true
    } 
  }
  async function cwfId(cwfid) {
    if (cwfid === undefined){
      console.error("coastal waters forecast id invalid")
      weatherData.coastalForecast.noReport = true
    } else {
      const data = await $.get(`/cwf/${cwfid}`)

      try {
        weatherData.coastalForecast.noReport = false
        var stringedData = data.productText.replaceAll(".SUNDAY", "X~Sunday").replaceAll(".MONDAY", "X~Monday").replaceAll(".TUESDAY", "X~Tuesday").replaceAll(".WEDNESDAY", "X~Wednesday").replaceAll(".THURSDAY", "X~Thursday").replaceAll(".FRIDAY", "X~Friday").replaceAll(".SATURDAY", "X~Saturday").replaceAll(".SUN", "X~Sunday").replaceAll(".MON", "X~Monday").replaceAll(".TUE", "X~Tuesday").replaceAll(".WED", "X~Wednesday").replaceAll(".THU", "X~Thursday").replaceAll(".FRI", "X~Friday").replaceAll(".SAT", "X~Saturday").replaceAll(".TODAY", "X~Today").replaceAll(".TONIGHT", "X~Tonight").replaceAll(".THIS AFTERNOON", "X~This afternoon").replaceAll(".REST OF TODAY", "X~Rest of Today").replaceAll(".REST OF TONIGHT", "X~Rest of Tonight").replaceAll(".THROUGH", "X~Through").replaceAll(".OVERNIGHT", "X~Overnight").split(/\r?\n/)
        for (var i = 0; i < stringedData.length; i++) {
          //console.log(stringedData[i])
        }
        function getLineNo(arr, phrase, skipAmount) {
          var skipped = 0
          for (var i = 0; i < arr.length; i++) {
            if (arr[i].includes(phrase)) {
              if (skipped == skipAmount) {
                return i
              } else {
                skipped++
              }
            }
          }
        }
        weatherData.coastalForecast.warnings = []
        var lineBump = getLineNo(stringedData, systemSettings.beach.coastalForecast.zone, 0)
        weatherData.coastalForecast.locationName = ((systemSettings.beach.coastalForecast.zoneName == "") ? stringedData[lineBump+1] : systemSettings.beach.coastalForecast.zoneName)
        var fcstBumper = 4
        function isTime(text) {if (text.includes("X~")) {return true} else {return false}}
        function isAlert(text) {if (text.substring(0, 2) == "...") {return true} else {return false}}
        for (var i = 0; i < stringedData.length-lineBump; i++) {
          var cline = stringedData[lineBump + fcstBumper]
          if (!isTime(cline)) {
            fcstBumper++
            weatherData.coastalForecast.warnings.push(cline +" ")
          } else {
            if (weatherData.coastalForecast.warnings.length > 0) {
              if (weatherData.coastalForecast.warnings[0].substring(0, 3) == "...") {
                weatherData.coastalForecast.warnings[0] = weatherData.coastalForecast.warnings[0].substring(3)
              } else {
                weatherData.coastalForecast.warnings[0] = weatherData.coastalForecast.warnings[0]
              }
            }
            break
          }
        }
        for (var i = 0; i < 3; i++) {
          var cline = ""
          for (var ii = 0; ii < stringedData.length-lineBump; ii++) {
            if (ii == 0) {
              cline = cline + stringedData[lineBump + fcstBumper + ii] + " "
            } else {
              if (!isTime(stringedData[lineBump + fcstBumper + ii])) {
                cline = cline + stringedData[lineBump + fcstBumper + ii] + " "
              } else {
                fcstBumper = fcstBumper + ii
                break
              }
            }
          }
          weatherData.coastalForecast.times[i].forecast = cline.replaceAll("X~", "<em>").replaceAll("...", "</em><br>")
        }
      } catch (error) {
        console.error(error)

        weatherData.coastalForecast.noReport = true
      }
    }
  }

  coastForecast()
  
  async function getTides(station) {
    var Turl = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=" + dateFns.format(new Date(),"yyyy") + dateFns.format(new Date(),"MM") + dateFns.format(new Date(),"dd") + "&end_date=" + dateFns.format((dateFns.addDays(new Date(), 4)),"yyyy") + dateFns.format((dateFns.addDays(new Date(), 4)),"MM") + dateFns.format((dateFns.addDays(new Date(), 4)),"dd") + "&station=" + systemSettings.beach.tides.stations[station].id + "&product=predictions&datum=MLLW&time_zone=lst_ldt&interval=hilo&units=english&application=DataAPI_Sample&format=json"
    
    const Tdata = await $.getJSON(Turl);

    try {
      var cdate = new Date()
      weatherData.tides.stations[station].noReport = false
      weatherData.tides.stations[station].stationName = systemSettings.beach.tides.stations[station].name
      var li = 0
      var hi = 0
      var index = 0
      var tdone = false
      while (tdone == false) {
        if (Tdata.predictions[index].type == "L") {
          if (new Date(Tdata.predictions[index].t) > cdate) {
            weatherData.tides.stations[station].low[li] = dateFns.format(new Date(Tdata.predictions[index].t), "h:mm a").toLowerCase() + " " + shortWeekDays[new Date(Tdata.predictions[index].t).getDay()]
            li++
          }
        } else if (Tdata.predictions[index].type == "H") {
          if (new Date(Tdata.predictions[index].t) > cdate) {
            weatherData.tides.stations[station].high[hi] = dateFns.format(new Date(Tdata.predictions[index].t), "h:mm a").toLowerCase() + " " + shortWeekDays[new Date(Tdata.predictions[index].t).getDay()]
            hi++
          }
        }
        index++
        if (li >= 2 && hi >= 2) {
          tdone = true
        }
      }
    } catch (error) {
      console.error(error)

      weatherData.tides.stations[station].noReport = true
      weatherData.tides.stations[station].stationName = systemSettings.beach.tides.stations[station].name
      weatherData.tides.stations[station].high[0] = ""
      weatherData.tides.stations[station].high[1] = ""
      weatherData.tides.stations[station].low[0] = ""
      weatherData.tides.stations[station].low[1] = ""
    }
  }

  for (var i = 0; i < systemSettings.beach.tides.stations.length; i++) {
    getTides(i)
  }

  async function getSunInfo() {
    var Surl = "https://api.weather.com/v3/wx/forecast/daily/5day?icaoCode=" + systemSettings.beach.tides.almanac.icaoCode + "&units=e&language=en-US&format=json&apiKey=" + api_key

    const Sdata = await $.getJSON(Surl);

    try {
      var cdate = new Date()
      weatherData.tides.almanacName = systemSettings.beach.tides.almanac.obsName
      var srid = 0
      var ssid = 0
      if (new Date(Sdata.sunriseTimeLocal[srid]) < cdate) {{
        srid = 1
      }}
      if (new Date(Sdata.sunsetTimeLocal[ssid]) < cdate) {{
        ssid = 1
      }}
      weatherData.tides.sunrise = dateFns.format(new Date(Sdata.sunriseTimeLocal[srid]),"h:mm a").toLowerCase() + " " + shortWeekDays[new Date(Sdata.sunriseTimeLocal[srid]).getDay()]
      weatherData.tides.sunset = dateFns.format(new Date(Sdata.sunsetTimeLocal[ssid]),"h:mm a").toLowerCase() + " " + shortWeekDays[new Date(Sdata.sunsetTimeLocal[ssid]).getDay()]
    } catch (error) {
      console.error(error)
      
      weatherData.tides.almanacName = systemSettings.beach.tides.almanac.obsName
      weatherData.tides.sunrise = ""
      weatherData.tides.sunset = ""
    }
  }
  getSunInfo();
}
async function allData() {
  if (systemSettings.packageSettings.includes("forecast") || systemSettings.packageSettings.includes("minicoreone") || systemSettings.packageSettings.includes("minicoretwo")) {
    await getCoreData()
  }
  if (systemSettings.packageSettings.includes("extralocal")) {
    for (var i = 0; i < systemSettings.extraCity.cities.length; i++) {
      await getExtraCore(i)
    }
  }
  if (systemSettings.packageSettings.includes("traffic")) {
    await getTrafficData()
  }
  if (systemSettings.packageSettings.includes("travel")) {
    await getTravelData()
  }
  if (systemSettings.packageSettings.includes("health")) {
    await getHealthData()
  }
  if (systemSettings.packageSettings.includes("airport")) {
    await getAirporData()
  }
  if (systemSettings.packageSettings.includes("international")) {
    await getIntlData()
  }
  if (systemSettings.packageSettings.includes("golf")) {
    await getGolfData()
  }
  if (systemSettings.packageSettings.includes("garden")) {
    await getGardenData()
  }
  if (systemSettings.packageSettings.includes("ski")) {
    await getSkiData()
  }
  if (systemSettings.packageSettings.includes("beach")) {
    await getBeachData()
  }
  if (systemSettings.packageSettings.includes("spanish")) {
    await getSpanishData()
  }
}
async function startPrograms() {
  try {
    await initializeRadars()//creates radar maps

    $(".radar-lbar .miniradar-shrink").css({"transform":"none"})
    $(".radar-lbar").fadeIn(0)
    miniradar.resize()
    miniEchoes.resize()
    miniradarAmenitiesTrans.resize()
    $(".radar-lbar .miniradar-shrink").css("transform","scaleY(0.83)")
  } catch (error) {
    console.error(error)
    lBarData.radarUnavailable = true
  }
  
  alignDataMaps()
  createMiniradarCities()
  
  initTravelForecast()
  await preloadRadars();//decides whether radars are unavailable

  slideKickOff()

  $('#startup').fadeOut(0);
}

setInterval(function () {
  var today = new Date();
  var date = today.toString().replace('01', '1').replace('02', '2').replace('03', '3').replace('04', '4').replace('05', '5').replace('06', '6').replace('07', '7').replace('08', '8').replace('09', '9').slice(4,10).trimRight() 
  var time = today.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric'}).replace(/ /g,' ').toLowerCase().replaceAll(" ", "")
  
  if (systemSettings.mainCity.timeZone != undefined) {
    date = today.toLocaleDateString('en-US', {month: 'short', 'day': 'numeric', timeZone: systemSettings.mainCity.timeZone});
    time = today.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric', timeZone: systemSettings.mainCity.timeZone}).replace(/ /g,' ').toLowerCase().replaceAll(" ", "")
  }

  $('#date-time').text(date + "\n" + time);
}, 1000);