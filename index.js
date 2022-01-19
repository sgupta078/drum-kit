

// Shubham Gupta 
// Insta-ID : sgupta078



// applying click event to all drums

var drumLen = document.querySelectorAll(".drum").length;

for(var i = 0; i<drumLen; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonText = this.textContent;
        playSound(buttonText);

        buttonAnimation(buttonText);

    });
}

// applying keypress event

document.addEventListener("keypress", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});




// playing sound according to drum clicked or keypressed

function playSound(key) {

    switch (key) {

        case "z":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
            
        case "x":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "c":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "v":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
            
        case "b":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        
        case "n":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        
        case "m":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default:
            break;
    }

}



// button animation on keypressed or drum clicked

function buttonAnimation(cuurentKey){

    var activeButton = document.querySelector("." + cuurentKey);
    activeButton.classList.add("buttonWhenPressed");

    setTimeout(function(){
        activeButton.classList.remove("buttonWhenPressed");
    }, 200)
}






// Shubham Gupta 
// Insta-ID : sgupta078