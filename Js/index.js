const $menu = document.querySelector(".nav");
const $menuDrop = document.querySelector(".menu-drop");
const $btnmenu = document.querySelector(".btn-menu");
const $linea1 = document.querySelector("#linea1");
const $linea2 = document.querySelector("#linea2");
const $linea3 = document.querySelector("#linea3");

$btnmenu.addEventListener("click", () => {
  $linea1.classList.toggle("activelinea1__bars-menu");
  $linea2.classList.toggle("activelinea2__bars-menu");
  $linea3.classList.toggle("activelinea3__bars-menu");
  $menu.classList.toggle("menu-activado");
  $menuDrop.classList.toggle("activa-menu-drop");
});

$menuDrop.addEventListener("click", () => {
  $linea1.classList.toggle("activelinea1__bars-menu");
  $linea2.classList.toggle("activelinea2__bars-menu");
  $linea3.classList.toggle("activelinea3__bars-menu");
  $menu.classList.toggle("menu-activado");
  $menuDrop.classList.toggle("activa-menu-drop");
});

/*termina*/

const letters = document.querySelectorAll(".p-profession");

letters.forEach((letter) => {
  letter.addEventListener("mouseenter", () => {
    toggle(letter);
  });
});

function toggle(letter) {
  letter.classList.add("bouncing");
  letter.addEventListener("animationend", () => {
    letter.classList.remove("bouncing");
  });
}


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(1.2)';
    setTimeout(() => {
      card.style.transform = 'scale(1)';
    }, 300);
  });
});
