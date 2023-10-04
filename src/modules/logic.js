import getForecast from "./api";
import { displayForecast } from "./ui";

export function searchBarHandler() {
  const searchValue = document.querySelector("input[class='search']");
  searchValue.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const currentCity = searchValue.value;
      getForecast(currentCity).then((data) => {
        displayForecast(data);
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
export function getWMO(number) {
  const wmoInterpretation = {
    0: "Clear sky",
    1: "Predominantly clear with scattered clouds.",
    2: "Predominantly clear with scattered clouds.",
    3: "Predominantly clear with scattered clouds.",
    45: "Fog and depositing rime fog",
    48: "Fog and depositing rime fog",
    51: "Light drizzle at moderate and dense intensity",
    53: "Light drizzle at moderate and dense intensity",
    55: "Light drizzle at moderate and dense intensity",
    56: "Freezing drizzle at light and dense intenisty",
    57: "Freezing drizzle at light and dense intenisty",
    61: "Rain at moderate and heavy intensity",
    63: "Rain at moderate and heavy intensity",
    65: "Rain at moderate and heavy intensity",
    66: "Freezing rain at light an heavy intensity",
    67: "Freezing rain at light an heavy intensity",
    71: "Snow fall at slight, moderate and heavy intensity",
    73: "Snow fall at slight, moderate and heavy intensity",
    75: "Snow fall at slight, moderate and heavy intensity",
    77: "Snow grains",
    80: "Rain showers at slight, moderete and violent intensity",
    81: "Rain showers at slight, moderete and violent intensity",
    82: "Rain showers at slight, moderete and violent intensity",
    85: "Snow showers at slight and heavy intensity",
    86: "Snow showers at slight and heavy intensity",
    95: "Thunderstorm at slight and moderate intensity",
    96: "Thunderstorm with slight and heavy hail",
    99: "Thunderstorm with slight and heavy hail",
  };
  return wmoInterpretation[number];
}
