import "../style.css";
import { format } from "date-fns";
import getImage from "./animations";
import { sliderButtonsHandler, unitHandler } from "./logic";

import CloudRain from "../assets/pictures/weather-favicon.svg";
import Magnifier from "../assets/pictures/magnifier.svg";
import Delete from "../assets/pictures/delete.svg";
import LeftArrow from "../assets/pictures/left-arrow.svg";
import RightArrow from "../assets/pictures/right-arrow.svg";

const cloudRaining = new Image();
cloudRaining.src = CloudRain;

const magnifier = new Image();
magnifier.src = Magnifier;

const deleteX = new Image();
deleteX.src = Delete;

const leftArrow = new Image();
leftArrow.src = LeftArrow;

const rightArrow = new Image();
rightArrow.src = RightArrow;

const mphConstant = 0.621371192;

const page = document.createElement("div");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export function pageLoader() {
  const mainForecast = document.querySelector(".main-forecast");
  const carousel = document.querySelector(".carousel");
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      mainForecast.style.visibility = "hidden";
      carousel.style.visibility = "hidden";
    } else {
      mainForecast.style.visibility = "visible";
      carousel.style.visibility = "visible";
    }
  } 
}
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
  const searchAndTemp = document.createElement("div");
  searchAndTemp.classList.add("search-temp");
  searchAndTemp.append(searchDiv);
  page.appendChild(searchAndTemp);
}
export function crateUnitButtons() {
  const fahrenheit = document.createElement("button");
  const celsius = document.createElement("button");
  fahrenheit.textContent = "°F";
  celsius.textContent = "°C";
  fahrenheit.classList.add("fahrenheit-btn");
  celsius.classList.add("celsius-btn");
  const searchContainer = document.querySelector(".search-temp");
  searchContainer.append(fahrenheit, celsius);
  unitHandler();
}
function parseCityName(city) {
  const cityArr = city.split(" ");
  for (let i = 0; i < cityArr.length; i++) {
    cityArr[i] =
      cityArr[i][0].toUpperCase() + cityArr[i].slice(1).toLowerCase();
  }
  return cityArr.join(" ");
}
function mainCityDate(forecastDiv, weatherData, city, unit) {
  const cityName = document.createElement("p");
  cityName.classList.add("city-name");
  cityName.innerText = parseCityName(city);
  const currentTemp = document.createElement("p");
  currentTemp.innerText = `${weatherData[0].getCurrentTemp()} ${unit}`;
  currentTemp.classList.add("current-temp");
  const date = document.createElement("p");
  date.classList.add("main-date");
  const formatedDate = format(weatherData[0].getTime(), "dd/MM/yyyy");
  date.innerText = `${
    weekdays[weatherData[0].getTime().getDay()]
  }, ${formatedDate} `;
  forecastDiv.appendChild(cityName);
  forecastDiv.appendChild(currentTemp);
  forecastDiv.appendChild(date);
}
function mainSideForecast(weatherDiv, weatherData, unit) {
  const addInfo = document.createElement("div");
  weatherDiv.appendChild(addInfo);
  //percip
  addInfo.classList.add("add-info");
  const possibleRain = document.createElement("p");
  possibleRain.classList.add("pos-rain");
  possibleRain.innerText = `Rain: ${weatherData[0].getPrecipitation()} %`;
  addInfo.appendChild(possibleRain);
  //rain sum
  const humidity = document.createElement("p");
  humidity.classList.add("humidity");
  humidity.innerText = `Humidity: ${weatherData[0].getCurrentHumidity()} %`;
  addInfo.appendChild(humidity);
  //windspeed sum
  const windspeedMax = document.createElement("p");
  windspeedMax.classList.add("wind-speed");
  if(unit === "°C"){
    windspeedMax.innerText = `Wind: ${weatherData[0].getWindspeed()} km/h`;
  } else {
    windspeedMax.innerText = `Wind: ${
      Math.round(weatherData[0].getWindspeed() * mphConstant * 10) / 10
    } mph`;
  }

  addInfo.appendChild(windspeedMax);
}

function mainAnimatedForecast(weatherDiv, weatherData, unit) {
  const daySide = document.createElement("div");
  daySide.classList.add("day-side");
  const nightSide = document.createElement("div");
  nightSide.classList.add("night-side");
  const weatherAnimations = document.createElement("div");
  weatherAnimations.append(daySide, nightSide);
  weatherAnimations.classList.add('weather-animations');
  weatherDiv.append(weatherAnimations);
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
  dayTemp.innerText = `${weatherData[0].getMaxTemp()} ${unit}`;
  dayTemp.classList.add("day-temp");
  daySide.appendChild(dayTemp);
  //temperature night
  const nightTemp = document.createElement("p");
  nightTemp.innerText = `${weatherData[0].getMinTemp()} ${unit}`;
  nightTemp.classList.add("night-temp");
  nightSide.appendChild(nightTemp);
}
function createCarousel(weatherData, unit) {
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");
  page.append(carousel);

  //buttons
  const buttonPrev = document.createElement("button");
  const btnPrevImg = document.createElement("img");
  btnPrevImg.src = leftArrow.src;
  buttonPrev.appendChild(btnPrevImg);
  buttonPrev.classList.add("carousel-button-prev");
  const buttonNext = document.createElement("button");
  const btnNextImg = document.createElement("img");
  btnNextImg.src = rightArrow.src;
  buttonNext.appendChild(btnNextImg);
  buttonNext.classList.add("carousel-button-next");

  //slides
  const slideList = document.createElement("div");
  slideList.classList.add("slide-list");
  carousel.append(slideList);
  for (let i = 1; i < 7; i++) {
    const listElement = document.createElement("div");
    if (i <= 3) {
      listElement.classList.add("data-active");
    }
    const weekDay = document.createElement("p");
    weekDay.classList.add("slide-weekday");
    weekDay.textContent = weekdays[weatherData[i].getTime().getDay()];
    const date = document.createElement("p");
    date.classList.add("slide-date");
    date.textContent = format(weatherData[i].getTime(), "dd/MM/yyyy");
    const weatherAnimation1 = document.createElement("img");
    weatherAnimation1.src = getImage(weatherData[i].getWeatherCode())[0];
    listElement.classList.add("slide");
    const tempInfo = document.createElement("div");
    tempInfo.classList.add("slide-temp");
    const maxTemp = document.createElement("p");
    maxTemp.textContent = `${weatherData[i].getMaxTemp()} ${unit}`;
    const minTemp = document.createElement("p");
    minTemp.textContent = `${weatherData[i].getMinTemp()} ${unit}`;
    tempInfo.append(maxTemp, minTemp);
    listElement.append(weekDay, date, weatherAnimation1, tempInfo);
    slideList.append(listElement);
  }
  carousel.append(buttonPrev, slideList, buttonNext);
  sliderButtonsHandler();
}
export function displayMainForecast(city, weatherData, unit) {
  let unitSymbol;
  if (unit === "fahrenheit") {
    unitSymbol = "°F";
  } else unitSymbol = "°C";
  const mainForecast = document.createElement("div");
  mainForecast.classList.add("main-forecast");
  const mainForecastTitle = document.createElement("div");
  mainForecastTitle.classList.add("main-title");
  mainForecast.append(mainForecastTitle);
  page.append(mainForecast);
  const weatherInfoConatiner = document.createElement("div");
  weatherInfoConatiner.classList.add("weather-container");
  mainForecast.appendChild(weatherInfoConatiner);
  mainCityDate(mainForecastTitle, weatherData, city, unitSymbol);
  mainAnimatedForecast(weatherInfoConatiner, weatherData, unitSymbol);
  mainSideForecast(weatherInfoConatiner, weatherData, unitSymbol);
  createCarousel(weatherData, unitSymbol, unitSymbol);
  console.log(city);
  console.log(weatherData[0]);
}
export function removePreviousForecast() {
  const mainForecast = document.querySelector(".main-forecast");
  const carouselForecast = document.querySelector(".carousel");
  if (mainForecast && carouselForecast) {
    mainForecast.remove();
    carouselForecast.remove();
  }
}
