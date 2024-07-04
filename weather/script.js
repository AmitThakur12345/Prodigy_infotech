document.getElementById(‘get-weather-btn’).addEventListener(‘click’, () => { 

    Const location = document.getElementById(‘location-input’).value; 

    If (location) { 

        getWeather(location); 

    } else { 

        Alert(‘Please enter a location’); 

    } 

}); 

 

Function getWeather(location) { 

    Const apiKey = ‘YOUR_API_KEY’; 

    Const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`; 

 

    Fetch(apiUrl) 

        .then(response => response.json()) 

        .then(data => displayWeather(data)) 

        .catch(error => console.error(‘Error fetching weather data:’, error)); 

} 

 

Function displayWeather(data) { 

    Const weatherDisplay = document.getElementById(‘weather-display’); 

    weatherDisplay.innerHTML = ` 

        <h2>${data.name}, ${data.sys.country}</h2> 

        <p>Temperature: ${data.main.temp}°C</p> 

        <p>Weather: ${data.weather[0].description}</p> 

        <p>Humidity: ${data.main.humidity}%</p> 

        <p>Wind Speed: ${data.wind.speed} m/s</p> 

    `; 

} 

 
