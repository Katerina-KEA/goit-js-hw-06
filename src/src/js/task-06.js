/*
Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

- Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
- Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const elem = document.querySelector("#validation-input");
// console.log(elem);
elem.onblur = addBorder;

function addBorder() {
  let num = elem.value.length;
  let length = elem.getAttribute("data-length");
  length = Number(length);
  num = Number(num);
  if (num === length) {
    elem.classList.add("valid");
  }
  else {
    elem.classList.add("invalid");
  }
  console.log(length, num);
}

