import getForecast from "./api";
import { displayMainForecast } from "./ui";

export function searchBarHandler() {
  const searchValue = document.querySelector("input[class='search']");
  searchValue.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const currentCity = searchValue.value;
      getForecast(currentCity).then((data) => {
        displayMainForecast(currentCity, data);
      });
    }
  });
  const loupeBtn = document.querySelector("button[class='search']");
  loupeBtn.addEventListener("click", () => {
    const currentCity = searchValue.value;
    getForecast(currentCity);
  });
  const deleteBtn = document.querySelector(".button-delete");
  deleteBtn.addEventListener("click", () => {
    searchValue.value = "";
  });
}

export function sliderButtonsHandler() {
  const prevBtn = document.querySelector(".carousel-button-prev");
  const nextBtn = document.querySelector(".carousel-button-next");
  const allSlides = document.querySelectorAll(".slide");
  const activeElements = [];
  const nonActive = [];

  allSlides.forEach((slide) => {
    if (slide.classList.contains("data-active")) {
      activeElements.push(slide);
    } else {
      nonActive.push(slide);
    }
  });
  nextBtn.addEventListener("click", () => {
    if (!allSlides[5].classList.contains("data-active")) {
      prevBtn.classList.remove("end");
      activeElements[0].classList.remove("data-active");
      nonActive.push(activeElements[0]);
      activeElements.shift();
      nonActive[0].classList.add("data-active");
      activeElements.push(nonActive[0]);
      nonActive.shift();
    } else {
      nextBtn.classList.add("end");
    }
  });
  prevBtn.addEventListener("click", () => {
    if (!allSlides[0].classList.contains("data-active")) {
      nextBtn.classList.remove("end");
      activeElements[activeElements.length - 1].classList.remove("data-active");
      nonActive.unshift(activeElements[activeElements.length - 1]);
      activeElements.pop();
      nonActive[nonActive.length - 1].classList.add("data-active");
      activeElements.unshift(nonActive[nonActive.length - 1]);
      nonActive.pop();
    } else {
      prevBtn.classList.add("end");
    }
  });
}