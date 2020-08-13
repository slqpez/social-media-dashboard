const btn = document.querySelector(".btn");
const header = document.querySelector("header");
const switchText = document.querySelector(".switch-theme p");
const headerWrap = document.querySelector(".wrapper-header");
const statsI = document.querySelectorAll(".stats-item");
const overI = document.querySelectorAll(".overview-item");
const fNumber = document.querySelectorAll(".f-number ");
const oNumber = document.querySelectorAll(".n-overview ");
const h2 = document.querySelector("h2");

const body = document.querySelector("body");

btn.addEventListener("click", changeTheme);

let clicked = false;
function changeTheme() {
  if (!clicked) {
    changeToogleLight();
    changeHeaderLight();
    changeBodyLight();
    changeItemsLight();
    clicked = true;
  } else {
    changeToogleDark();
    changeHeaderDark();
    changeBodyDark();
    changeItemsDark();

    clicked = false;
  }
}

function changeToogleDark() {
  btn.parentNode.style.justifyContent = "flex-start";
  btn.style.background = "hsl(232, 19%, 15%)";
  btn.parentNode.style.backgroundImage =
    "linear-gradient(to right,hsl(210, 78%, 56%) ,hsl(146, 68%, 55%))";
}

function changeToogleLight() {
  btn.style.background = "hsl(225, 100%, 98%)";
  btn.parentNode.style.justifyContent = "flex-end";
  btn.parentNode.style.background = "hsl(230, 22%, 74%)";
}

function changeHeaderDark() {
  header.style.background = "hsl(232, 19%, 15%)";
  header.style.color = "white";
  headerWrap.style.background = "hsl(232, 19%, 15%)";
  switchText.textContent = "Dark Mode";
  switchText.style.color = "white";
}

function changeHeaderLight() {
  header.style.background = "hsl(225, 100%, 98%)";
  header.style.color = "hsl(230, 17%, 14%)";
  headerWrap.style.background = "hsl(225, 100%, 98%)";
  switchText.textContent = "Ligth Mode";
  switchText.style.color = " hsl(228, 12%, 44%)";
}

function changeBodyLight() {
  body.style.background = "white";
  h2.style.color = "black";
}

function changeBodyDark() {
  body.style.background = "hsl(230, 17%, 14%)";
  h2.style.color = "white";
}

function changeItemsLight() {
  const stats = Array.from(statsI);
  const over = Array.from(overI);
  const numbers = Array.from(fNumber);
  const numbersO = Array.from(oNumber);
  stats.forEach((item) => {
    item.style.background = "hsl(227, 47%, 96%)";
  });

  over.forEach((item) => {
    item.style.background = "hsl(227, 47%, 96%)";
  });

  numbers.forEach((number) => {
    number.style.color = "black";
  });

  numbersO.forEach((number) => {
    number.style.color = "black";
  });
}

function changeItemsDark() {
  const stats = Array.from(statsI);
  const over = Array.from(overI);
  const numbers = Array.from(fNumber);
  const numbersO = Array.from(oNumber);
  stats.forEach((item) => {
    item.style.background = "hsl(228, 28%, 20%)";
  });

  over.forEach((item) => {
    item.style.background = "hsl(228, 28%, 20%)";
  });
  numbers.forEach((number) => {
    number.style.color = "white";
  });

  numbersO.forEach((number) => {
    number.style.color = "white";
  });
}
