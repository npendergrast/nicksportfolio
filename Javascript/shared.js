var menuLogo = document.querySelector(".menu-icon");
var mainMenu = document.querySelector(".main-menu");
var header = document.querySelector("header");
var main = document.querySelector("main");
var imageBack = document.querySelector(".slide-container");
var madeBy = document.querySelector(".madeby");

menuLogo.addEventListener('click', toggleDisplay);

function toggleDisplay() {
    mainMenu.classList.toggle("display-on");
    header.classList.toggle("header-fixed");
    main.classList.toggle("main-fixed");
    if (imageBack) {
        imageBack.classList.toggle("image-back");
    }
}


function shineTimer(){
    window.setTimeout(shine, 7000);
}

function shine() {
    madeBy.classList.add('madeby-shine');
    window.setTimeout(shineOff, 1500)
}

function shineOff() {
    madeBy.classList.remove('madeby-shine');
    shineTimer();
}

shineOff();
