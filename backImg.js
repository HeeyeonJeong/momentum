const body = document.querySelector("body");

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `/assets/${imgNumber + 1}.jpg`;
  body.appendChild(image);
  image.classList.add("bgImage");
}

function getNumber() {
  const number = Math.floor(Math.random() * 5);
  return number;
}

function init() {
  const randomNumber = getNumber();
  paintImage(randomNumber);
}

init();
