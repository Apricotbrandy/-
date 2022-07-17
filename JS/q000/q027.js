//논리 연산자 &&||
//주어진 조건을 if조건문으로 만들기
// 위 조건을 다 만족(ok, true, 참) 시키게끔 a,b,c,d,e,f값을 적절히 주기
//조건을 만족하면 고양이 출력





var a = 2;
var b = 1;
var c = 4;
var d = 5;
var e = 100;
var f = 50;

//(a가 b보다 큼 그리고 c가 d보다 작음) 또는 (e가 100과 같음 그리고 f가 100이 아님)

if((a>b && c<d)||(e==100 && f!=100)){
    document.write("<img src='images/_cat.png'>")
}