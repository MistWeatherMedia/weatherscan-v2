var crawlIndex = 0;
function adCrawl(crawlDuration, customCrawl, adIndex) {
    $(".normal-lowerarea").fadeIn(0)
    $(".normal-lowerarea .crawl").marquee('destroy')
    if(customCrawl == true && systemSettings.appearanceSettings.adImages[adIndex].adMessage != undefined){
        $(".normal-lowerarea .crawl span").text(systemSettings.appearanceSettings.adImages[adIndex].adMessage);
    }else{
        $(".normal-lowerarea .crawl span").text(systemSettings.appearanceSettings.adMessage[crawlIndex])
    }
    var crawlWidth = $(".normal-lowerarea .crawl span").width();
    var crawlTime = (1116 + crawlWidth)/189
    var repeat = Math.floor((crawlDuration/1000)/crawlTime)
    var crawlSpeed = (repeat * (1116 + crawlWidth))/((crawlDuration+175)/1000)
    //console.log("crawl info")
    //console.log("crawlWidth", crawlWidth, "speed",crawlSpeed, "repeat", repeat, "crawlTime",crawlTime, "time",crawlDuration)
  	$(".normal-lowerarea .crawl").marquee({speed: crawlSpeed, pauseOnHover: false, gap:0, direction: 'left', delayBeforeStart: 0})
    crawlIndex++
    if (crawlIndex >= systemSettings.appearanceSettings.adMessage.length) {crawlIndex = 0}
}
function redCrawl() {
    //header shadow
    $(".severe-lowerarea .header-background").css("background", "linear-gradient(90deg, rgba(163,43,30,255), rgba(134,35,25,255))")
    $(".severe-lowerarea .crawl-background").css("background","linear-gradient(90deg, rgba(60,15,11,255), rgba(134,35,25,255))")
    $(".severe-lowerarea .alertheader").css({"color":"rgba(229,229,229,255)","text-shadow":"#141414  2px 4px 1px"})
}
function orangeCrawl() {
    $(".severe-lowerarea .header-background").css("background", "linear-gradient(90deg, rgba(234,140,18,255), rgba(174,84,0,255))")
    $(".severe-lowerarea .crawl-background").css("background","linear-gradient(90deg, rgba(134,67,5,255), rgba(174,84,0,255))")
    $(".severe-lowerarea .alertheader").css({"color":"rgba(20,20,20,255)","text-shadow":"none"})
}
function yellowCrawl() {
    $(".severe-lowerarea .header-background").css("background", "linear-gradient(90deg, rgba(212,212,50,255), rgba(158,128,33,255))")
    $(".severe-lowerarea .crawl-background").css("background","linear-gradient(90deg, rgba(135,111,36,255), rgba(158,128,33,255))")
    $(".severe-lowerarea .alertheader").css({"color":"rgba(20,20,20,255)","text-shadow":"none"})
}
async function checkWarningCrawl() {
    await getCrawlAlerts();
    if (weatherData.crawlAlerts.warnings.length > 0) {
        const topWarning = weatherData.crawlAlerts.warnings[0];

        if ($(".severe-lowerarea .crawl").text() != topWarning.crawl) {
            $(".severe-lowerarea .crawl").marquee("destroy");
            $(".normal-lowerarea").fadeOut(0);
            $(".severe-lowerarea").fadeIn(0);

            // Handle colors
            switch (topWarning.color) {
                case "red":    redCrawl();    break;
                case "orange": orangeCrawl(); break;
                case "yellow": yellowCrawl(); break;
                default:       redCrawl();    break;
            }

            $(".severe-lowerarea .alertheader").text(topWarning.event + topWarning.type);

            if (topWarning.severe == true) {
                audioPlayer.playWarningBeep();
            }

            // Set the text and restart marquee
            $(".severe-lowerarea .crawl").text(topWarning.crawl);
            $(".severe-lowerarea .crawl").marquee({
                speed: 189, 
                pauseOnHover: false, 
                delayBeforeStart: 400
            });

            $(".severe-lowerarea .crawl").on("finished", () => {
                if (topWarning.severe == true) {
                    audioPlayer.playWarningBeep();
                }
            });
        }
    } else {
        // No warnings found: clean up and return to normal area
        if ($(".severe-lowerarea .crawl").text() != "") {
            $(".severe-lowerarea").fadeOut(0);
            $(".normal-lowerarea").fadeIn(0);
            $(".severe-lowerarea .crawl").text("");
            $(".severe-lowerarea .crawl").marquee("destroy");
        }
    }
}

//ccticker, thought i'd do this part in crawl.js since it's a crawl
function ccTickerLoop(idx){
    var textString = "";
    var displays = {
        airports(){
            textString = "";
            if (systemSettings.LBar.ccTicker.airports.length < 1) {textString = "off"}
            toggleCCticker(textString)
            $('.normal-lowerarea .ticker-tab span').text("NOW");
            for(let i = 0; i < localTickerData.airport.airports.length; i++){
                textString = textString + `<span class="shrinkY">${localTickerData.airport.airports[i].airportName}: ${localTickerData.airport.airports[i].temp} ${localTickerData.airport.airports[i].cond} ${localTickerData.airport.airports[i].delay}</span>`;
            }
        },
        cc(){
            textString = "";
            if (systemSettings.LBar.ccTicker.cities.length < 1) {textString = "off"}
            toggleCCticker(textString)
            $('.normal-lowerarea .ticker-tab span').text("NOW");
            for(let i = 0; i < localTickerData.cities.current.cities.length; i++){
                textString = textString + `<span class="shrinkY">${localTickerData.cities.current.cities[i].locationName}: ${localTickerData.cities.current.cities[i].temp} ${localTickerData.cities.current.cities[i].cond}</span>`;
            }
        },
        ccT(){
            textString = "";
            if (systemSettings.LBar.ccTicker.travelCities.length < 1) {textString = "off"}
            toggleCCticker(textString)
            $('.normal-lowerarea .ticker-tab span').text("NOW");
            for(let i = 0; i < localTickerData.travelCities.current.cities.length; i++){
                textString = textString + `<span class="shrinkY">${localTickerData.travelCities.current.cities[i].locationName}: ${localTickerData.travelCities.current.cities[i].temp} ${localTickerData.travelCities.current.cities[i].cond}</span>`;
            }
        },
        fc(){
            textString = "";
            if (systemSettings.LBar.ccTicker.cities.length < 1) {textString = "off"}
            toggleCCticker(textString)
            $('.normal-lowerarea .ticker-tab span').text(localTickerData.arrowName);
            for(let i = 0; i < localTickerData.cities.forecast.cities.length; i++){
                textString = textString + `<span class="shrinkY">${localTickerData.cities.forecast.cities[i].locationName}: ${localTickerData.cities.forecast.cities[i].temp} ${localTickerData.cities.forecast.cities[i].cond}</span>`;
            }
        },
        fcT(){
            textString = "";
            if (systemSettings.LBar.ccTicker.travelCities.length < 1) {textString = "off"}
            toggleCCticker(textString)
            for(let i = 0; i < localTickerData.travelCities.forecast.cities.length; i++){
                textString = textString + `<span class="shrinkY">${localTickerData.travelCities.forecast.cities[i].locationName}: ${localTickerData.travelCities.forecast.cities[i].temp}  ${localTickerData.travelCities.forecast.cities[i].cond}</span>`;
            }
        }
    }
    var displayNames = ["airports","cc","ccT","fc","fcT"];
    displays[displayNames[idx]]();

    $(".normal-lowerarea .ticker").append(textString);
    $(".normal-lowerarea .ticker-tab-gradient").css('width', `${$('.normal-lowerarea .ticker-tab').outerWidth(true) + 30}px`);
    if($('.normal-lowerarea .ticker-tab span').text() == "NOW"){
        $(".normal-lowerarea .ticker-tab-gradient").css('width', `117px`);
    }
    $(".normal-lowerarea .ticker").marquee({speed: 202.5, pauseOnHover: false, gap: 0, direction: 'left', delayBeforeStart: systemSettings.appearanceSettings.condensedCrawlFont.ccTicker ? 100 : 1000})//190
    .on('finished', () =>{
        $(".normal-lowerarea .ticker").empty();
        $(".normal-lowerarea .ticker").marquee('destroy');
        setTimeout(() => {
            if ((idx + 1) % displayNames.length == 0) {
                getTickerData()
                //allData();
                //getlBarData(0);
            }
            ccTickerLoop((idx + 1) % displayNames.length);   
        }, 300);
    })
    if (systemSettings.appearanceSettings.condensedCrawlFont.ccTicker) {
      $(".normal-lowerarea .ticker .js-marquee").css("font-family","Interstate Bold Cn")
      $(".normal-lowerarea .ticker").css({"font-size": "35px","margin-top": "2px"})
    } else {
      $(".normal-lowerarea .ticker .js-marquee").css({"font-family":"Interstate","font-weight":"bold"})
      $(".normal-lowerarea .ticker").css({"font-size": "40px","margin-top": "-2px"})
    }
}
function toggleCCticker(toggle) {
    if (toggle == "off") {
        $(".normal-lowerarea .tickerToggle").css("opacity","0")
    } else {
        $(".normal-lowerarea .tickerToggle").css("opacity","1")
    }
}
