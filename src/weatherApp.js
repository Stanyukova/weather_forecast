import { getCity } from "./getCity";
import { getWeather } from "./getWeather";
import { readList } from "./readList";
import { saveList } from "./saveList";
import { drawWeather } from "./drawWeather";
import { drawMap } from "./drawMap";
import { drawList } from "./drawList";

export async function weatherApp(elem) {
  const el = elem;
  const MAP_KEY = "AIzaSyDANLeEnr2Wf05hG0wxHA0Ucqz5CeZF_Cw";
  const APP_ID = "6483f07f86904206d5977c6c6ae4e4e1";
  const divForWeather = el.querySelector(".divForWeather");
  const map = el.querySelector(".map");
  const form = el.querySelector("form");
  const listEl = el.querySelector(".list");

  const data = await getWeather(await getCity(), APP_ID);
  drawWeather(divForWeather, data);
  drawMap(map, await getCity(), MAP_KEY);

  const items = await readList();

  drawList(listEl, items);

  listEl.addEventListener("click", async (ev) => {
    const liElement = ev.target;
    const city = liElement.innerText;
    const dataWeather = await getWeather(city, APP_ID);
    drawWeather(divForWeather, dataWeather);
    drawMap(map, city, MAP_KEY);
  });

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const formElement = ev.target;
    const input = formElement.querySelector("input");
    const { value } = input;
    input.value = "";
    const city = value;
    const data1 = await getWeather(city, APP_ID);

    drawWeather(divForWeather, data1);
    drawMap(map, city, MAP_KEY);

    items.push(value);

    if (items.length > 10) {
      items.splice(0, 1);
    }

    drawList(listEl, items);
    saveList(items);
  });
}
