async function getLatLong(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  const { latitude } = data.results[0];
  const { longitude } = data.results[0];
  const geoLocation = [latitude, longitude];
  return geoLocation;
}

export default function getWeather() {
  console.log(getLatLong("Berlin"));
}
