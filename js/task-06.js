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


const inputText = document.querySelector("#validation-input");
console.log(inputText.getAttribute("data-length"));

inputText.addEventListener('blur', event => {
  if (event.target.value.length === Number.parseInt(inputText.getAttribute("data-length"))) {
    inputText.classList.add('valid');

    if (inputText.classList.contains('invalid')) {
      inputText.classList.remove('invalid');
    }

  } else {
    if (inputText.classList.contains('valid')) {
      inputText.classList.remove('valid');
    }
    
    inputText.classList.add('invalid');
  }
})
