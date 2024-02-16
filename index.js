
function makeSound(drumKey) {      
    // play drum sound correspondingly based on the value of drum or keyStroke
    switch (drumKey) {
        case 'w':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'a':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case 's':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'd':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'l':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    }

}

// add animation on buttons when any playing drum
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    // remove effection after 0.1s
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}


var numberOfDrums = document.querySelectorAll(".drum").length;

// handleClick will be evoked when clicking on each drum
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var drum = this.innerHTML;
        makeSound(drum);
        buttonAnimation(drum);
    });
}

// press on keyboard will trigger functions 
document.addEventListener("keydown", function (event) {
    var keyStroke = event.key;
    makeSound(keyStroke);
    buttonAnimation(keyStroke);
});

