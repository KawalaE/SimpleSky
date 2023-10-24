import { createFavicon, createSearchBar, crateUnitButtons, createFooter } from "./modules/ui";
import { searchBarHandler, unitHandler, createLoader } from "./modules/logic";

createFavicon();
createSearchBar();
createLoader();
crateUnitButtons();
const storageUnit = localStorage.getItem("unit");
const storageSpeed = localStorage.getItem("speed");
if (storageUnit === "fahrenheit") {
  document.querySelector(".celsius-btn").classList.remove("unit-current");
  document.querySelector(".fahrenheit-btn").classList.add("unit-current");
} else {
  document.querySelector(".celsius-btn").classList.add("unit-current");
  document.querySelector(".fahrenheit-btn").classList.remove("unit-current");
}
searchBarHandler(storageUnit, storageSpeed);
unitHandler();
createFooter()