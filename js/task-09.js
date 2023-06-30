function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const changeColorBtnRef = document.querySelector(".change-color");
const colorNameRef = document.querySelector(".color");

changeColorBtnRef.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  colorNameRef.textContent = randomColor;
  bodyRef.style.backgroundColor = `${randomColor}`;
});


