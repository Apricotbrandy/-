/* for-continue
1~10랜덤값 준비
반복문 1~10 돌면서 1~10 출력
반복 도중 반복용 변수 값(var i)이 랜덤값과 일치하는 경우 해당 반복회차를 건너뛰고 
다음회차 진행 */
for(i = 1; i <=10; i++){
    var r = 0;
    r = Math.floor(Math.random()*10)+1;
    if(i == r){
        document.write("일치<br>")
        continue;
    }
    document.write("i: "+i+'&nbsp');
    document.write("r: "+r+"<br>");
}