const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const birthday = "27 march 2023";
function countdown() {
  const birthdayDate = new Date(birthday);
  const currentDate = new Date();

  const totalSeconds = new Date(birthdayDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const minutes = Math.floor(totalSeconds / 60) % 60;

  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);

  console.log(days, hours, minutes, seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
//initial call
setInterval(countdown, 1000);
