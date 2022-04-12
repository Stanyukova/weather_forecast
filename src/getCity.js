export async function getCity() {
  let objJSON;
  try {
    const url = "https://get.geojs.io/v1/ip/geo.json";
    const response = await fetch(url);
    objJSON = await response.json();
  } catch (e) {
    throw new Error("error getCity");
  }
  return objJSON.city;
}
