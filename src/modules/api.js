async function getLatLong(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`;
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    if (response.status === 200) {
      const { latitude } = data.results[0];
      const { longitude } = data.results[0];
      const geoLocation = [latitude, longitude];
      return geoLocation;
    }
    console.log("Server error");
  } catch (error) {
    console.log("Error", error);
  }
}

async function getWeather(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  return data;
}

let coordinates = [];
getLatLong("Kraków").then((data) => {
  coordinates = data;
  getWeather(coordinates[0], coordinates[1]).then((data) => console.log(data));
});

export default function getForecast() {
  console.log(getLatLong("Berlin"));
}
