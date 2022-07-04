import "./css/style.css";

import { weatherApp } from "./weatherApp";

import "./clock";
import "./menu";

if (window.innerWidth >= 768) {
  import(/* webpackChunkName: 'example-desktop' */ "./css/desktop.css");
}

weatherApp(document.querySelector("#app"));
