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
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,precipitation_probability_mean,snowfall_sum,windspeed_10m_max`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  return data;
}

export default function getForecast(cityName) {
  let coordinates = [];
  getLatLong(cityName).then((data) => {
    coordinates = data;
    getWeather(coordinates[0], coordinates[1], coordinates[2]).then(
      (response) => console.log(response),
    );
  });
}
