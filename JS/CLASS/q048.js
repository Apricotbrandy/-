//문 47에 추가로 객체를 하나 더 만들기
//서열정리
//나이를 비교하여 출력하기
function cat(){
    this.name = "";//이름
    this.age = 0;//나이
    this.weight = 0;//무게(g)
    this.family = "";// 품종
    this.color = "";//눈 색
}
new cat();
var kitty = new cat();
kitty.name = "루루";
document.write(kitty.name);
br();
kitty.age = 5;
document.write(kitty.age);
br();
kitty.weight = 276;
document.write(kitty.weight);
br();
kitty.family = "먼치킨믹스/갈색고등어태비";
document.write(kitty.family);
br();
kitty.color = "gold";
document.write(kitty.color);
hr();
//새로운 객체
var catus = new cat();
catus.name = "디디";
document.write(catus.name);
br();
catus.age = 6;
document.write(catus.age);
br();
catus.weight = 574;
document.write(catus.weight);
br();
catus.family = "페르시안믹스묘";
document.write(catus.family);
br();
catus.color = "gold";
document.write(catus.color);
hr();
if(kitty.age<catus.age){
    document.write("큰고양이 : 디디 <br> 작은고양이 : 루루")
    br();
}else if(kitty.age>catus.age){
    document.write("큰고양이 : 루루 <br> 작은고양이 : 디디")
    br();
}else{
    document.write("둘은 친구")
    br();
}