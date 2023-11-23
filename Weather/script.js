let isCelsius = true;

function getWeather() {
  const apiKey = '6000229ba681c93b80335817e159fb87';
  const zipCode = document.getElementById('zipCodeInput').value;

  // Check if the zip code is provided
  if (zipCode.trim() === '') {
    alert('Please enter a ZIP code');
    return;
  }

  // Fetch weather data using the API
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=${isCelsius ? 'metric' : 'imperial'}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error('There was a problem fetching the weather data:', error);
      alert('There was a problem fetching the weather data. Please try again.');
    });
}

function displayWeather(data) {
  const weatherDiv = document.getElementById('weather');
  weatherDiv.innerHTML = '';

  const cityName = document.createElement('h2');
  cityName.textContent = data.name;

  const temperature = document.createElement('p');
  temperature.textContent = `Temperature: ${data.main.temp} ${isCelsius ? '°C' : '°F'}`;

  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = `Weather: ${data.weather[0].main}`;

  weatherDiv.appendChild(cityName);
  weatherDiv.appendChild(temperature);
  weatherDiv.appendChild(weatherDescription);
}

function switchToCelsius() {
  if (!isCelsius) {
    isCelsius = true;
    getWeather();
  }
}

function switchToFahrenheit() {
  if (isCelsius) {
    isCelsius = false;
    getWeather();
  }
}
