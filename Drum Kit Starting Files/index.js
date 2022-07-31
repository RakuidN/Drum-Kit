
//document.querySelectorAll(".drum").length; is a way of selcting upper bound

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll('button')[i].addEventListener("click",function (){
        
        var letter = this.innerHTML;
        makeSound(letter);
        buttonAnimation(letter);
        
    });
}

//keyboard press

document.addEventListener("keydown",function (event){
    makeSound(event.key);//key is the key pressed on the keyboard
    buttonAnimation(event.key);
});


function makeSound (key){
    switch(key){
        case 'w':
            var audio1 = new Audio("sounds/crash.mp3");//sending the object info to creator function
            audio1.play();//seclectinf play function attribute from audio object
            break;
        case 'a':
            var audio2 = new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;
        case 's':
            var audio3 = new Audio("sounds/snare.mp3");
            audio3.play();
            break;
        case 'd':
            var audio4 = new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;
        case 'j':
            var audio5 = new Audio("sounds/tom-2.mp3");
            audio5.play();
            break;
        case 'k':
            var audio6 = new Audio("sounds/tom-3.mp3");
            audio6.play();
            break;
        case 'l':
            var audio7 = new Audio("sounds/tom-4.mp3");
            audio7.play();
            break;
    }
} 

function buttonAnimation (currentKey){
    var activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add("pressed");

    //adding delay to recover button to original state

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100);
}
