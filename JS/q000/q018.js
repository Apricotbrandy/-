// 반복문 for
//별을 피라미드 형태로 출력

/* for(var i =0; i<1; i++){
    document.write("☆");
    document.write("<br>");
    for(var j = 0; j<2; j++){
        document.write("☆");
    }
    document.write("<br>");
    for(var a = 0; a<3; a++){
        document.write("☆");
    }
    document.write("<br>");
    for(var b = 0; b<4; b++){
        document.write("☆");
    }
    document.write("<br>");
    for(var c = 0; c<5; c++){
        document.write("☆");
    }
    document.write("<br>");
    for(var d = 0; d<6; d++){
        document.write("☆");
    }
    document.write("<br>");
    for(var e = 0; e<7; e++){
        document.write("☆");
    }
    document.write("<br>");
    for(var f = 0; f<8; f++){
        document.write("☆");
    }
    document.write("<br>");
    for(var g = 0; g<9; g++){
        document.write("☆");
    }
    document.write("<br>");
    for(var h = 0; h<10; h++){
        document.write("☆");
    }
} */


for(var i= 1; i<=10; i++){
    for(var j =1; j<=i;j++){
        document.write("☆");
    }
    document.write("<br>");
}