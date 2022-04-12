export async function getWeather(cityName, appID) {
  try {
    const city = cityName.split(" ").join("+");
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&lang=ru&appid=${appID}`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Invalid City");
  } catch (e) {
    console.log(e);
  }
  return null;
}
