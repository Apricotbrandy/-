//class declaration
class a{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

//hoisting
//class 정의 후에 호출해야 함(함수는 정의하기 전에 호출가능)
const p = new a(); //referenceError

class a{}

//class expressions
//이름을 가질 수도 갖지 않을 수도 있음
//이름을 가진class는 클래스의 지역범위에 한해 유효함(하지만 클래스의 name속성을 통해 찾을 수 있음)



//cat class 정의하기
function Cat(){
    this.name = " ";//이름
    this.age = 0;//나이
    this.weight = 0;//무게(g)
    this.family = " ";// 품종
    this.color = " ";//눈 색
}

//class의 객체생성
new cat();

//class 객체 생성 후 이 객체를 클래스형 변수에 전달
var kitty = new cat();

//이 class 변수의 특정 속성에 값을 입력
kitty.name = " ";

//출력
document.write(kitty.name);


//"생성자"를 이용하여 객체를 생성할 때 초기값을 바로 넣어주는 법
//1. class 선언부를 수정
function Cat(name, age,weight,family, color){
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.family = family;
    this.color = color;
}

//2. class객체 생성
var lulu = new Cat("lulu",2,200,"스코티시폴드","grey");


//클래스 선언 시 클래스의 함수를 선언하는 법
function cat(){
    this.name = "";
    this.age =0;
    this.weight = 0;
    this.family = "";
    this.color = "";
    //멤버 함수들 선언
    this.crying = function(){
        document.write("애옹");
    }
}


//클래스 선언 시 추가한 함수를 호출하는 법
//1. 선행 객체 생성
var kitty = new Cat();

//2.객체 변수명.함수명()으로 호출하기
kitty.crying();
document.write()
