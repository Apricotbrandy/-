//문제 22번의 내용을 함수로 자유롭게 바꾸어 구현하기

//함수

//변수

//전역변수. global. 인싸변수
//지역변수. local. 아싸변수

var a ;
var t ;
var n ;
var s ;
//함수  선언

function ww(){
    a = "2세";
    t = "블루하와이";
    n = "냥냥이";
    
    word_plus();

    alert(s);
}

function word_plus(){
    s = a + t + n;
}
//함수 사용하기,실행, 호출
ww();