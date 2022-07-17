/* //아무 숫자 매개변수 하나를 받아 1을 더하여 리턴하는 함수 만들기
function a(x){
    const result = x + 1;
    return result;
}
var i = a();
document.write(i); */

//a를 호출하면서 매개변수에 100값을 넘기고 결과를 출력
function a(x){
    const result = x + 1;
    return result;
}
var i = a(100);
document.write(i);
