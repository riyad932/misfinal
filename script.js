function searchWeather() {
    const apiKey = '3a2cfe75c360c0e2c9ec51ae3daecb56';
    const city = document.getElementById('searchInput').value;

    if (!city) {
        alert('Please enter a city.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again later.');
        });
}

function displayWeather(data) {
    const weatherIcon = document.getElementById('weatherIcon');
    const weatherInfo = document.getElementById('weatherInfo');

    const weatherCode = data.weather[0].id;

    weatherIcon.src = getWeatherIcon(weatherCode);
    weatherIcon.alt = data.weather[0].description;

    const temperature = Math.round(data.main.temp - 273.15); 
    const description = data.weather[0].description;
    const cityName = data.name;

    weatherInfo.textContent = `${cityName}: ${temperature}°C, ${description}`;
}

function getWeatherIcon(code) {
    if (code >= 200 && code < 300) {
        return 'im2.png';
    } else if (code >= 300 && code < 500) {
        return 'im3.png';
    } else if (code >= 500 && code < 600) {
        return 'im4.jpg';
    } else if (code >= 600 && code < 700) {
        return 'im5.jpg';
    } else if (code >= 700 && code < 800) {
        return 'im6.jpg';
    } else if (code === 800) {
        return 'im7.png';
    } else if (code === 801 || code === 802) {
        return 'im8.jpg';
    } else if (code === 803 || code === 804) {
        return 'im9.png';
    } else {
        return 'im10.jpg';
    }
}