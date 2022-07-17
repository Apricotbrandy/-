window.onload = function(){
    var r = 0;
    r = Math.floor(Math.random()*10)+1;
    for(var i=1; i<=r; i++){
        if(i==7){
            document.write("<img id='goldcat' src='cat.png'>")
            var cat = document.getElementById("goldcat")
            cat.style.borderWidth = "3px";
            cat.style.borderStyle = "dashed";
            cat.style.borderColor = "yellow";
        }else{
            document.write("<img src='cat.png'>");
        }
        document.write(i);
        
    }
}
/*
var cat = document.getElementById("cat")
cat.style.borderWidth = "3px";
cat.style.borderStyle = "dashed";
cat.style.borderColor = "pink"
cat.style.width = "100px"
cat.style.height = "100px" */