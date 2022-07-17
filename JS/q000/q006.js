window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐

    var random = Math.floor(Math.random() * 20) + 1; // 1 ~ 100 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    for(var i=1; i <= random; i=i+1){

        // i 가 7일 때 황금색 처리
        if(i == 7){
            document.write("<img id='goldcat' src='images/_cat.png'>");
            document.write(i);

            var cat = document.getElementById("goldcat");
            cat.style.borderStyle = "solid";  
            cat.style.borderColor = "yellow";  
            cat.style.borderWidth = "10px";  
            cat.style.borderRadius = "20px";
        } else {
            document.write("<img src='images/_cat.png' style='border-style: solid; border-color: black; border-width: 10px; border-radius: 20px;'>");
            document.write(i);
        }
    }
}



/* //내가 한거
window.onload = function(){
    var r = 0;
    r = Math.floor(Math.random()*10)+1;
    for(var i=1; i<=r; i++){
        document.write("<img src='images/_cat.png'>");
        document.write(i)
    }
} */