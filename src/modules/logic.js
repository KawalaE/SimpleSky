import getForecast from "./api";

export default function searchBarHandler() {
  const searchValue = document.querySelector("input[class='search']");
  searchValue.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const currentCity = searchValue.value;
      getForecast(currentCity);
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
