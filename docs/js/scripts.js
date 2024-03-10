// бургер меню
const openMenu = document.querySelector(".burger");
const container = document.querySelector(".container");

openMenu.addEventListener("click", function () {
  container.classList.toggle("open");
});

// Функція, яка видаляє клас, якщо розмір екрану перевищує 1120px
function removeClassIfLargeScreen() {
  if (window.innerWidth > 1120) {
    container.classList.remove("open");
  }
}

// Слідкуємо за змінами розміру вікна
window.addEventListener("resize", removeClassIfLargeScreen);