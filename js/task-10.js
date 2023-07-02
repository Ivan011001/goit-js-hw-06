function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("input");

createBtnRef.addEventListener("click", () => {
  createBoxes(inputRef.value);
});

destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let startWidth = 30;
  let startHeigth = 30;

  if (amount < Number(inputRef.min) || amount > Number(inputRef.max)) {
    return alert("Invalid input. Choose number from 1 to 100");
  }

  for (let i = 1; i <= amount; i += Number(inputRef.step)) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${startWidth}px`;
    newDiv.style.height = `${startHeigth}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxesRef.append(newDiv);

    startWidth += 10;
    startHeigth += 10;
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = 0;
}
