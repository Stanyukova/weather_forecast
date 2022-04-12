import { getCity } from "./getCity";

describe("testing function: getCity", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ city: "Казань" }),
    })
  );

  it("getCity returns city", async () => {
    const city = await getCity();
    expect(city).toBe("Казань");
    expect(global.fetch).toHaveBeenCalledWith(
      "https://get.geojs.io/v1/ip/geo.json"
    );
  });
});
