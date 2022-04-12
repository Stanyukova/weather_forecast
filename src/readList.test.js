import { readList } from "./readList";

describe("testing function: readList", () => {
  it("testing function readList", async () => {
    localStorage.setItem("items", JSON.stringify(["Москва", "Казань"]));
    const data = await readList();
    expect(data).toEqual(["Москва", "Казань"]);
  });
});
describe("readHistory", () => {
  it("recieves history list", async () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "getItem");
    const data = await readList();

    expect(localStorage.getItem).toHaveBeenCalled();
    expect(data).toBeInstanceOf(Object);
  });
});
