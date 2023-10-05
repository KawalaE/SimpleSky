import getForecast from "./api";
import { displayMainForecast } from "./ui";

export default function searchBarHandler() {
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
