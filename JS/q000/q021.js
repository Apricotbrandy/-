/* 별표시를
_________________☆	
_______________☆☆	
...	
☆☆☆☆☆☆☆☆☆☆ 
이런 모양으로 출력하기 */

for(var i=0; i<10; i++){
    for(var j=9; j>i; j--){
        document.write("___");
    }
    for(var k=0; k<=i; k++){
        document.write("☆");
    }
    document.write("<br>");
}

/* for(var y = 0; y<9; y++){
    document.write("___");
}
for(var i =0; i<1; i++){
    document.write("☆");
    document.write("<br>");
    for(var y = 0; y<8; y++){
        document.write("___");
    }
    for(var j = 0; j<2; j++){
        document.write("☆");
    }
    document.write("<br>");
    for(var y = 0; y<7; y++){
        document.write("___");
    }
    for(var a = 0; a<3; a++){
        document.write("☆");
    }
    document.write("<br>");
    for(var y = 0; y<6; y++){
        document.write("___");
    }
    for(var b = 0; b<4; b++){
        document.write("☆");
    }
    document.write("<br>");
    for(var y = 0; y<5; y++){
        document.write("___");
    }
    for(var c = 0; c<5; c++){
        document.write("☆");
    }
    document.write("<br>");
    for(var y = 0; y<4; y++){
        document.write("___");
    }
    for(var d = 0; d<6; d++){
        document.write("☆");
    }
    document.write("<br>");
    for(var y = 0; y<3; y++){
        document.write("___");
    }
    for(var e = 0; e<7; e++){
        document.write("☆");
    }
    document.write("<br>");
    for(var y = 0; y<2; y++){
        document.write("___");
    }
    for(var f = 0; f<8; f++){
        document.write("☆");
    }
    document.write("<br>");
    for(var y = 0; y<1; y++){
        document.write("___");
    }
    for(var g = 0; g<9; g++){
        document.write("☆");
    }
    document.write("<br>");
    for(var h = 0; h<10; h++){
        document.write("☆");
    }
} */