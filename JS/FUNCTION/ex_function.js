function a(x){
    const result = x + 60;
    return result;
}

a(40); //결과 : 100을 return값으로 반환

//파라미터의 개수는 제한이 없으며, 콤마로 구분하여 전달
function b(x,y,z){
    const result = x + y + z;
    return result;
}
var k = b(25,25,50); //결과 : 100을 return값으로 반환
document.write(k);

//전달되는 파라미터가 없는 함수
function c(){
    console.log('안녕하세요');
    return 100;
}
c(); //결과 : console에 '안녕하세요'를 출력하고, 100을 return값으로 반환

//반환값이 없는 경우는 반환값 자체를 생략할 수도 있다.
function d(){
    console.log('안녕하세요');
}
d(); //결과: console에 '안녕하세요'를 출력하고 return값은 없으므로 반환하지 않는다.

//return구문으로 함수가 종료되기 때문에 return의 아랫부분은 코드를 입력해도 실행되지 않는다.
function e(){
    return 100;
    console.log('안녕하세요')
}
e(); //결과:return값으로 100을 반환하고 return구문 이하의 값은 실행되지 않는다.

//하나의 함수 내에서 return구문은 조건에 따라 몇 번이라도 사용하여 조건에 따라 반환값을 다르게 처리하는 것이 가능하다.
function f(){
    if(a>=100){
        //a가 100이상이라면 a를 반환
        return a;
    }
    else{
        //a가 100미만이라면 b를 반환
        return b;
    }
}

//정의한 함수를 실행하기 위해서는 함수명 뒤에 ()를 붙인다. 파라미터가 있다면 ()안에 적는다.
function g(price, tax){
    const result = price + (price * tax);
    return result;
}
//함수를 실행하고 반환값을 h에 대입한다.
const h = g(100,0.1); //price = 100, tax = 0.1을 파라미터 값으로 입력함
console.log(h); //결과 : 110


