var numberOfButtons=document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfButtons;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function() 
{ var buttonInnerhtml=this.innerHTML;
    makesound(buttonInnerhtml);
    buttionAnimation(buttonInnerhtml);
    
});
}
document.addEventListener("keypress",function(event)
{
    makesound(event.key);
    buttionAnimation(event.key);
});
function makesound(key)
{
switch (key) {
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var bass=new Audio("sounds/kick-bass.mp3");
         bass.play();
            break;
        case "s":
            var sanre=new Audio("sounds/snare.mp3");
            sanre.play();
            break;
        case "d":
            var tom1 =new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            case "j":
        var tom2 =new Audio("sounds/tom-2.mp3");
            tom2 .play();
            break;
        case "k":
            var tom3 =new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4 .play();
            break;
    
        default:console.log();
            break;
    }
    
};
function buttionAnimation(currentkey)
{
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function()
    { activeButton.classList.remove("pressed");},100);
}