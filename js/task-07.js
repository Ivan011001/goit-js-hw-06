const inputRef = document.querySelector("#font-size-control");
const outputRef = document.querySelector("#text");

inputHandler();
inputRef.addEventListener("input", inputHandler);
function inputHandler() {
  outputRef.style.fontSize = `${inputRef.value}px`;
}

// outputRef.style.fontSize = `${inputRef.value}px`;
// inputRef.addEventListener("input", (event) => {
//   outputRef.style.fontSize = `${event.currentTarget.value}px`;
// });
