function playSound(key){
  switch (key) {
    case 'w':tom1.play();break;
    case 'a':tom2.play();break;
    case 's':tom3.play();break;
    case 'd':tom4.play();break;
    case 'j':snare.play();break;
    case 'k':crash.play();break;
    case 'l':kick_bass.play();break;
  }
}

function animate(key){
  document.querySelector('.'+key).classList.add('pressed');
  setTimeout(function(){
    document.querySelector('.'+key).classList.remove('pressed');},150);
}

var tom1=new Audio('sounds/tom-1.mp3');
var tom2=new Audio('sounds/tom-2.mp3');
var tom3=new Audio('sounds/tom-3.mp3');
var tom4=new Audio('sounds/tom-4.mp3');
var snare=new Audio('sounds/snare.mp3');
var crash=new Audio('sounds/crash.mp3');
var kick_bass=new Audio('sounds/kick-bass.mp3');

var drum_array=document.querySelectorAll('.drum');
for (var i=0;i<7;i++){
  drum_array[i].addEventListener('click',function(){
    playSound(this.textContent);
    animate(this.textContent);
  });
}

document.addEventListener('keydown',function(event){
  playSound(event.key);
  animate(event.key);
});
