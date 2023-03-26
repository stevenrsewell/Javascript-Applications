const apiKey = "6000229ba681c93b80335817e159fb87";

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", searchWeather);

function searchWeather() {
  const cityInput = document.getElementById("city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
      const temperature = Math.round(data.main.temp);
      const description = data.weather[0].description;

      document.getElementById("weather-icon").innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
      document.getElementById("temperature").textContent = `${temperature}°C`;
      document.getElementById("description").textContent = description;
    })
    .catch(() => {
      alert("City not found");
    });
}
