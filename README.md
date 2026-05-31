![](https://i.postimg.cc/jqpN9c26/mistwxscanv2banner.png)

------------

**Weatherscan v2** is a simulated recreation of "Weatherscan" by The Weather Channel in HTML/CSS/JS, by ***mist weather media***

Online demo: [v2.weatherscan.net](https://v2.weatherscan.net)

© Mist Weather Media 2026.

------------

**Special thanks to these talented minds who made this project possible!**

**Joe Molinelli (TheGoldDiamond9)** - Lead Developer  
**COLSTER** - Developer  
**JensonWX** - Developer  
**Miceoroni** - Map Developer  
**zachNet** - README

and the rest of the Mist Creative Team for their support!

------------

Need support beyond the scope of this README? A guide for configuring this simulator will come soon. In the meantime, feel free to join our Discord for support!

[***mist weather media*** on Discord](https://discord.gg/hV2w5sZQxz)

# Initial Setup (Source code)

1. Install [node.js LTS](https://nodejs.org/en/).
2. Acquire *weather.com*, *mapbox.com*, *developer.tomtom*, and *HERE.com* . API keys. These are required for weather data, radar frames, and traffic, respectively.
3. Go to `/main/configs` and open `yourConfig.json`.
4. Line 4 is where your *weather.com*  API key goes. Replace `"YOUR_API_KEY"` with your *weather.com* API key.
5. Line 5 is where your *mapbox.com*  API key goes. Replace `"YOUR_API_KEY"` with your *mapbox.com* API key.
6. Line 6 is where your *developer.tomtom.com*  API key goes. Replace `"YOUR_API_KEY"` with your *developer.tomtom.com* API key. (optional, only if you want traffic report)
7. Line 7 is where your *HERE.com*  API key goes. Replace `"YOUR_API_KEY"` with your *HERE.com* API key. (optional, only if you want traffic flow)
8. Save your changes to `yourConfig.json` and close it.
9. In terminal / command prompt within the main directory, run `npm install --production`. This will install all dependencies required to run.
10. In terminal / command prompt within the main directory, run `npm start`. This will start a local web server, which is required to run the sim.

------------

Enjoy the nostalgia! You're all set.

Many thanks for using our simulator! We hope you like it.
