//변수 선언
var type = ['가위', '바위', '보'];// 종류
var sci = ['바위','보', '가위']; // 가위의 경우
var rock = ['보', '가위', '바위']; // 바위의 경우
var paper = ['가위', '바위', '보']; // 보의 경우
var user = prompt("가위! 바위! 보!"); //유저 입력창
var computer = type[Math.floor(Math.random()*3)]; //랜덤으로 돌리기

//화면 출력(메인)
document.write("computer"+computer+"<br>")
document.write("user"+user+"<br>"+"<hr>")

user_n = change(user);
comp_n = match(user_n, computer);

if(comp_n==0){
    document.write("컴퓨터가 이겼습니다")
}
if(comp_n==1){
    document.write("유저가 이겼습니다")
}
if(comp_n==2){
    document.write("비겼습니다")
}

//함수
function change(value){
    for(i=0; i<3; i++){
        if(value==type[i]){
            return i;
        }
    }
} //문자를 type 배열 범위의 숫자로 바꾸는 함수

function match(user_n, computer){
    if(user_n==0){
        for(i=0; i<3; i++){
            if(sci[i]==computer){
                return i;
            }
        }
    }
    if(user_n==1){
        for(i=0; i<3; i++){
            if(rock[i]==computer){
                return i;
            }
        }
    }
    if(user_n==2){
        for(i=0; i<3; i++){
            if(paper[i]==computer){
                return i;
            }
        }
    }

} //유저의 결과를 기준으로 승부내는 함수


//서예진님이 하신거 클론