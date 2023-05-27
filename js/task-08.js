/*
Напиши скрипт управления формой логина.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
*/
const form = document.querySelector(".login-form");
// console.log(form);

const email = form.elements.email;
// console.log(email);

const password = form.elements.password;
// console.log(password);

form.onsubmit = checkForm;

function checkForm(event) {
  // прерывает действие по умолчанию
  event.preventDefault();
  
  if (password.value == "" || email.value == "") {
    alert("empty Input");
  }
  else {
    let data = { email: email.value, password: password.value };
    console.log(data);
    form.reset();
  }
 
}

