/*Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
- Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
- Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
- Обновляй интерфейс новым значением переменной counterValue.
*/

let counterValue = 0;
let decrement = document.querySelector("[data-action='decrement']");
// console.log(decrement);
let increment = document.querySelector("[data-action='increment']");
// console.log(increment);
let out = document.querySelector("#value");

increment.onclick = function () {
    counterValue = counterValue + 1; // ++
    out.innerText = counterValue;
}

decrement.onclick = function () {
  counterValue = counterValue - 1; // ++
  out.innerText = counterValue;
};


