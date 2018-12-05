const bxClock = document.querySelector(".bx_clock"),
  textTime = bxClock.querySelector("h4");

function getTime() {
  const date = new Date(),
    hours = date.getDate(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  textTime.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();