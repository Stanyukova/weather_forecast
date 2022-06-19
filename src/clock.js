const clock = document.querySelector(".clock");

function time() {
  const date = new Date();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const min =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const sec =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  const day = new Array(
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
  );

  const month = new Array(
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  );

  const nDay = `   ${day[date.getDay()]} ${date.getDate()}
 ${month[date.getMonth()]} ${date.getFullYear()} г.`;

  clock.innerHTML = `${hours}:${min}:${sec}${nDay} `;
}
setInterval(time, 1000);
