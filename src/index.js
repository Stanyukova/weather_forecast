import "./css/style.css";
import "./css/media.css";

import { weatherApp } from "./weatherApp";

import "./clock";
import "./menu";

import "./js/script";
import "./js/slick.min";

// if (window.innerWidth >= 576) {
//   import(/* webpackChunkName: 'example-desktop' */ "./css/desktop.css");
// };
// if (window.innerWidth >= 320) {
//   import(/* webpackChunkName: 'example-desktop' */ "./css/mobile.css");
// };

// if (window.innerWidth >= 768) {
//   import(/* webpackChunkName: 'example-desktop' */ "./css/desktop.css");
// }

weatherApp(document.querySelector("#app"));
