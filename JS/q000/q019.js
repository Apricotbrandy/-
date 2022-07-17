// 반복문 for
//별을 역피라미드 형태로 출력

/* for(var i =0; i<1; i++){
    document.write("");
    for(var j = 0; j<10; j++){
        document.write("☆");
    }
    document.write("<br>");
    for(var j = 0; j<9; j++){
        document.write("☆");
    }
    document.write("<br>");
    for(var a = 0; a<8; a++){
        document.write("☆");
    }
    document.write("<br>");
    for(var b = 0; b<7; b++){
        document.write("☆");
    }
    document.write("<br>");
    for(var c = 0; c<6; c++){
        document.write("☆");
    }
    document.write("<br>");
    for(var d = 0; d<5; d++){
        document.write("☆");
    }
    document.write("<br>");
    for(var e = 0; e<4; e++){
        document.write("☆");
    }
    document.write("<br>");
    for(var f = 0; f<3; f++){
        document.write("☆");
    }
    document.write("<br>");
    for(var g = 0; g<2; g++){
        document.write("☆");
    }
    document.write("<br>");
    for(var h = 0; h<1; h++){
        document.write("☆");
    }
    document.write("<br>");
} */

for(var i=0; i<10; i++){
    for(var j=10; j>i; j--){
        document.write("☆");
    }
    document.write("<br>");
}