/* // while(표현식){ 표현식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문;}

var i = 1;
while(i < 6){  //변수 i가 6보다 작을 때만 while문을 반복함.
    document.write("cat <hr>");
    i++; //반복할 때마다 변수 i를 1씩 증가시켜 변수 i가 6보다 커지면 반복문을 종료함.
} */




/* //do {표현식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문;} while (표현식);

var i = 1, j = 1;
while(i > 6) { //변수 i의 초깃값은 1이기 때문에 이 while문은 한 번도 실행되지 않음
    document.write("i: " + (i++) + "cat <br>");
}
do{ //변수 j의 초깃값은 1이기 때문에 이 do/while문은 단 한 번만 실행됨.
    document.write("j:" + (j++) + "cat <br>");
}
while(j > 3); */

//for(초기식; 표현식; 증감식){표현식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문;}

for(var i = 1; i < 6; i++){
    document.write("cat <hr>");
}

