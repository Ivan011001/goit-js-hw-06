const categoriesListRef = document.querySelector("#categories");
const categoriesListItemRef = categoriesListRef.querySelectorAll(".item");

console.log(categoriesListItemRef.length);
categoriesListItemRef.forEach((categorie) => {
  console.log(categorie.firstElementChild.textContent);
  console.log(categorie.lastElementChild.children.length);
});

// console.log("Number of categories:", categoriesListRef.childElementCount);

// for (const childElement of categoriesListRef.children) {
//   console.log("Category:", childElement.firstElementChild.textContent);
//   console.log("Elements:", childElement.lastElementChild.childElementCount);
// }
