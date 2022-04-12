import { getWeather } from "./getWeather";

describe("testing function: getWeather", () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  it("should return object data", async () => {
    const data = {
      name: "Казань",
      main: { temp: 5 },
      weather: [{ icon: "d03" }],
    };
    global.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      })
    );

    const res = await getWeather("Казань");

    expect(res).toEqual(data);
  });

  it("should return error", async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject());
    try {
      await getWeather();
    } catch (e) {
      expect(e).toMatch("Invalid City");
    }
  });
});
