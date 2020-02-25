const request = require("request");
const url =
  "https://api.darksky.net/forecast/1cbff62b5ec2b8c45b134517f93dad8f/37.8267,-122.4233";

request({ url: url }, (error, reponse) => {
  const data = JSON.parse(reponse.body);
  const currentWeather = data.currently;
  console.log(currentWeather);
  console.log(currentWeather);
});
