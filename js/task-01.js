/* В HTML есть список категорий ul#categories.
1.Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
2.Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>)
и количество элементов в категории (всех вложенных в него <li>).
Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

В результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/
const categories = document.querySelectorAll(".item");
console.log("Number of categories: " + categories.length);

categories.forEach(function (catg) {
    let title = catg.querySelector("h2");
    console.log("Category: " + title.innerText);
    let elems = catg.querySelectorAll('li');
    console.log("Elements: " + elems.length);
}) 
