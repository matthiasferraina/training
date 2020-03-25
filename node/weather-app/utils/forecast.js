const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/1cbff62b5ec2b8c45b134517f93dad8f/${latitude},${longitude}?units=si&lang=fr`;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("unable to connect to weather service", undefined);
        } else if (body.error) {
            callback("Unable to find location", undefined);
        } else {
            const currentWeather = body.currently;
            const data = {
                summary: body.daily.data[0].summary,
                temperature: currentWeather.temperature,
                precipProbability: currentWeather.precipProbability
            };
            callback(undefined, data);
        }
    });
};

module.exports = forecast;