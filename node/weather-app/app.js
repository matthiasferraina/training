const request = require("request");
const citySearched = "Cherbourg";
const weatherUrl =
    "https://api.darksky.net/forecast/1cbff62b5ec2b8c45b134517f93dad8f/37.8267,-122.4233?units=si&lang=fr";

const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${citySearched}.json?access_token=pk.eyJ1IjoibWF0aXJtdiIsImEiOiJjazg2MGZvMXYwYzI2M21vdDQxY3YzYTljIn0.0W4KR-3T9IHv5c1W-US_Ug&limit=1`;

request({ url: weatherUrl, json: true }, (error, response) => {
    if (error) {
        console.error("unable to connect to weather service");
    } else if (response.body.error) {
        console.log("Unable to find location");
    } else {
        const currentWeather = response.body.currently;
        console.log(
            `${response.body.daily.data[0].summary}. La température à ${citySearched} est actuellement de ${currentWeather.temperature} degrés. Les chances qu'il pleuve sont de ${currentWeather.precipProbability} %.`
        );
    }
});

request({ url: mapUrl, json: true }, (error, response) => {
    if (error) {
        console.error("unable to connect to map service");
    } else if (response.body.features.length === 0) {
        console.log("Unable to find longitude and latitude");
    } else {
        const geoloc = response.body.features[0].center;
        const latitude = geoloc[1];
        const longitude = geoloc[0];
        console.log(`latitude is : ${latitude}, longitude is : ${longitude}`);
    }
});