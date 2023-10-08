import "../style.css";
import { format } from "date-fns";
import getImage from "./animations";

import CloudRain from "../assets/pictures/weather-favicon.svg";
import Magnifier from "../assets/pictures/magnifier.svg";
import Delete from "../assets/pictures/delete.svg";

const cloudRaining = new Image();
cloudRaining.src = CloudRain;

const magnifier = new Image();
magnifier.src = Magnifier;

const deleteX = new Image();
deleteX.src = Delete;

const page = document.createElement("div");

export function createFavicon() {
  const head = document.querySelector("head");
  const favicon = document.createElement("link");
  favicon.setAttribute("rel", "shortcut icon");
  favicon.setAttribute("href", cloudRaining.src);
  head.append(favicon);
}

export function createSearchBar() {
  page.classList.add("page");
  document.body.appendChild(page);
  const searchDiv = document.createElement("div");
  searchDiv.classList.add("search-container");
  const searchBar = document.createElement("input");
  searchBar.id = "search";
  searchBar.type = "text";
  searchBar.placeholder = "City";
  searchBar.classList.add("search");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("button-delete");
  const searchBtn = document.createElement("button");
  const xImage = document.createElement("img");
  xImage.src = deleteX.src;
  deleteBtn.append(xImage);
  searchBtn.id = "search";
  searchBtn.classList.add("search");
  const loupe = document.createElement("img");
  loupe.src = magnifier.src;
  searchBtn.append(magnifier);
  searchDiv.append(deleteBtn, searchBar, searchBtn);
  page.appendChild(searchDiv);
}
function parseCityName(city) {
  const cityArr = city.split(" ");
  for (let i = 0; i < cityArr.length; i++) {
    cityArr[i] =
      cityArr[i][0].toUpperCase() + cityArr[i].slice(1).toLowerCase();
  }
  return cityArr.join(" ");
}
function mainCityDate(forecastDiv, weatherData, city) {
  const cityName = document.createElement("p");
  cityName.classList.add("city-name");
  cityName.innerText = parseCityName(city);
  const currentTemp = document.createElement('p');
  currentTemp.innerText = `${weatherData[0].getCurrentTemp()} °C`;
  currentTemp.classList.add("current-temp");
  const date = document.createElement("p");
  date.classList.add("main-date");
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const formatedDate = format(weatherData[0].getTime(), "dd/MM/yyyy");
  date.innerText = `${
    weekdays[weatherData[0].getTime().getDay()]
  }, ${formatedDate} `;
  forecastDiv.appendChild(cityName);
  forecastDiv.appendChild(currentTemp);
  forecastDiv.appendChild(date);
}
function mainSideForecast(weatherDiv, weatherData) {
  const addInfo = document.createElement("div");
  weatherDiv.appendChild(addInfo);
  //percip
  addInfo.classList.add('add-info');
  const possibleRain = document.createElement("p");
  possibleRain.classList.add("pos-rain");
  possibleRain.innerText = `Precip chance: ${weatherData[0].getPrecipitation()} %`;
  addInfo.appendChild(possibleRain);
  //rain sum
  const rainMM = document.createElement("p");
  rainMM.classList.add("rain-mm");
  rainMM.innerText = `Rain sum: ${weatherData[0].getRain()} mm`;
  addInfo.appendChild(rainMM);
  //windspeed sum
  const windspeedMax = document.createElement("p");
  windspeedMax.classList.add("wind-kmh");
  windspeedMax.innerText = `Max windspeed: ${weatherData[0].getWindspeed()} km/h`;
  addInfo.appendChild(windspeedMax);
}

function mainAnimatedForecast(weatherDiv, weatherData) {
  const daySide = document.createElement("div");
  daySide.classList.add("day-side");
  const nightSide = document.createElement("div");
  nightSide.classList.add("night-side");
  weatherDiv.append(daySide, nightSide);
  //day animation display
  const dayAnimation = document.createElement("div");
  const dayImg = document.createElement("img");
  dayImg.src = getImage(weatherData[0].getWeatherCode())[0];
  dayAnimation.appendChild(dayImg);
  daySide.appendChild(dayAnimation);
  //night animation display
  const nightAnimation = document.createElement("div");
  const nightImg = document.createElement("img");
  nightImg.src = getImage(weatherData[0].getWeatherCode())[1];
  nightAnimation.appendChild(nightImg);
  nightSide.appendChild(nightAnimation);
  //temperature day
  const dayTemp = document.createElement("p");
  dayTemp.innerText = `${weatherData[0].getMaxTemp()} °C`;
  dayTemp.classList.add("day-temp");
  daySide.appendChild(dayTemp);
  //temperature night
  const nightTemp = document.createElement("p");
  nightTemp.innerText = `${weatherData[0].getMinTemp()} °C`;
  nightTemp.classList.add("night-temp");
  nightSide.appendChild(nightTemp);
}

export function displayMainForecast(city, weatherData) {
  const mainForecast = document.createElement("div");
  mainForecast.classList.add("main-forecast");
  const mainForecastTitle = document.createElement("div");
  mainForecastTitle.classList.add("main-title");
  mainForecast.append(mainForecastTitle);
  page.append(mainForecast);
  const weatherInfoConatiner = document.createElement("div");
  weatherInfoConatiner.classList.add("weather-container");
  mainForecast.appendChild(weatherInfoConatiner);
  mainCityDate(mainForecastTitle, weatherData, city);
  mainAnimatedForecast(weatherInfoConatiner, weatherData);
  mainSideForecast(weatherInfoConatiner, weatherData);
  console.log(city);
  console.log(weatherData[0]);
}