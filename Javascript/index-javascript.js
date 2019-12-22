var image1 = new Image();
image1.src = 'Images/me.jpg';
var image2 = new Image();
image2.src = 'Images/akl1.jpg';
var image3 = new Image();
image3.src = 'Images/akl2.jpg';

var background_img = document.querySelector(".nick-background");
var slideArray = ["url('Images/me.jpg')", "url('Images/akl1.jpg')", "url('Images/akl2.jpg')"];
var index = 0;

setTimeout(fadeOut, 5000);

function fadeOut() {
    background_img.classList.toggle("fade");
    setTimeout(backgroundChange, 500);
}

function fadeIn() {
    background_img.classList.toggle("fade");
    setTimeout(fadeOut, 5000)
}

function backgroundChange() {
    if (index == 0) {
        background_img.style.backgroundImage = slideArray[1];
        index = 1;
        fadeIn();
    } else if (index == 1) {
        background_img.style.backgroundImage = slideArray[2];
        index = 2;
        fadeIn();
    } else {
        background_img.style.backgroundImage = slideArray[0];
        index = 0;
        fadeIn();
    }
}


