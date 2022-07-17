var userRpc = "";
var comRpc = "";

var rpcInputText;
var rpcResultScreen;

var resultString = "";

// ***** 중요 ******
window.onload = function(){

    rpcInputText = document.getElementById("rpc_input_text");       // 연결
    rpcResultScreen = document.getElementById("rpc_result_screen");       // 연결


}

function rpcInputButtonClick(){

    //결과 화면 초기화
    resultString = "";
    rpcResultScreen.value = resultString;

    while(true){    // while 무한루프 걸기는 이렇게 하면 됩니다
        // userRpc = prompt("가위,바위,보 중에 하나를 입력하세요:");
        userRpc = rpcInputText.value;
        if(userRpc == "가위" || userRpc == "바위" || userRpc == "보"){
            break;  // while 무한루프를 빠져나감
        } else {
            alert("장난치지마세요");
        }
    }

    comRpc = Math.floor(Math.random()*3+1); // 컴퓨터 난수 발생 시키기 (1~3)
    if(comRpc == 1){
        comRpc = "가위";
    }
    if(comRpc == 2){
        comRpc = "바위";
    }
    if(comRpc == 3){
        comRpc = "보";
    }


    // dw("유저:"+userRpc);
    resultString += "유저:"+userRpc;

    // br();
    resultString += "\n";

    // dw("컴:"+comRpc);    
    resultString += "컴:"+comRpc;

    // br();
    resultString += "\n";

    var winDrawLose = "";
    switch(userRpc){
        case "가위":
            switch(comRpc){
                case "가위":
                    winDrawLose = "DRAW";
                    break;
                case "바위":
                    winDrawLose = "패배";
                    break;
                case "보":
                    winDrawLose = "승리";
                    break;
            }
            break;
        case "바위":
            switch(comRpc){
                case "가위":
                    winDrawLose = "승리";
                    break;
                case "바위":
                    winDrawLose = "DRAW";
                    break;
                case "보":
                    winDrawLose = "패배";
                    break;
            }        
            break;
        case "보":
            switch(comRpc){
                case "가위":
                    winDrawLose = "패배";
                    break;
                case "바위":
                    winDrawLose = "승리";
                    break;
                case "보":
                    winDrawLose = "DW";
                    break;
            }        
            break;
    }
    // dw(winDrawLose);    
    resultString += "결과: " + winDrawLose;

    // 결과 출력
    rpcResultScreen.value = resultString;
} 