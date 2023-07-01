const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsListRef = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient) => {
  const newLi = document.createElement("li");
  newLi.textContent = `${ingredient}`;
  newLi.classList.add("item");
  return newLi;
});

ingredientsListRef.append(...markup);
