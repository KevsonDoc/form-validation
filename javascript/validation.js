const main = document.querySelector("main");
const inputTheme = document.querySelector(".container-theme input#radio");
const backgroiundImage = document.querySelector("section.enterprise");
const spans = document.querySelectorAll("label");
const form = document.querySelector("form");
const h1 = document.querySelector("h1");
const button = document.querySelector("button")

h1.style.color = "#E3E3E3";
button.style.color = "#E3E3E3";
main.style.backgroundColor = "#242038";
backgroiundImage.classList.add("dark");
spans.forEach(item => {
  item.style.color = "#E3E3E3";
});
form.style.backgroundColor = "#5231F7";

inputTheme.addEventListener("click", definitionTheme);

if (localStorage.getItem("theme") === "light") {
  main.style.backgroundColor = "#E3E3E3";
  backgroiundImage.classList.remove("dark");
  inputTheme.checked = true;
  h1.style.color = "#000000";
  button.style.color = "#000000";

  backgroiundImage.classList.add("dark");
  spans.forEach(item => {
    item.style.color = "#000000";
  });

  form.style.backgroundColor = "#006E90";

}

function definitionTheme() {
  if (inputTheme.checked === false) {
    main.style.backgroundColor = "#242038";
    backgroiundImage.classList.add("dark");
    localStorage.setItem("theme", "dark");
    form.style.backgroundColor = "#006E90";
    button.style.backgroundColor = "#000";

    spans.forEach(item => {
      item.style.color = "#E3E3E3";
    }); 
  }

  if (inputTheme.checked === true) {
    main.style.backgroundColor = "#E3E3E3";
    h1.style.color = "#000000";
    button.style.color = "#000000";
  
    backgroiundImage.classList.add("dark");
    spans.forEach(item => {
      item.style.color = "#000000";
    });

    button.style.color = "#E3E3E3";

    button.style.backgroundColor = "#006E90";

    form.style.backgroundColor = "#FF5e00";
    backgroiundImage.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

definitionTheme();

const input = document.querySelectorAll("form input");
const spanDocument = document.querySelectorAll("span");

input.forEach((element, index) => {
  element.onclick = function () {
    element.style.border = "1px solid rgba(123, 123, 123, 0)";
    form.style.border = "1px solid rgba(123, 123, 123, 0)";
    spanDocument[index].innerText = "";
  }
});

// ========================================
button.addEventListener("click", (event) => {
  event.preventDefault();

  const validation = new Array();


  if (input[0].value.length <= 0) {
    validation.push(0);
    spanDocument[0].innerText = "O campo de nome não pode ser vazio"
  }

  if (!input[1].value.includes("@")) {
    validation.push(1);
    spanDocument[1].innerText = "Formato de email inválido"
  }

  if (input[2].value.length <= 7) {
    validation.push(2);
    spanDocument[2].innerText = "Sua senha deve ter no mínimo 8 caracteres"
  }

  if (!(input[3].value === input[2].value) || input[2].value.length <= 7) {
    validation.push(3);
    spanDocument[3].innerText = "Senha não compativel"
  }

  if (input[4].value <= 0) {
    validation.push(4);
    spanDocument[4].innerText = "data de nascimento inválida"
  }

  if (!validation.length <= 0) {
    form.classList.add("validation-erro");
    form.style.border = "1px solid #FFFF00";

    const formErroAnimation = document.querySelector(".validation-erro");

    if(formErroAnimation) {
      formErroAnimation.addEventListener("animationend", (event) => {
        if (event.animationName === "nono") {
          formErroAnimation.classList.remove("validation-erro");
        }
      });
    }
  }

  

  // form.classList.remove("validation-erro");

  input.forEach((item, index) => {
    if (validation.includes(index)) {
      item.style.border = "1px solid #FF0000";
    } else if (!validation.includes(index)) {
      item.style.border = "1px solid #00FF00";
    }

    if (validation.length <= 0) {
      item.style.border = "1px solid rgba(123, 123, 123, 0)";
    }
  });
});