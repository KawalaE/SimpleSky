import "../style.css";

import CloudRain from "../assets/pictures/cloud.svg";

const cloudRaining = new Image();
cloudRaining.src = CloudRain;

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
    searchBar.classList.add("search");
    const searchBtn = document.createElement("button");
    searchBtn.id = "search";
    searchBtn.classList.add("search");
    searchDiv.append(searchBar, searchBtn);
    page.appendChild(searchDiv);
  }
}

export default function createUI() {
  UI.createFavicon();
  UI.createSearchBar();
}