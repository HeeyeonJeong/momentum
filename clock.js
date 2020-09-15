const clockContainer = document.querySelector(".clock");
const clock = clockContainer.querySelector("h1");

function init() {
  const data = new Date();
  const hours = data.getHours();
  const minutes = data.getMinutes();
  const seconds = data.getSeconds();

  clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds} `;
}

let time = setInterval(init, 1000);
