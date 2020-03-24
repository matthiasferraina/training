const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
    console.log("please enter an address");
} else {
    geocode(address, (err, res) => {
        if (err) {
            return console.log("Error :", err);
        }
        forecast(res.latitude, res.longitude, (err, res) => {
            if (err) {
                return console.log("Error :", err);
            }

            console.log("the forecast result is : ", res);
        });
    });
}