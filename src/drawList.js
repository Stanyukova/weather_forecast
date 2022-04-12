export function drawList(elem, items) {
  const element = elem;
  const list = items.map((item) => `<li>${item}</li>`).join("");
  element.innerHTML = `<ul class="boxBlock">${list}</ul>`;
}
