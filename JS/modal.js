
var modal = document.getElementById('myModal');
var myBtn = document.getElementsByClassName('myBtn');
var close = document.getElementsByClassName('close')[0];

// Открывает модальное окно разными кнопками
for (var i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
}
// проверка на закрытия модального окна
close.addEventListener('click', function() {
  closeModalWindow();
})

// Функция открывает окно
function openModalWindow() {
  modal.style.display = "block";
}

// Функция закрывает окно
function closeModalWindow() {
  modal.style.display = "none";
}

// Функция отображает сообщение о покупке
document.querySelector("#submit").onclick = function(){
  alert("Вы купили продукт !!!");
}