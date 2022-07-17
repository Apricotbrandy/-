/* var i =1;
while(i<6){
    document.write("<img id='cat' src='cat.png'>");
    i = Math.floor(Math.random()*5)+1;
    i++;
} */

window.onload = function(){
    var r = 0;
    r = Math.floor(Math.random()*10)+1;
    for(var i=1; i<=r; i++){
        document.write("<img src='cat.png'>");
    }
}