const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const weatherUrl = `https://api.darksky.net/forecast/1cbff62b5ec2b8c45b134517f93dad8f/${latitude},${longitude}?units=si&lang=fr`;
    request({ url: weatherUrl, json: true }, (error, response) => {
        if (error) {
            callback("unable to connect to weather service", undefined);
        } else if (response.body.error) {
            callback("Unable to find location", undefined);
        } else {
            const currentWeather = response.body.currently;
            const data = {
                summary: response.body.daily.data[0].summary,
                temperature: currentWeather.temperature,
                precipProbability: currentWeather.precipProbability
            };
            callback(undefined, data);
        }
    });
};

module.exports = forecast;