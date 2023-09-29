import "../style.css";

import CloudRain from "../assets/pictures/weather-favicon.svg";
import Magnifier from "../assets/pictures/magnifier.svg";
import Delete from "../assets/pictures/delete.svg";

const cloudRaining = new Image();
cloudRaining.src = CloudRain;

const magnifier = new Image();
magnifier.src = Magnifier;

const deleteX = new Image();
deleteX.src = Delete;

class UI {
  static createFavicon() {
    const head = document.querySelector("head");
    const favicon = document.createElement("link");
    favicon.setAttribute("rel", "shortcut icon");
    favicon.setAttribute("href", cloudRaining.src);
    head.append(favicon);
  }

  static createSearchBar() {
    const page = document.createElement("div");
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
}

export default function createUI() {
  UI.createFavicon();
  UI.createSearchBar();
}
