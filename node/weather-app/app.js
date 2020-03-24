const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Paris", (err, res) => {
    if (err) {
        console.log("Error :", err);
    } else {
        console.log("the geocode result is : ", res);
    }
});

forecast(37.8267, -122.4233, (err, res) => {
    if (err) {
        console.log("Error :", err);
    } else {
        console.log("the forecast result is : ", res);
    }
});