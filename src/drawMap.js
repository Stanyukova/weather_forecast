export function drawMap(elem, city) {
  const mapKey = "AIzaSyDANLeEnr2Wf05hG0wxHA0Ucqz5CeZF_Cw";
  const element = elem;
  const cityName = city.split(" ").join("+");
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${cityName}&size=500x500&key=${mapKey}`;

  element.innerHTML = `<img src=${url} alt="map">`;
}
