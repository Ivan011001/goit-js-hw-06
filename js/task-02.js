const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsListRef = document.querySelector("#ingredients");
const markup = ingredients
  .map((ingredient) => `<li class='item'>${ingredient}</li>`)
  .join("");

ingredientsListRef.insertAdjacentHTML("afterbegin", markup);
