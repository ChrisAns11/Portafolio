const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// mostrar el Menu en el Movil
const mobileMenu = () => {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);