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
function mainSideForecast(weatherDiv, weatherData){
  //percip
  const addInfo = document.createElement('div');
  addInfo.classList.add('add-info');
  const possibleRain = document.createElement('p');
  possibleRain.classList.add("pos-rain");
  possibleRain.innerText = `Precip chance: ${weatherData[0].precipitation} %`;
  addInfo.appendChild(possibleRain);
  weatherDiv.appendChild(addInfo);
  //rain sum
  const rainMM = document.createElement('p');
  rainMM.classList.add("rain-mm");
  rainMM.innerText = `Rain sum: ${weatherData[0].rain} mm`;
  addInfo.appendChild(rainMM);
  //snowfall sum
  const snowfallSum = document.createElement('p');
  snowfallSum.classList.add("snow-cm");
  snowfallSum.innerText = `Snowfall sum: ${weatherData[0].snowfall} cm`;
  addInfo.appendChild(snowfallSum);
  //windspeed sum
  const windspeedMax = document.createElement('p');
  windspeedMax.classList.add("wind-kmh");
  windspeedMax.innerText = `Max windspeed: ${weatherData[0].snowfall} km/h`;
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
  dayImg.src = getImage(weatherData[0].weathercode)[0];
  dayAnimation.appendChild(dayImg);
  daySide.appendChild(dayAnimation);
  //night animation display
  const nightAnimation = document.createElement("div");
  const nightImg = document.createElement("img");
  nightImg.src = getImage(weatherData[0].weathercode)[1];
  nightAnimation.appendChild(nightImg);
  nightSide.appendChild(nightAnimation);
  //temperature day
  const dayTemp = document.createElement('p');
  dayTemp.innerText = `${weatherData[0].temperatureMax} °C`;
  dayTemp.classList.add('day-temp');
  daySide.appendChild(dayTemp);
  //temperature night
  const nightTemp = document.createElement('p');
  nightTemp.innerText = `${weatherData[0].temperatureMin} °C`;
  nightTemp.classList.add('night-temp');
  nightSide.appendChild(nightTemp);
}

export function displayMainForecast(city, weatherData) {
  let mainForecast = document.createElement("div");
  mainForecast.classList.add("main-forecast");
  const mainForecastTitle = document.createElement("div");
  const cityName = document.createElement("p");
  cityName.classList.add("city-name");
  cityName.innerText = city;
  mainForecastTitle.classList.add("main-title");
  const date = document.createElement("p");
  date.classList.add("main-date");
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const formatedDate = format(weatherData[0].time, 'dd/MM/yyyy');
  date.innerText = `${weekdays[(weatherData[0].time).getDay()]}, ${formatedDate} `;
  mainForecastTitle.appendChild(cityName);
  mainForecastTitle.appendChild(date);
  mainForecast.append(mainForecastTitle);
  page.append(mainForecast);
  const weatherInfoConatiner = document.createElement("div");
  weatherInfoConatiner.classList.add("weather-container");
  mainForecast.appendChild(weatherInfoConatiner);
  mainAnimatedForecast(weatherInfoConatiner, weatherData);
  //other info
  mainSideForecast(weatherInfoConatiner, weatherData);
  console.log(city);
  console.log(weatherData[0]);
}