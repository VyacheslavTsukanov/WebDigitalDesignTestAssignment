
// закрепленная кнопка для возврата наверх страницы
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  btnUp.addEventListener();



  // В верхнем меню справа расположить кнопку переключения темы (темная/светлая)
  // Выбираем кнопку
  const btn = document.querySelector(".btn-toggle");
  // Отслеживаем щелчок по кнопке
  btn.addEventListener("click", function () {
    // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
    document.body.classList.toggle("dark-theme");
  });

 // getDayInfo
 let inp = document.getElementById("date");
 inp.oninput = () => {
     document.getElementById("result").textContent =
         new Date(inp.value).toLocaleDateString(undefined, { 
          weekday: "long" 
        });
 };