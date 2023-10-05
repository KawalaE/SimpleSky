import ClearSkyDay from "../assets/pictures/weather_animations/clear-day.svg";
import ClearSkyNight from "../assets/pictures/weather_animations/clear-night.svg";
import PartlyCloudyDay from "../assets/pictures/weather_animations/partly-cloudy-day.svg";
import PartlyCloudyNight from "../assets/pictures/weather_animations/partly-cloudy-night.svg";
import FogDay from "../assets/pictures/weather_animations/fog-day.svg";
import FogNight from "../assets/pictures/weather_animations/fog-night.svg";
import DrizzleDay from "../assets/pictures/weather_animations/partly-cloudy-day-drizzle.svg";
import DrizzleNight from "../assets/pictures/weather_animations/partly-cloudy-night-drizzle.svg";
import RainDay from "../assets/pictures/weather_animations/partly-cloudy-day-rain.svg";
import RainNight from "../assets/pictures/weather_animations/partly-cloudy-night-rain.svg";
import SnowDay from "../assets/pictures/weather_animations/partly-cloudy-day-snow.svg";
import SnowNight from "../assets/pictures/weather_animations/partly-cloudy-night-snow.svg";
import ThunderDay from "../assets/pictures/weather_animations/thunderstorms-day.svg";
import ThunderNight from "../assets/pictures/weather_animations/thunderstorms-night.svg";

const clearSkyDay = new Image();
clearSkyDay.src = ClearSkyDay;

const clearSkyNight = new Image();
clearSkyNight.src = ClearSkyNight;

const partlyCloudyDay = new Image();
partlyCloudyDay.src = PartlyCloudyDay;

const partlyCloudyNight = new Image();
partlyCloudyNight.src = PartlyCloudyNight;

const fogDay = new Image();
fogDay.src = FogDay;

const fogNight = new Image();
fogNight.src = FogNight;

const drizzleDay = new Image();
drizzleDay.src = DrizzleDay;

const drizzleNight = new Image();
drizzleNight.src = DrizzleNight;

const rainDay = new Image();
rainDay.src = RainDay;

const rainNight = new Image();
rainNight.src = RainNight;

const snowDay = new Image();
snowDay.src = SnowDay;

const snowNight = new Image();
snowNight.src = SnowNight;

const thunderDay = new Image();
thunderDay.src = ThunderDay;

const thunderNight = new Image();
thunderNight.src = ThunderNight;

export default function getImage(number) {
  const wmoPictures = {
    0: [clearSkyDay.src, clearSkyNight.src],
    1: [partlyCloudyDay.src, partlyCloudyNight.src],
    2: [partlyCloudyDay.src, partlyCloudyNight.src],
    3: [partlyCloudyDay.src, partlyCloudyNight.src],
    45: [fogDay.src, fogNight.src],
    48: [fogDay.src, fogNight.src],
    51: [drizzleDay.src, drizzleNight.src],
    53: [drizzleDay.src, drizzleNight.src],
    55: [drizzleDay.src, drizzleNight.src],
    56: [drizzleDay.src, drizzleNight.src],
    57: [drizzleDay.src, drizzleNight.src],
    61: [rainDay.src, rainNight.src],
    63: [rainDay.src, rainNight.src],
    65: [rainDay.src, rainNight.src],
    66: [drizzleDay.src, drizzleNight.src],
    67: [drizzleDay.src, drizzleNight.src],
    71: [snowDay.src, snowNight.src],
    73: [snowDay.src, snowNight.src],
    75: [snowDay.src, snowNight.src],
    77: [snowDay.src, snowNight.src],
    80: [rainDay.src, rainNight.src],
    81: [rainDay.src, rainNight.src],
    82: [rainDay.src, rainNight.src],
    85: [snowDay.src, snowNight.src],
    86: [snowDay.src, snowNight.src],
    95: [thunderDay.src, thunderNight.src],
    96: [thunderDay.src, thunderNight.src],
    99: [thunderDay.src, thunderNight.src],
  };
  return wmoPictures[number];
}
