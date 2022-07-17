var str_id ="";
var str_pw ="";

var input_id;
var input_pw;
var div_sign;

window.onload = function(){

    input_id = document.getElementById("id")
    input_pw = document.getElementById("pw")
    div_sign = document.getElementById("sign")

    str_id = input_id.value;
    str_pw = input_pw.value;


}

function login(){
    // alert("id:"+input_id.value+ "pw:"+input_pw.value);

    var local_id = input_id.value;
    var local_pw = input_pw.value;
    if(local_id == "cat" && local_pw == "1234"){
        // alert("로그인 성공")
        sign.innerHTML = "회원님 반갑습니다."
    }else{
        // alert("로그인 실패")
        sign.innerHTML = "아이디나 패스워드가 맞지 않습니다."
    }
}
