const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("ul#ingredients");
const item = () => {
  for (const ingredient of ingredients) {
    const liElem = document.createElement("li");
    liElem.textContent = ingredient;
    liElem.classList.add("item");
    ul.append(liElem);
  }
 };
console.log(item());