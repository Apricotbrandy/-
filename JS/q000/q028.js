//for 1~10 반복	
//홀수면 1 은 홀수입니다. 짝수면 2 는 짝수입니다. 를 출력
				

for(i = 1; i<=10; i++){
    if(i%2==0){
        document.write(i+"는 짝수 입니다.")
        br();
    }else{
        document.write(i+"는 홀수입니다.")
        br();
    }
}