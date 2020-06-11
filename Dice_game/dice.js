var num1 = Math.ceil(Math.random()*6);
var num2 = Math.ceil(Math.random()*6);
var randomPic_1='images/dice'+num1+'.png';
var randomPic_2='images/dice'+num2+'.png';

document.getElementById('dice1').setAttribute('src',randomPic_1);

document.getElementById('dice2').setAttribute('src',randomPic_2);

if(num1>num2)
  document.getElementsByClassName('title')[0].textContent='Player1 Wins!!';


else if(num2>num1)
  document.getElementsByClassName('title')[0].textContent='Player2 Wins!!';

else
  document.getElementsByClassName('title')[0].textContent='Draw';
