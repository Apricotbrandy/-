//cat class 정의하기
function cat(){
    this.name = "Lulu";//이름
    this.age = 5;//나이
    this.weight = 276;//무게(g)
    this.family = "먼치킨 믹스/갈색고등어 태비";// 품종
    this.color = "gold";//눈 색
}
new cat();
var kitty = new cat();
kitty.name = "루루";
document.write(kitty.name);
