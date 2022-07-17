//조건문 swtich

var number = prompt("1, 2, 3  중 하나를 입력하세요");
switch(number){
    case "1":
        alert("1");
        break;
    case "2":
        alert("2");
        break;
    case "3":
        alert("3");
        break;
    default :
        alert("문제를 다시 읽어보세요.")
}




		
/* case 1 : X (안됨)
case "1" : O (됨)

이유: prompt로 입력받은 숫자가 변수에 들어갈 때 문자열로 들어간다

case 뒤에 문자열도 가능
					
주의:	입력받은 값은 전부 문자로 인식함. 
즉 위 예제에서 100을 입력 시 변수 s 는 "100" 문자열이 됨. */