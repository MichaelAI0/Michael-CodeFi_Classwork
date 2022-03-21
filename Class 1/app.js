const setH1 = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("header").style.color = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

btn_btnOne.addEventListener("click", setH1);
setH1();