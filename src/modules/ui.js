import '../style.css';

import CloudRain from '../assets/pictures/cloud.svg';

const cloudRaining = new Image();
cloudRaining.src = CloudRain;

class UI {
  static createFavicon() {
    const head = document.querySelector('head');
    const favicon = document.createElement('link');
    favicon.setAttribute('rel', 'shortcut icon');
    favicon.setAttribute('href', cloudRaining.src);
    head.append(favicon);
  }
}

export default function createUI() {
  UI.createFavicon();
}