var menuLogo = document.querySelector(".menu-icon");
var mainMenu = document.querySelector(".main-menu");
var header = document.querySelector("header");
var main = document.querySelector("main");

menuLogo.addEventListener('click', toggleDisplay);

function toggleDisplay() {
    mainMenu.classList.toggle("display-on");
    header.classList.toggle("header-fixed");
    main.classList.toggle("main-fixed");
}