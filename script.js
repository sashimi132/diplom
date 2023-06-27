const inputName = document.querySelectorAll('.maps-form input')[0]
const inputText = document.querySelectorAll('.maps-form input')[1]
const message = document.querySelector('.maps-form a')
inputName.addEventListener('input', ()=>{
    message.setAttribute('href', `mailto:blog@htmlacademy.ru?body=Здраствуйте, меня зовут ${inputName.value}. <br> Мой вопрос: ${inputText.value}`)
})
inputText.addEventListener('input', ()=>{
    message.setAttribute('href', `mailto:blog@htmlacademy.ru?body=Здраствуйте, меня зовут ${inputName.value}. <br> Мой вопрос: ${inputText.value}`)
})

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;


const menu = document.querySelector("#menu").cloneNode(1);


hamb.addEventListener("click", hambHandler);


function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}


function renderPopup() {
  popup.appendChild(menu);
}


const links = Array.from(menu.children);


links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
