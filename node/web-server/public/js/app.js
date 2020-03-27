const form = document.querySelector("form");
const input = document.querySelector("input");
const paragraphWeather = document.querySelector("#weather");
const paragraphError = document.querySelector("#error");

paragraphWeather.innerText = "";
form.addEventListener("submit", e => {
    e.preventDefault();

    paragraphWeather.textContent = "Loading...";
    fetch(`http://localhost:3000/weather?address=${input.value}`).then(res => {
        res.json().then(data => {
            if (data.error) {
                paragraphWeather.textContent = "";
                return (paragraphError.textContent = data.error);
            }
            paragraphWeather.textContent = `Pour la ville de ${data.location}, aujourd'hui il fera ${data.summary}, avec une température de ${data.temperature} °C et ${data.precipProbability} probabilité de pluie.`;
            paragraphError.textContent = "";
        });
    });
});