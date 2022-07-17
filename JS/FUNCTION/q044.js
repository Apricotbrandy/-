//q043에서 한 함수에 7을 넣어 호출하기
function a(x){
    const result = x + 1;
    return result;
}
var i = a(7);
document.write(i);

//q043에서 한 함수를 한 번 더 호출하면서 이 함수의 매개변수에 위 함수를 넣기
function b(a){
    const result = a(7) + 1;
    return result;
}
var j = b(a);
document.write(j);
