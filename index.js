for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        flash(this.innerHTML);
    });
}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    flash(event.key);
});

function makeSound(wed){
    switch(wed){
        case("w"):
        var audio=new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;

        case("a"):
        var audio=new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;

        case("s"):
        var audio=new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;

        case("d"):
        var audio=new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;

        case("j"):
        var audio=new Audio("./sounds/snare.mp3");
        audio.play();
        break;

        case("k"):
        var audio=new Audio("./sounds/crash.mp3");
        audio.play();
        break;

        case("l"):
        var audio=new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;

        default:
            break;
    }
}

function flash(wed){
    var key=document.querySelector("."+wed);
    key.classList.add("pressed");
    setTimeout(function(){key.classList.remove("pressed");},200);
}