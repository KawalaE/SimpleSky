import getForecast from "./api";
import { displayMainForecast, removePreviousForecast } from "./ui";

let currentCity;

export function createLoader() {
  const page = document.querySelector(".page");
  const loader = document.createElement("div");
  loader.classList.add("loader");
  page.append(loader);
}
function weatherHandler(city, unit) {
  const forecastDOM = document.querySelector(".main-forecast");
  const carouselDOM = document.querySelector(".carousel");
  const loader = document.querySelector(".loader");
  loader.style.display = "block";
  if (forecastDOM !== null && carouselDOM !== null) {
    forecastDOM.style.visibility = "hidden";
    carouselDOM.style.visibility = "hidden";
  }
  getForecast(city, unit).then((data) => {
    if (forecastDOM !== null && carouselDOM !== null) {
      forecastDOM.style.visibility = "visible";
      carouselDOM.style.visibility = "visible";
    }
    loader.style.display = "none";
    removePreviousForecast();
    displayMainForecast(city, data, unit);
  });
}
function getCurrentUnit(unitStr) {
  if (unitStr === "°C") {
    return "celsius";
  }
  return "fahrenheit";
}
export function searchBarHandler(unit) {
  const searchValue = document.querySelector("input[class='search']");
  const storageVal = localStorage.getItem("city")
    ? localStorage.getItem("city")
    : "New York";
  currentCity = searchValue.value ? searchValue.value : storageVal;
  if (!searchValue.value) {
    weatherHandler(currentCity, unit);
  }
  searchValue.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      currentCity = searchValue.value;
      const unitDOM = getCurrentUnit(
        document.querySelector(".unit-current").textContent,
      );
      localStorage.setItem("city", currentCity);
      weatherHandler(currentCity, unitDOM);
    }
  });
  const loupeBtn = document.querySelector("button[class='search']");
  loupeBtn.addEventListener("click", () => {
    currentCity = searchValue.value;
    const unitDOM = getCurrentUnit(
      document.querySelector(".unit-current").textContent,
    );
    weatherHandler(currentCity, unitDOM);
  });
  const deleteBtn = document.querySelector(".button-delete");
  deleteBtn.addEventListener("click", () => {
    searchValue.value = "";
  });
}
export function unitHandler() {
  const fahrenheitBtn = document.querySelector(".fahrenheit-btn");
  const celsiusBtn = document.querySelector(".celsius-btn");

  fahrenheitBtn.addEventListener("click", () => {
    celsiusBtn.classList.remove("unit-current");
    fahrenheitBtn.classList.add("unit-current");
    localStorage.setItem("unit", "fahrenheit");
    localStorage.setItem("speed", "mph");
    weatherHandler(currentCity, "fahrenheit");
  });
  celsiusBtn.addEventListener("click", () => {
    celsiusBtn.classList.add("unit-current");
    fahrenheitBtn.classList.remove("unit-current");
    localStorage.setItem("unit", "celsius");
    localStorage.setItem("speed", "kmh");
    weatherHandler(currentCity, "celsius");
  });
}
export function sliderButtonsHandler() {
  const prevBtn = document.querySelector(".carousel-button-prev");
  const nextBtn = document.querySelector(".carousel-button-next");
  const allSlides = document.querySelectorAll(".slide");
  const activeElements = [];
  const nonActive = [];

  if (allSlides[0].classList.contains("data-active")) {
    prevBtn.classList.add("end");
  }
  allSlides.forEach((slide) => {
    if (slide.classList.contains("data-active")) {
      activeElements.push(slide);
    } else {
      nonActive.push(slide);
    }
  });
  nextBtn.addEventListener("click", () => {
    if (allSlides[allSlides.length - 2].classList.contains("data-active")) {
      nextBtn.classList.add("end");
    }
    if (!allSlides[allSlides.length - 1].classList.contains("data-active")) {
      activeElements[0].classList.remove("data-active");
      nonActive.push(activeElements[0]);
      activeElements.shift();
      nonActive[0].classList.add("data-active");
      activeElements.push(nonActive[0]);
      nonActive.shift();
      prevBtn.classList.remove("end");
    }
  });
  prevBtn.addEventListener("click", () => {
    if (allSlides[1].classList.contains("data-active")) {
      prevBtn.classList.add("end");
    }
    if (!allSlides[0].classList.contains("data-active")) {
      activeElements[activeElements.length - 1].classList.remove("data-active");
      nonActive.unshift(activeElements[activeElements.length - 1]);
      activeElements.pop();
      nonActive[nonActive.length - 1].classList.add("data-active");
      activeElements.unshift(nonActive[nonActive.length - 1]);
      nonActive.pop();
      nextBtn.classList.remove("end");
    }
  });
}
