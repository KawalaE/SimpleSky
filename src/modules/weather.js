export default class Weather {
  constructor(time, precipitation, rain, snowfall, temperatureMax, temperatureMin, weathercode, windspeed){
    this.time = time;
    this.precipitation = precipitation;
    this.rain = rain;
    this.snowfall = snowfall;
    this.temperatureMax = temperatureMax;
    this.temperatureMin = temperatureMin;
    this.weathercode = weathercode;
    this.windspeed = windspeed;
  }
}
