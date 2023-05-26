/* 
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
 Если инпут пустой, в спане должна отображаться строка "Anonymous".
 */

let input = document.querySelector("#name-input");
let span = document.querySelector("#name-output");

input.oninput = showText;

function showText() {
    // console.log(input.value);
    if (input.value) {
        span.innerText = input.value;
    }
    else {
        span.innerText = "Anonymous";
    }
    
}