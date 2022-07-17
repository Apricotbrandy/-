function over(){
    this.setAttribute("src", "dog.jpg");    //개 이미지로 바꾸기
    var a = document.getElementById("a");
    a.style.color = "red";    
    a.style.backgroundColor = "blue";    
}
function out(){
    this.setAttribute("src", "cat.png");    //고양이 이미지로 바꾸기
    var a = document.getElementById("a");
    a.style.color = "black";    
    a.style.backgroundColor = "white";        
}

window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐
    var img_1 = document.getElementById("img_1");
    var img_2 = document.getElementById("img_2");
    var img_url = img_1.getAttribute("src");
    alert(img_url);
    img_2.setAttribute("src", img_url);
    img_2.onclick = function(){
        alert("개 클릭");
    }
    img_1.addEventListener("mouseover",over);
    img_1.addEventListener("mouseout",out);
}

