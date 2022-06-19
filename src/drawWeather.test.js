import { drawWeather } from "./drawWeather";

describe("testing function drawWeather", () => {
  let el;
  let divForWeather;
  beforeEach(async () => {
    el = document.createElement("div");
    el.innerHTML = `<div class="divForWeather"> </div>
                        <form>
                            <input
                                    id="userInput"
                                    placeholder="Type and press enter"
                                    required
                                    autofocus
                            />
                            <button>Add item</button>
                        </form>
                        <div class="list"></div>
                        <div class="map"></div>
                        `;
    divForWeather = el.querySelector(".divForWeather");
  });
  it("after execution drawMap", () => {
    const data = {
      name: "Казань",
      main: { temp: 5 },
      weather: [{ icon: "d03" }],
      wind: { speed: 5 },
    };
    drawWeather(divForWeather, data);
    const img = divForWeather.querySelector("img");
    expect(img).toBeTruthy();
    expect(drawWeather).toBeInstanceOf(Function);
    expect(el.querySelector("div").innerHTML).toMatch(/Казань/);
    expect(data.name).toBe("Казань");
    expect(data.main.temp).toBe(5);
    expect(img.src).toBe("https://openweathermap.org/img/wn/d03@2x.png");
  });
});
