// script for burger menu
const btnBurger = document.querySelector('.btn-burger');
const containerBurgerMenu = document.querySelector('.header-burger-elements');
btnBurger.addEventListener('click', (event) => {
    console.log(event);
    btnBurger.classList.toggle('is-open');
    containerBurgerMenu.classList.toggle('is-open');
})
