const inputRef = document.querySelector("#font-size-control");
const outputRef = document.querySelector("#text");

outputRef.style.fontSize = `${inputRef.value}px`;
inputRef.addEventListener("input", (event) => {
  outputRef.style.fontSize = `${event.currentTarget.value}px`;
});
