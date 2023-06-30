const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// const ingredientsListRef = document.querySelector("#ingredients");

// for (const ingredient of ingredients) {
//   const newLi = document.createElement("li");
//   newLi.textContent = `${ingredient}`;
//   newLi.classList.add("item");
// }

const ingredientsListRef = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const newLi = document.createElement("li");
  newLi.textContent = `${ingredient}`;
  newLi.classList.add("item");

  ingredientsListRef.append(newLi);
}
