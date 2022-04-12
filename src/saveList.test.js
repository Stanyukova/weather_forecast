import { saveList } from "./saveList";

describe("testing function: saveList", () => {
  it("testing function saveList", () => {
    saveList(["Москва", "Казань"]);
    const data = JSON.parse(localStorage.getItem("items")) || [];
    expect(data).toEqual(["Москва", "Казань"]);
  });
});

describe("saveHistory", () => {
  it("saves history to localStorage", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    saveList([1, 2]);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
