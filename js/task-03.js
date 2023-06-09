/*Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.
Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

-Все элементы галереи должны добавляться в DOM за одну операцию вставки.
-Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
*/
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



// let ul = document.querySelector(".gallery");
// variant 1
// images.forEach(function (img) {
//   let li = document.createElement("li");
//   let imgEl = document.createElement("img");
//   imgEl.src = img.url;
//   imgEl.alt = img.alt;
//   li.appendChild(imgEl);
//   ul.appendChild(li);
// }); 

// variant 2
// images.forEach(function (img) {
//   // let str = '<li><img src="' + img.url + '" alt="' + img.alt + '"></li>'; 
//   let str = `<li><img src="${img.url}" alt="${img.alt}"></li>`;
//   ul.insertAdjacentHTML("beforeEnd", str);
// }); 

const galleryList = document.querySelector('.gallery');
const addGalleryItemList = images.map(image =>
  `<li class="gallery-item"><img class="gallery_img" src="${image.url}" alt="${image.alt}"></li>`)
  .join('');

galleryList.insertAdjacentHTML("beforeEnd", addGalleryItemList);
  console.log(galleryList);