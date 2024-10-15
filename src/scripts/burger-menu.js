const burgerMenu = document.querySelector('.burger-menu');
const navElements = document.querySelector('.nav-elements');
const dropdownBackground = document.querySelector('.dropdown-background');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navElements.classList.toggle('active');
    dropdownBackground.classList.toggle('active');
});