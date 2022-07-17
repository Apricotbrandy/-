// 반복문 while
//1~10 출력 

window.onload = function(){ //html의 형식에 맞춰 넣는 형식
    
    var t = document.getElementById("a");
    var n = 0; //변수 선언 및 초기화
    var s = " ";
    
    while(true){
        n=n+1;
        if(n>10){
            break;
        }else{
            s = s + n + "<br>";
        }
    }
    t.innerHTML = s
    
}

//내가 한거
/* var i = 1;
while(i<=10){
    document.write(i+"<br>");
    i++
} */