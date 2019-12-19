var timer = null;
var index = 1;
var isPaused = false;
var imageBox = document.querySelector(".img");
var forward = document.querySelector(".cont-forward");
var back = document.querySelector(".cont-back");
var pause = document.querySelector(".cont-pause");
var textField = document.getElementsByClassName("float-text");
var pauseBtn = document.querySelector(".pause");

// Object array with key/values for image location and image caption
var imageArray = [
    { img: "Images/Travel/StrandBakkumNoord.jpg", text: "Heemskerk, Holland" },
    { img: "Images/Travel/Haarlem.jpg", text: "Haarlem, Holland" },
    { img: "Images/Travel/Nice.jpg", text: "Nice, France"},
    { img: "Images/Travel/Peru.jpg", text: "Machu Picchu, Peru"},
    { img: "Images/Travel/Athens.jpg", text: "Athens, Greece"},
    { img: "Images/Travel/Capetown.jpg", text: "Capetown, South Africa" },
    { img: "Images/Travel/Paris.jpg", text: "Paris, France"}
];

forward.addEventListener("click", moveForward);
back.addEventListener("click", moveBack);
pause.addEventListener("click", pauseButton);

// Move the slideshow forward one slide, reset the autoforward timer and change the play icon to pause icon
function moveForward() {
    window.clearTimeout(timer);
    playToPause();
    slideChange();
}

// Move the slideshow back one slide, reset the autoforward timer and change the play icon to pause icon
function moveBack() {
    window.clearTimeout(timer);
    playToPause();
    slideChange(1);
}

// Check if an image index has already been saved to local storage
function checkIndex() {
    var savedIndex = JSON.parse(localStorage.getItem('currentImage'));
    if(savedIndex) {
        index = savedIndex;
        slideChange();
    } else {
        startSlide();
    }
    
}

// Start slideshow
function startSlide() {
    timer = window.setTimeout(slideChange, 3000);
    timer;
}

// Stops slideshow by clearing timer
function pauseSlide() {
    window.clearTimeout(timer);
    timer = null;
}

// Checks isPaused boolean to determine whether slide show needs to execute start or pause functions
function pauseButton() {
    if(isPaused === false){
        pauseSlide();
        pauseToPlay()
        isPaused = true;
    } else {
        startSlide();
        playToPause();
        isPaused = false;
    }
}

//Change the slideshow icon to play icon
function pauseToPlay() {
    pauseBtn.innerHTML = "&#xe037;";
}

//Change the slideshow icon to pause icon
function playToPause() {
    pauseBtn.innerHTML = "&#xe034;";
}

//Change slide image and text to next, or previous, obect in array and start timeout function for next change
function slideChange(x) {
    if (x == 1) {
        if (index >= 2) {
            index -= 2;
        } else {
            index = (imageArray.length - 1);
        }
    }
    if (index <= (imageArray.length - 1)) {
        localStorage.setItem('currentImage', JSON.stringify(index));
        imageBox.src = imageArray[index].img;
        textField[0].innerHTML = imageArray[index].text;
        textField[1].innerHTML = imageArray[index].text;
        index++
        isPaused = false;
        startSlide();
    } else {
        index = 0;
        localStorage.setItem('currentImage', JSON.stringify(index));
        imageBox.src = imageArray[index].img;
        textField[0].innerHTML = imageArray[index].text;
        textField[1].innerHTML = imageArray[index].text;
        isPaused = false;
        index++;
        startSlide();
    }
}


checkIndex();