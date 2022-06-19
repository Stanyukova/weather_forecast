export function drawWeather(elem, data) {
  const element = elem;
  element.innerHTML = `
    
    <div class="weather-box">
    <p class="city">${data.name}</p>
    <p class="temp">${Math.round(data.main.temp)}&#8451</p>
    <p class="descr">${data.weather[0].description}</p>
      <p class="humidity">Влажность: ${data.main.humidity} %</p>
      <p class="wind">Ветер: ${data.wind.speed} м/с </p>
      <p class="visibility">Видимость: ${data.visibility * 0.001} км </p>
      
    <div class="icon"><img src="https://openweathermap.org/img/wn/${
      data.weather[0].icon
    }@2x.png"></div>
      </div>`;
}
