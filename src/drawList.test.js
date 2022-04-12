import { drawList } from "./drawList";

describe("testing function drowList", () => {
  let el;
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
  });

  it("Draw list after loading", () => {
    const myList = el.querySelector(".list");
    drawList(myList, ["Москва", "Казань", "Санкт-Петербург"]);
    const ul = myList.querySelector("ul");
    const li = ul.querySelectorAll("li");
    expect(myList).toBeTruthy();
    expect(ul).toBeTruthy();
    expect(li).toBeTruthy();
    expect(li.length).toBe(3);
  });
});
