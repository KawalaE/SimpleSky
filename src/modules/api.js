import Weather from "./weather";

async function getLatLong(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&timezone&language=en&format=json`;
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    if (response.status === 200) {
      const { latitude } = data.results[0];
      const { longitude } = data.results[0];
      const { timezone } = data.results[0];
      const geoLocation = [latitude, longitude, timezone];
      return geoLocation;
    }
    return "Server error";
  } catch (error) {
    return `Error ${error}`;
  }
}

async function getWeather(latitude, longitude, timezone) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,precipitation_probability_mean,windspeed_10m_max`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  const url1 = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode,relativehumidity_2m`;
  const response1 = await fetch(url1, { mode: "cors" });
  const data1 = await response1.json();
  const weatherData = [data, data1];
  return weatherData;
}
function parseData(dailyData, currentData) {
  const forecast = [];
  let singleDayWeather;
  for (let i = 0; i <= 6; i++) {
    singleDayWeather = new Weather(
      dailyData.daily.time[i],
      dailyData.daily.precipitation_probability_mean[i],
      dailyData.daily.rain_sum[i],
      dailyData.daily.temperature_2m_max[i],
      dailyData.daily.temperature_2m_min[i],
      currentData.hourly.weathercode[i],
      dailyData.daily.windspeed_10m_max[i],
      currentData.hourly.temperature_2m[i],
      currentData.hourly.relativehumidity_2m[i],
    );
    forecast.push(singleDayWeather);
  }
  return forecast;
}

export default function getForecast(cityName) {
  return getLatLong(cityName).then((geoLocation) => {
    return getWeather(geoLocation[0], geoLocation[1], geoLocation[2]).then(
      (weatherData) => {
        return parseData(weatherData[0], weatherData[1]);
      },
    );
  });
}
