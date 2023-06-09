/*Напиши скрипт, который для каждого элемента массива ingredients:

1.Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
2.Добавит название ингредиента как его текстовое содержимое.
3.Добавит элементу класс item.
4.После чего вставит все <li> за одну операцию в список ul#ingredients.
*/
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// let ul = document.getElementById("ingredients");
// console.log(ul);

// ingredients.forEach(function (ingrd) {
//   let li = document.createElement("li");
//   let text = document.createTextNode(ingrd);
//   li.appendChild(text);
//   // console.log(li);
//   ul.appendChild(li);

// }) 

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map(ingredient => {
  const itemList = document.createElement('li');
  itemList.classList.add('item');
  itemList.textContent = ingredient;

  return itemList;
});
console.log(ingredientsItems);

ingredientsList.append(...ingredientsItems);