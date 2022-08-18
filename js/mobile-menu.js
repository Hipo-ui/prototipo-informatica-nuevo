const boton = document.querySelector('#menu-botton');
const navbar = document.querySelector('.navbar-nav');
const brand = document.querySelector('.brand');

boton.addEventListener('click', () => {
    boton.classList.toggle("navbar-menu-close");

    navbar.classList.toggle("block");
    navbar.classList.toggle("flex");
    navbar.classList.toggle("flex-col");

    brand.classList.toggle("block");
})
