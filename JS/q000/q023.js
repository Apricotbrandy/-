//for-break 
//랜덤 값 준비하여 반복문을 돌리면서 출력
//반복도중 반복용 변수 값(var i)이 랜덤값과 일치하는 경우 반복문을 중지
for(i = 1; i <=10; i++){
    document.write("i: "+i+"&nbsp");
    var r = 0;
    r = Math.floor(Math.random()*10)+1;
    document.write("r: "+r+"<br>");
    if(i == r){
        break;
    }
}