/*
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

const range = document.querySelector("#font-size-control");
// console.log(range);
const text = document.querySelector("#text");
// console.log(text);
range.oninput = changeSizeText;

function changeSizeText() {
    let num = range.value;
    // console.log(num);
    text.style.fontSize = num + "px";   
}
