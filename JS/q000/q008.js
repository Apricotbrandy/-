// switch 를 사용하여 랜덤한 숫자가 나올때 이미지 출력

var r = Math.floor(Math.random() * 6) + 1;
/* if(r == 1){
    r = "<img src='images/d1.png'>";
}
if(r == 2){
    r = "<img src='images/d2.png'>";
}
if(r == 3){
    r = "<img src='images/d3.png'>";
}
if(r == 4){
    r = "<img src='images/d4.png'>";
}
if(r == 5){
    r = "<img src='images/d5.png'>";
}
if(r == 6){
    r = "<img src='images/d6.png'>";
}
document.write(r); */

var randomDice = "";
switch(r){
    case 1: 
        randomDice = "<img src='images/d1.png'>";
        break;
    case 2: 
        randomDice = "<img src='images/d2.png'>";
        break;
    case 3: 
        randomDice = "<img src='images/d3.png'>";
        break;
    case 4: 
        randomDice = "<img src='images/d4.png'>";
        break;
    case 5: 
        randomDice = "<img src='images/d5.png'>";
        break;
    case 6: 
        randomDice = "<img src='images/d6.png'>";
        break;
}
document.write(randomDice);