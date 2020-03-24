const request = require("request");
const url =
    "https://api.darksky.net/forecast/1cbff62b5ec2b8c45b134517f93dad8f/37.8267,-122.4233?units=si&lang=fr";

request({ url: url, json: true }, (error, response) => {
    const currentWeather = response.body.currently;

    console.log(
        `${response.body.daily.data[0].summary}. The temperature is currently of ${currentWeather.temperature} celsius. Chances of rain are :${currentWeather.precipProbability} %`
    );
});