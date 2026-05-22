var api_key = "";
var map_key = "";
var traf_key = "";
//locationIDs can be found at https://weather.codes/ . LocationIDs must be followed by "1:XX", with XX being the country code,
//usually the first two letters of the locationID
//EXAMPLE VALID LOCATIONID THAT WOULD WORK ON THE SIMULATOR: USNJ0355:1:US
//notice the "1:US"?
//if you want to use airport icao codes, you can put that in "locationID" as long as you fill in a lat lon.
//if there is no lat lon, you must use locationIDs
//do not input configuration data into config.js, it will be overwritten on startup. put it in configs/yourConfig.json
/*
var systemSettings = {
  apiKeys: {
    api_key: "e1f10a1e78da46f5b10a1e78da96f525",
    map_key: "pk.eyJ1Ijoid2VhdGhlciIsImEiOiJjbHAxbHNjdncwaDhvMmptcno1ZTdqNDJ0In0.iywE3NefjboFg11a11ON0Q",
    traf_key: ""
  },
  systemLocation: "",
  appearanceSettings: {
    nationalConfig: false,
    providerName: "Mist Digital Cable",
    iconSet: "2010",
    startupTime: 10000,
    crawlMode: "both",
    adMessage: ["network"],
    providerType: "provider",
    providerImage: "mistdc",
    adImages: [],
    version: "1.0",
    backgroundImage:"wxscan_default_bg_new",
    condensedCrawlFont: false,
    weatherReadyLogo: 1
  },
  audioSettings: {
    enableMusic: true,
    shuffle: false,
    randomStart: true,
    narrations: true,
    order: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
    cantoreNarrations: false,
  },
  severePackageSettings:["severe2"],
  packageSettings: ["forecast","health","traffic","travel", "airport","extralocal","minicoreone","garden","ski", "international"],
  LBar: {
    gradientDirection:"right",
    ccTicker:{
      autoFind: true,
      airports:[],
      cities:[],
      travelCities:[]
    },
    locations: {
      autoFind: true,
      maxCities: 1,
      type: "static",//static, extralocal, or rotate
      cities: [
        //{locationName:"", 
        // lat:"", 
        // lon:"", 
        // obsName:"", 
        // locationID:"",}
      ]
    },
    radar: {
      legend: false,
      lat: "",
      lon: "",
      auto: true,
      zoom: 6,
      radarCities: [
        { locationName: "", dotTopPos: "", dotLeftPos: "", nameTopMargin: "", nameLeftMargin: "" }
      ]
    }
  },
  dataMaps: {
    auto: true,
    lat:"",
    lon:"",
    zoom:5
  },
  mainCity: {
    autoFind:false,
            
    locationName:"",
    obsName:"",
    locationID:"",
    lat: "",
    lon: "",
            
    bulletinName:"",
    almanacLocationName:"",
    introBG:"city_bg",
    upNextBG:"city_bg",
    slidesBG:"core_bg",
    radar: {
      lat: "",
      lon: "",
      auto: true,
      zoom: 8,
      satCoords: [0, 0],
      radarCities: [
        { locationName: "", dotTopPos: "", dotLeftPos: "", nameTopMargin: "", nameLeftMargin: "" }
      ],
      radarIcons: [
        { type: "", text: "", topPos: "", leftPos: "" }
      ]
    }
  },
  extraCity: {
    autoFind: true,
    maxCities: 3,
    cities: [
       {
         locationName: "",
         obsName: "",
         lat: "",
         lon: "",
         locationID: "",
         bulletinName: "",
         upNextBG: "",
         slidesBG: "",
         radar: {
           lat: "", lon: "", auto: false, zoom: 8, satCoords: [0, 0],
           radarCities: [
             { locationName: "", dotTopPos: "", dotLeftPos: "", nameTopMargin: "-", nameLeftMargin: "" }
           ],
           radarIcons: [
             { type: "", text: "", topPos: "", leftPos: "" }
           ]
         }
       }
    ]
  },
  nearbyCities: {
    autoFind: true,
    cities: [
      {
        obsName: "",
        locationID: ""
      },
      {
        obsName: "",
        locationID: ""
      },
      {
        obsName: "",
        locationID: ""
      },
      {
        obsName: "",
        locationID: ""
      },
      {
        obsName: "",
        locationID: ""
      },
      {
        obsName: "",
        locationID: ""
      },
      {
        obsName: "",
        locationID: ""
      },
      {
        obsName: "",
        locationID: ""
      }
    ]
  },
  upperDisplayCity: {
    autoFind: true,
    enabled: true,
    locationName: "",
    lat: "",
    lon: "",
    airportName: "",
    obsIcaoCode: ""
  },
  traffic: {
    autoFind: true,
    locationName: "",
    lat: "",
    lon: "",
    mapIcons:{
      zoomOut:[
        {icon:"gardenStatePkwySign",topPos:"0",leftPos:"0"},
        {icon:"njTurnpikeSign",topPos:"0",leftPos:"0"}
      ],
      zoomIn:[
        {icon:"gardenStatePkwySign",topPos:"0",leftPos:"0"},
        {icon:"njTurnpikeSign",topPos:"0",leftPos:"0"}
      ]
    },
    zoomOut: 9.4,
    zoomIn: 8.6,
    routes: [
      { from: "", fromStreet: "", to: "", toStreet: "", routeIcon: "" },
      { from: "", fromStreet: "", to: "", toStreet: "", routeIcon: "" },
      { from: "", fromStreet: "", to: "", toStreet: "", routeIcon: "" }
    ]
  },
  travel: {
    regionalMap: {
      enabled: true,
      autoFind: true,
      mapTop: "",
      mapLeft: "",
      cities: [
        { locationName: "", locationID: "", topPos: "", leftPos: "" },
        { locationName: "", locationID: "", topPos: "", leftPos: "" },
        { locationName: "", locationID: "", topPos: "", leftPos: "" },
        { locationName: "", locationID: "", topPos: "", leftPos: "" },
        { locationName: "", locationID: "", topPos: "", leftPos: "" },
        { locationName: "", locationID: "", topPos: "", leftPos: "" },
        { locationName: "", locationID: "", topPos: "", leftPos: "" }
      ]
    },
    destinationForecast: [
      { locationName: "New York City", locationID: "USNY0998:1:US" },
      { locationName: "Chicago", locationID: "USIL0228:1:US" },
      { locationName: "Los Angeles", locationID: "USCA0090:1:US" },
      { locationName: "Atlanta", locationID: "USGA0028:1:US" },
      { locationName: "Dallas", locationID: "USTX0327:1:US" },
      { locationName: "Boston", locationID: "USMA0046:1:US" },
      { locationName: "Orlando", locationID: "USFL0372:1:US" },
      { locationName: "Washington, DC", locationID: "USDC0001:1:US" },
      { locationName: "San Francisco", locationID: "USCA0987:1:US" }
    ]
  },
  health: {
    autoFind: true,
    locationName: "",
    obsName: "",
    locationID: "",
    lat: "",
    lon: ""
  },
  airport: {
    autoFind: true,
    mainEnabled: true,
    main: [
      { airportName: "", iataCode: "" },
      { airportName: "", iataCode: "" }
    ],
    national: [
      { airportName: "New York / LaGuardia", iataCode: "LGA" },
      { airportName: "Chicago O'Hare Int'l", iataCode: "ORD" },
      { airportName: "Los Angeles Int'l", iataCode: "LAX" },
      { airportName: "Atlanta International", iataCode: "ATL" },
      { airportName: "Dallas / Ft. Worth Int'l", iataCode: "DFW" },
      { airportName: "Denver International", iataCode: "DEN" },
      { airportName: "Boston / Logan Int'l", iataCode: "BOS" },
      { airportName: "Salt Lake City Int'l", iataCode: "SLC" },
      { airportName: "Miami International", iataCode: "MIA" },
      { airportName: "Phoenix / Sky Harbor", iataCode: "PHX" },
      { airportName: "Minneapolis - St. Paul", iataCode: "MSP" },
      { airportName: "Washington Dulles Int'l", iataCode: "IAD" },
      { airportName: "San Francisco Int'l", iataCode: "SFO" },
      { airportName: "Philadelphia Int'l", iataCode: "PHL" },
      { airportName: "Seattle - Tacoma Int'l", iataCode: "SEA" },
      { airportName: "Lambert - St. Louis Int'l", iataCode: "STL" }
    ]
  },
  international: {
    map: {
    canada: [
      { locationName: "Dawson", locationID: "CAXX0109:1:CA" },
      { locationName: "  Yellowknife", locationID: "CAXX0557:1:CA" },
      { locationName: "Churchill", locationID: "CAXX0078:1:CA" },
      { locationName: "Churchill Falls", locationID: "CAXX0574:1:CA" },
      { locationName: "Vancouver", locationID: "CAXX0518:1:CA" },
      { locationName: "Edmonton", locationID: "CAXX0126:1:CA" },
      { locationName: "Winnipeg", locationID: "CAXX0547:1:CA" },
      { locationName: "Montreal", locationID: "CAXX0301:1:CA" }
    ],
    mexico: [
      { locationName: "Guaymas", locationID: "MXSR0019:1:MX" },
      { locationName: "Monterrey", locationID: "MXNL0068:1:MX" },
      { locationName: "La Paz", locationID: "MXMO0826:1:MX" },
      { locationName: "Mexico City", locationID: "MXDF0021:1:MX" },
      { locationName: "Cancun", locationID: "MXQR0112:1:MX" }
    ],
    caribbean: [
      { locationName: "Nassau", locationID: "BFXX0005:1:BF" },
      { locationName: "Cancun", locationID: "MXQR0112:1:MX" },
      { locationName: "Kingston", locationID: "JMXX0002:1:JM" },
      { locationName: "San Juan", locationID: "USPR0062:1:US" },
      { locationName: "Tegucigalpa", locationID: "HOXX0017:1:US" },
      { locationName: "Aruba", locationID: "AAXX0002:1:AA" }
    ],
    southamerica: [
      { locationName: "Manaus", locationID: "BRXX0717:1:BR" },
      { locationName: "Recife", locationID: "BRXX0554:1:BR" },
      { locationName: "Lima", locationID: "PEXX0003:1:PE" },
      { locationName: "Brasilia", locationID: "BRXX0043:1:BR" },
      { locationName: "Santiago", locationID: "CIXX3066:1:CI" },
      { locationName: "Buenos Aires", locationID: "ARXX1012:1:AR" }
    ],
    britain: [
      { locationName: "Edinburgh", locationID: "UKXX0800:1:UK" },
      { locationName: "Dublin", locationID: "EIXX0014:1:EI" },
      { locationName: "Manchester", locationID: "UKXX1382:1:UK" },
      { locationName: "Cork", locationID: "EIXX0011:1:EI" },
      { locationName: "London", locationID: "UKXX1822:1:UK" }
    ],
    europe: [
      { locationName: "London", locationID: "UKXX1822:1:UK" },
      { locationName: "Berlin", locationID: "GMXX2985:1:GM" },
      { locationName: "Moscow", locationID: "RSXX0065:1:RS" },
      { locationName: "Paris", locationID: "FRXX0007:1:FR" },
      { locationName: "Budapest", locationID: "HUXX0016:1:HU" },
      { locationName: "Madrid", locationID: "SPXX0005:1:SP" },
      { locationName: "Rome", locationID: "ITXX0021:1:IT" },
      { locationName: "Istanbul", locationID: "TUXX0024:1:TU" }
    ],
    africa: [
      { locationName: "Dakar", locationID: "SGXX0767L:1:SG" },
      { locationName: "Abuja", locationID: "NIXX0195:1:NI" },
      { locationName: "Cairo", locationID: "EGXX2875:1:EG" },
      { locationName: "Riyadh", locationID: "SAXX0018:1:SA" },
      { locationName: "Nairobi", locationID: "KEXX3769:1:KE" },
      { locationName: "Luanda", locationID: "AOXX0009:1:AO" },
      { locationName: "Maputo", locationID: "MZXX0003:1:MZ" }
    ],
    india: [
      { locationName: "Karachi", locationID: "PKXX2599:1:PK" },
      { locationName: "New Delhi", locationID: "INXX0096:1:IN" },
      { locationName: "Calcutta", locationID: "INXX0028:1:IN" },
      { locationName: "Bombay", locationID: "INXX0087:1:IN" },
      { locationName: "Madras", locationID: "INXX0202:1:IN" },
      { locationName: "Yangon", locationID: "BMXX0004:1:BM" }
    ],
    eastasia: [
      { locationName: "Beijing", locationID: "CHXX0012:1:CH" },
      { locationName: "Seoul", locationID: "KSXX6909:1:KS" },
      { locationName: "Tokyo", locationID: "JAXX0111:1:JA" },
      { locationName: "Chongqing", locationID: "CHXX1544:1:CH" },
      { locationName: "Shanghai", locationID: "CHXX1063:1:CH" },
      { locationName: "Guangzhou", locationID: "CHXX2259:1:CH" }
    ],
    oceania: [
      { locationName: "Singapore", locationID: "SNXX0149:1:SN" },
      { locationName: "Davao", locationID: "RPXX0830:1:RP" },
      { locationName: "Moresby", locationID: "PPXX6688:1:PP" },
      { locationName: "Suva/Fiji", locationID: "FJXX0093:1:FJ" },
      { locationName: "Alice Springs", locationID: "ASXX0002:1:AS" },
      { locationName: "Perth", locationID: "ASXX0089:1:AS" },
      { locationName: "Sydney", locationID: "ASXX0112:1:AS" }
    ],
    australia: [
      { locationName: "Port Hedland", locationID: "ASXX0092:1:AS" },
      { locationName: "Townsville", locationID: "ASXX6680:1:AS" },
      { locationName: "Alice Springs", locationID: "ASXX0002:1:AS" },
      { locationName: "Sydney", locationID: "ASXX0112:1:AS" },
      { locationName: "Bunbury", locationID: "ASXX0228:1:AS" },
      { locationName: "Melbourne", locationID: "ASXX1157:1:US" }
    ]
  },
  forecast: [
    { locationName: "Toronto", locationID: "CAXX0504:1:CA" },
    { locationName: "London", locationID: "UKXX1822:1:UK" },
    { locationName: "Paris", locationID: "FRXX0007:1:FR" },
    { locationName: "Cancun", locationID: "MXQR0112:1:MX" },
    { locationName: "Tokyo", locationID: "JAXX0111:1:JA" },
    { locationName: "Sydney", locationID: "ASXX0112:1:AS" },
    { locationName: "Rome", locationID: "ITXX0021:1:IT" },
    { locationName: "Vancouver", locationID: "CAXX0518:1:CA" },
    { locationName: "Hong Kong", locationID: "HKXX0049:1:HK" },
    { locationName: "Nassau", locationID: "BFXX0005:1:BF" },
    { locationName: "Amsterdam", locationID: "NLXX0313:1:NL" },
    { locationName: "Buenos Aires", locationID: "ARXX1012:1:AR" }
  ]
  },
  golf: {
    autoFind: true,
    teeTime: {
      locationName: "",
      locationID: ""
    },
    indexMap: [
      //  { locationName: "", locationID: "", topPos: "", leftPos: "" },
    ],
    courses: []
  },
  garden: {
    autoFind: true,
    locationName: "",
    locationID: ""
  },
  ski: {
    resorts: [
      { displayName: "Snowshow Mountain", state: "WV", resortId: "304001" },
      { displayName: "Baker Mountain", state: "ME", resortId: "207024" },
      { displayName: "Bolton Valley Resort", state: "VT", resortId: "802002" },
      { displayName: "Berkshire East Ski Resort", state: "MA", resortId: "413001" },
      { displayName: "Bear Creek Ski Resort", state: "PA", resortId: "215003" },
      { displayName: "Arrowhead Ski Area", state: "NH", resortId: "603031" },
      { displayName: "Big Bear Mtn. Resort", state: "CA", resortId: "909002" },
      { displayName: "Arapahoe Basin", state: "CO", resortId: "303001" },
      { displayName: "Beaver Mountain", state: "UT", resortId: "801002" },
      { displayName: "Bristol Mountain", state: "NY", resortId: "716001" },
      { displayName: "Grand Targhee Resort", state: "WY", resortId: "307002" },
      { displayName: "Aspen Highlands", state: "CO", resortId: "303004" }
      //find ski resorts at https://feeds.snocountry.net/
    ]
  },
  beach: {
    surfReport: {
      buoy: "",
      displayName: ""
    },
    coastalForecast: {
      office: "",
      zone: "",
      zoneName: ""
    },
    tides: {
      stations: [
        { id: "", name: "" },
        { id: "", name: "" }
      ],
      almanac: {
        obsName:"",
        locationID:""
      }
    }
  }
}
*/
var systemSettings = {}

var slideSettings = {
  order: [
    {slideLineup: [
    ]},
    {slideLineup: [
      //{group: "severeA", slides: []},
      //{group: "severeB", slides: []}
    ]},
  ],
};
var LBarSlideSettings = []
var fcstBarSlideSettings = []
var introPackage = {duration: 10000,
  group: "intro", slides: [
    {duration: 10000, function: "cityIntro" },
  ]
}
var severePackageA = {duration: 120000, group: "severeA", slides: []}
var severePackageB = {duration: 60000, group: "severeB", slides: []}
var severePackageTwo = {duration: 60000, group: "severe2", slides: []}
var forecastPackage = {duration: 120000, 
  group: "forecast", slides: [
    {duration: 10000,  function: "cityIntro" },
    //{duration: 8000,  function: "bulletin" },
    {duration: 12000,  function: "currentConditions" },
    {duration: 16000,  function: "nearbyCities" },
    {duration: 16000,  function: "radarChooser" },
    {duration: 42000,  function: "localForecast" },
    {duration: 14000,  function: "extendedForecast" },
    {duration: 10000,  function: "almanac" },
  ]
}
var miniPackageOne = {duration: 60000, 
  group: "minicoreone", slides: [
    //{duration: 8000,  function: "bulletin" },
    {duration: 14000,  function: "currentConditions" },
    {duration: 16000,  function: "radarChooser"},
    {duration: 14000,  function: "dayPart" },
    {duration: 16000,  function: "extendedForecast" },
  ]
}
var miniPackageTwo = {duration: 60000, 
  group: "minicoretwo", slides: [
    //{duration: 10000,  function: "bulletin" },
    {duration: 10000,  function: "currentConditions" },
    {duration: 15000,  function: "radarChooser" },
    {duration: 10000,  function: "localForecast" },
  ]
}
var radarPackage = {duration: 60000, group: "radar", slides: [
  {duration: 60000,  function: "dopplerRadar" },
]}
var eBaseLU = [
  //{duration: 10000,  function: "bulletin" },
  {duration: 14000,  function: "currentConditions" },
  {duration: 16000,  function: "radarChooser" },
  {duration: 14000,  function: "dayPart" },
  {duration: 16000,  function: "extendedForecast" },
  {function: "changeELoc" },
]
var extraPackage = {duration: 60000 /*times amount of cities*/, 
  group: "extralocal", slides: [
  ]
}
var spanishPackage = {duration: 60000, group: "spanish", slides: [
  {duration: 10000,  function: "currentConditions" },
  {duration: 15000,  function: "radarChooser" },
  {duration: 10000,  function: "dayPart" },
  {duration: 10000,  function: "extendedForecast" },
]}
var trafficPackage = {duration: 60000, group: "traffic", slides: [
  {duration: 5000,  function: "trafficIntro" },
  {duration: 10000,  function: "trafficOverview" },
  {duration: 10000,  function: "trafficReport" },
  {duration: 10000, function: "trafficFlow"}
]}
var travelPackage = {duration: 60000, group: "travel", slides: [
  {duration: 5000,  function: "travelIntro" },
  {duration: 10000,  function: "travelWeather" },
  {duration: 10000,  function: "travelForecast" },
  {duration: 10000,  function: "destinationForecast" },
]}
var airportPackage = {duration: 60000, group: "airport", slides: [
  {duration: 5000,  function: "airportIntro" },
  {duration: 10000,  function: "airportConditions" },
  {duration: 10000,  function: "nationalAirports" },
]}
var internationalPackage = {duration: 60000, group: "international", slides: [
  {duration: 5000,  function: "internationalIntro" },
  {duration: 10000,  function: "internationalMap" },
  {duration: 10000,  function: "internationalForecast" },
]}
var golfPackage  = {duration: 60000, group: "golf", slides: [
  {duration: 5000,  function: "golfIntro" },
  {duration: 10000,  function: "teeTime" },
  {duration: 10000,  function: "golfIndex" },
  {duration: 10000,  function: "courseForecast" },
  {duration: 5000,  function: "golfPromo" },
]}
var healthPackage = {duration: 60000, group: "health", slides: [
  {duration: 5000,  function: "healthIntro" },
  {duration: 10000,  function: "outdoorActivity" },
  {duration: 10000,  function: "allergyReport" },
  {duration: 10000,  function: "healthForecast" },
  {duration: 10000,  function: "airQuality" },
  {duration: 10000,  function: "uvIndex" },
  {duration: 10000,  function: "healthTip" },
  {duration: 10000,  function: "healthTip" },
  {duration: 5000,  function: "healthPromo" },
]}
var gardenPackage = {duration: 60000, group: "garden", slides: [
  {duration: 5000,  function: "gardenIntro" },
  {duration: 10000,  function: "gardenForecast" },
  {duration: 10000,  function: "estimatedPrecip" },
  {duration: 10000,  function: "precipForecast" },
  {duration: 10000,  function: "droughtMonitor" },
  //{duration: 10000,  function: "frostFreeze" },
  {duration: 5000,  function: "gardenPromo" },
]}
var skiPackage = {duration: 60000, group: "ski", slides: [
  {duration: 5000,  function: "skiIntro" },
  {duration: 10000,  function: "skiReport" },
  {duration: 10000,  function: "snowfallForecast" },
  {duration: 10000,  function: "skiTip" },
]}
var beachPackage = {duration: 60000, group: "beach", slides: [
  {duration: 5000,  function: "beachIntro" },
  {duration: 10000,  function: "surfReport" },
  {duration: 10000,  function: "waterTemps" },
  {duration: 10000,  function: "coastalForecast" },
  {duration: 10000,  function: "tides" },
]}
var slideDurations = {
  "cityIntro": 1000,
  "upNext":1000,
  "bulletin":1000,//* pages (??)
  "currentConditions":1000,
  "nearbyCities":1000,//* pages
  "radarChooser":1000,
  "dopplerRadar":1000,
  "radarSatellite":1000,
  "localForecast":1000,//* pages
  "extendedForecast":1000,
  "dayPart":1500,
  "almanac":1000,
  "trafficIntro":1000,
  "trafficOverview":1000,//* pages
  "trafficReport":1000,//* pages
  "trafficFlow":1000,//* pages
  "travelIntro":1000,
  "travelWeather":1000,
  "travelForecast":1000,//* pages
  "destinationForecast":1000,//* pages
  "airportIntro":1000,
  "airportConditions":1000,//* pages
  "nationalAirports":1000,//* pages
  "internationalIntro":1000,
  "internationalMap":1000,//* pages
  "internationalForecast":1000,//* pages
  "golfIntro":1000,
  "teeTime":1000,
  "golfIndex":1000,
  "courseForecast":2500,//* pages
  "golfPromo":1000,
  "healthIntro":1000,
  "outdoorActivity":1000,
  "allergyReport":2500,
  "healthForecast":2500,
  "airQuality":2500,
  "uvIndex":2500,
  "healthTip":1000,
  "healthPromo":1000,
  "gardenIntro":1000,
  "gardenForecast":2500,
  "estimatedPrecip":1000,
  "precipForecast":1000,
  "droughtMonitor":1000,
  "frostFreeze":1000,
  "gardenPromo":1000,
  "skiIntro":1000,
  "skiReport":1000,//* pages
  "snowfallforecast":1000,
  "skiTip":1000,
  "beachIntro":1000,
  "surfReport":2000,
  "waterTemps":1000,
  "coastalForecast":1000,//* pages
  "tides":1000,
  "severeMessage":1000
}