var colors=['red','blue','green','yellow'];
var gamePattern=[];
var userPattern=[];
var level=0;
var item=0;

//Creating new Audio Objects
var red=new Audio('sounds/red.mp3');
var blue=new Audio('sounds/blue.mp3');
var yellow=new Audio('sounds/yellow.mp3');
var green=new Audio('sounds/green.mp3');
var error=new Audio('sounds/wrong.mp3');

// For Playing Sounds
function playSound(color){
  switch (color) {
    case 'red':red.play();break;
    case 'blue':blue.play();break;
    case 'green':green.play();break;
    case 'yellow':yellow.play();break;
  }
}

//Creating button animations
function animation(btn){
  $('.'+btn).addClass('pressed');
  setTimeout(function(){
    $('.'+btn).removeClass('pressed');
  },150);
}

//Showing user the next button to be clicked
function nextSequence(){
  $('h1').css('color','white');
  num=Math.floor(Math.random()*4);
  gamePattern.push(colors[num]);
  animation(colors[num]);
  playSound(colors[num]);
  $('h1').text('Level '+level);
  level++;
}

//Matching computer and user input
function checkAnswer(){
  if(gamePattern[item]==userPattern[item]){
    if(gamePattern.length==userPattern.length){
      setTimeout(function(){nextSequence();},1000);
      userPattern=[];
      item=0;
    }
    else
      item++;
  }
  else{
    $('body').css('background-color','red');
    setTimeout(function(){
        $('body').css('background-color','#739fe6');
    },100)
    error.play();
    $('h1').text("Game Over - Press any key to restart");
    $('h1').css('color','red');
    $(document).one('keypress',function(){
        setTimeout(function(){nextSequence();},400);
      });
    level=0;
    gamePattern=[];
    userPattern=[];
  }
}

//Start the game on keypress
$(document).one('keypress',function(){
    setTimeout(function(){nextSequence();},200);
  });

//Handling user clicks on buttons
$('.btn').click(function(event){
  key=event.currentTarget.classList[1];
  animation(key);
  playSound(key)
  userPattern.push(key);
  checkAnswer();
});
