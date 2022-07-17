//100을 리턴하는 함수
function a(){
    return 100;
}
/* var i = a();
document.write(i); */

//200을 리턴하는 함수
function b(){
    return 200;
}
/* var j = b();
document.write(j); */

//숫자 2개를 매개변수로 받아서 이 둘을 더하여 그 결과를 리턴하는 함수 만들기
function c(x,y){
    const result = x + y;
    return result;
}
/* var k = c(10,20);
document.write(k);
 */
// c함수의 첫번째 매개변수에 a함수를 넣고 두번째 매개변수에 b함수를 넣은다음 c함수가 실행되서 리턴되는 값을 출력하기
function d(x,y){
    const result = x + y;
    return result;
}
var l = d(a(),b());
document.write(l);
