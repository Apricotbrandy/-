//for - break/continue (label 사용)


//for-break(label 사용)
outfor: for(var dan = 1; dan<10; dan++){
    for(var i = 1; i<10; i++){
        if((dan*i)==18){
            document.write(dan + "*" + i + "=" + dan*i + "<br><hr>");
            break outfor; //outfor로 표시된 바깥쪽 for문을 끝냄
        }
    }
}


//for-continue(label사용)
outfor: for(var dan = 1; dan<10; dan++){
    for(var i = 1; i<10; i++){
        if((dan*i)==18){
            document.write(dan + "*" + i + "=" + dan*i + "<br>");
            continue outfor; //outfor로 표시된 바깥쪽 for문을 바로 다시 시작. 아래 문장은 건너뜀
        }
    }
    document.write(dan + "단에는 18값이 없습니다. <br>");
}
//구구단 결과 18이 있는 단은 이 문장이 실행되지 않도록 위의 continue outfor;문장에 의해서 건너뛰게 되고, 
//바깥쪽 for문의 반복이 시작됨.

/* Label과 함께 break와 continue 문을 사용할 때 주의할 점           
- 반드시 같은 줄에 break label 이름 또는 continue label 이름을 써야 함

같은 줄에 쓰지 않으면 생기는 문제점                
=> 각 줄마다 세미콜론(;)이 자동으로 붙여주는 자바스크립트의 특징때문에 발생함 */