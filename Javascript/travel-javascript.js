var timer = null;
var index = 0;
var imageBox = document.querySelector(".img");
var forward = document.querySelector(".cont-forward");
var back = document.querySelector(".cont-back");
var textField = document.getElementsByClassName("float-text");

var imageArray = [
    { img: "Images/Travel/Haarlem.jpg", text: "Haarlem, Holland" },
    { img: "Images/Travel/Nice.jpg", text: "Nice, France"},
    { img: "Images/Travel/Peru.jpg", text: "Machu Picchu, Peru"},
    { img: "Images/Travel/Athens.jpg", text: "Athens, Greece"},
    { img: "Images/Travel/Capetown.jpg", text: "Capetown, South Africa" },
    { img: "Images/Travel/Paris.jpg", text: "Paris, France"},
    { img: "Images/Travel/StrandBakkumNoord.jpg", text: "Heemskerk, Holland" }
];

forward.addEventListener("click", moveForward);
back.addEventListener("click", moveBack);

function moveForward() {
    window.clearTimeout(timer);
    slideChange();
}

function moveBack() {
    window.clearTimeout(timer);
    slideChange(1);
}

function startSlide() {
    timer = window.setTimeout(slideChange, 4000);
    timer;
}



function slideChange(x) {
    if (x == 1) {
        if (index >= 2) {
            index -= 2;
        } else {
            index = (imageArray.length - 1);
        }
    }
    if (index <= (imageArray.length - 1)) {
        imageBox.src = imageArray[index].img;
        textField[0].innerHTML = imageArray[index].text;
        textField[1].innerHTML = imageArray[index].text;
        index++
        startSlide();
    } else {
        index = 0;
        imageBox.src = imageArray[index].img;
        textField[0].innerHTML = imageArray[index].text;
        textField[1].innerHTML = imageArray[index].text;
        index++;
        startSlide();
    }
}


startSlide();