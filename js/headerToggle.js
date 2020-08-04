const btn = document.querySelector(".btn");
const header = document.querySelector("header");
const switchText = document.querySelector(".switch-theme p");
btn.addEventListener("click", changeTheme);

let clicked = false;
function changeTheme() {
  if (!clicked) {
    changeToogleLight();
    changeHeaderLight();
    clicked = true;
  } else {
    changeToogleDark();
    changeHeaderDark();

    clicked = false;
  }
}

function changeToogleDark() {
  btn.parentNode.style.justifyContent = "flex-start";
  btn.style.background = "hsl(232, 19%, 15%)";
}

function changeToogleLight() {
  btn.style.background = "hsl(225, 100%, 98%)";
  btn.parentNode.style.justifyContent = "flex-end";
}

function changeHeaderDark() {
  header.style.background = "hsl(232, 19%, 15%)";
  header.style.color = "white";
  switchText.textContent = "Dark Mode";
  switchText.style.color = "hsl(228, 34%, 66%)";
}

function changeHeaderLight() {
  header.style.background = "hsl(225, 100%, 98%)";
  header.style.color = "hsl(230, 17%, 14%)";
  switchText.textContent = "Ligth Mode";
  switchText.style.color = " hsl(228, 12%, 44%)";
}
