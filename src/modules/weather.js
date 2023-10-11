export default class Weather {
  constructor(
    time,
    precipitation,
    rain,
    temperatureMax,
    temperatureMin,
    weathercode,
    windspeed,
    currentTemp,
    currentHumidity,
  ) {
    this.time = new Date(time);
    this.precipitation = precipitation;
    this.rain = rain;
    this.temperatureMax = temperatureMax;
    this.temperatureMin = temperatureMin;
    this.weathercode = weathercode;
    this.windspeed = windspeed;
    this.currentTemp = currentTemp;
    this.currentHumidity = currentHumidity;
  }

  getTime() {
    return this.time;
  }

  getPrecipitation() {
    return this.precipitation;
  }

  getRain() {
    return this.rain;
  }

  getMaxTemp() {
    return this.temperatureMax;
  }

  getMinTemp() {
    return this.temperatureMin;
  }

  getWeatherCode() {
    return this.weathercode;
  }

  getWindspeed() {
    return this.windspeed;
  }

  getCurrentTemp() {
    return this.currentTemp;
  }

  getCurrentHumidity() {
    return this.currentHumidity;
  }
}
