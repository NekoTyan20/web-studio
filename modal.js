// script for modal window

const openModal = document.querySelector('.button-hero');
const backdrop = document.querySelector('.backdrop');
const closeFormBtn = document.querySelector('.close-form-btn');
openModal.addEventListener("click", () => {
    backdrop.classList.remove('is-hidden');
});
closeFormBtn.addEventListener("click", () => {
    backdrop.classList.add('is-hidden');
})
