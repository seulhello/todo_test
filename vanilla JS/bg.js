const body = document.querySelector("body");
const IMG_NUMBER = 2;

function printImg(imgNumber) {
  const image = new Image();
  image.src = `image/bg0${imgNumber + 1}.jpg`;
  const imgNum = parseInt(`${imgNumber + 1}`);
  if (imgNum === 1) {
    body.style.color = "#fff";
  }
  image.classList.add('bgImage');
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  printImg(randomNumber);
}

init();