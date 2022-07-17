//문 46의 키티에 나머지 값들도 넣고 각각 출력
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

kitty.age = 5;
document.write(kitty.age);

kitty.weight = 276;
document.write(kitty.weight);

kitty.family = "먼치킨믹스/갈색고등어태비";
document.write(kitty.family);

kitty.color = "gold";
document.write(kitty.color);
