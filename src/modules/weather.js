export default class Weather {
  constructor(
    time,
    precipitation,
    rain,
    snowfall,
    temperatureMax,
    temperatureMin,
    weathercode,
    windspeed,
  ) {
    this.time = new Date(time);
    this.precipitation = precipitation;
    this.rain = rain;
    this.snowfall = snowfall;
    this.temperatureMax = temperatureMax;
    this.temperatureMin = temperatureMin;
    this.weathercode = weathercode;
    this.windspeed = windspeed;
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

  getSnowfall() {
    return this.snowfall;
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
}
