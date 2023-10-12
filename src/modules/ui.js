import "../style.css";
import { format } from "date-fns";
import getImage from "./animations";
import { sliderButtonsHandler } from "./logic";

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
  windspeedMax.classList.add("wind-kmh");
  windspeedMax.innerText = `Wind: ${weatherData[0].getWindspeed()} km/h`;
  addInfo.appendChild(windspeedMax);
}

function mainAnimatedForecast(weatherDiv, weatherData) {
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
  dayTemp.innerText = `${weatherData[0].getMaxTemp()} °C`;
  dayTemp.classList.add("day-temp");
  daySide.appendChild(dayTemp);
  //temperature night
  const nightTemp = document.createElement("p");
  nightTemp.innerText = `${weatherData[0].getMinTemp()} °C`;
  nightTemp.classList.add("night-temp");
  nightSide.appendChild(nightTemp);
}
function createCarousel(weatherData){
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
    //const date = document.createElement("p");
    //date.textContent = format(weatherData[i].getTime(), "dd/MM/yyyy");
    const weatherAnimation1 = document.createElement("img");
    listElement.append(weatherAnimation1);
    weatherAnimation1.src = getImage(weatherData[i].getWeatherCode())[0];
    listElement.classList.add("slide");
    //slideList.append(date);
    slideList.append(listElement);
  }
  carousel.append(buttonPrev, slideList, buttonNext);
  sliderButtonsHandler();
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
  createCarousel(weatherData);
  console.log(city);
  console.log(weatherData[0]);
}
