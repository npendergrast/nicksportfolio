const popUp = document.querySelector(".pop-up");
document.body.addEventListener('click', slideDown);


function slideUp(){
    popUp.classList.add("slide-up");
}

function slideDown(){
    popUp.classList.remove("slide-up");
}

function slideTimer() {
    window.setTimeout(slideUp, 1000);
}

slideTimer();