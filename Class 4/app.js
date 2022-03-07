
/*
function changeBackground() {
  document.body.style.backgroundColor = "#C00C00";
}
*/
const myBtn = document.querySelector(".btn btn_inline")
function changeBackground() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = `#${randomColor}`;
}

document.querySelector("btn btn_inline").style.color = "randomColor";

const eventListenerButton = document.querySelector("click",changeBackground)