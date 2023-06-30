const categoriesListRef = document.querySelector("#categories");
console.log("Number of categories:", categoriesListRef.childElementCount);

for (const childElement of categoriesListRef.children) {
  console.log("Category:", childElement.firstElementChild.textContent);
  console.log("Elements:", childElement.lastElementChild.childElementCount);
}
