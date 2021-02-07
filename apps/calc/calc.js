let res = document.querySelector("#rez p");
let firstNum = "";
let secNum = "";
let trueRez;
let currentText = "" + firstNum;
let operator = "";
let finishedFirstNum = false;
let finishedSecNum = false;

let canType = true;

const LIMIT = 12;

function numri(num) {
    if (!finishedFirstNum) {
        if (num == "0" && firstNum.length < 1) {

        } else {
            if (firstNum.length < LIMIT){
                firstNum = firstNum + num;
                if(firstNum.length == LIMIT){
                    finishedFirstNum = true;
                }
            }
        }
    } else if(operator != ""){
        if (num == "0" && secNum.length < 1) {

        } else {
            if (secNum.length < LIMIT){
                secNum = secNum + num;
                if(secNum.length == LIMIT){
                    finishedSecNum = true;
                }
            }
        }

    }

    console.log(firstNum, secNum);
    updateText();

}
function mbledhje() {
    if (!finishedFirstNum) {
        finishedFirstNum = true;
    } else {
        if (!finishedSecNum) {

        } else {
            trueRez = (parseInt(firstNum) + parseInt(secNum));
        }
    }
    operator = "+";
    updateText();
}
function zbritje() {
    if (!finishedFirstNum) {
        finishedFirstNum = true;
    } else {
        if (!finishedSecNum) {
            finishedSecNum = true;
        } else {
            trueRez = (parseInt(firstNum) - parseInt(secNum));
        }
    }
    operator = "-";
    updateText();
}
function prodhimi() {
    if (!finishedFirstNum) {
        finishedFirstNum = true;
    } else {
        if (!finishedSecNum) {
            finishedSecNum = true;
        } else {
            trueRez = (parseInt(firstNum) * parseInt(secNum));
        }
    }
    operator = "x";
    updateText();
}
function heresi() {
    if (!finishedFirstNum) {
        finishedFirstNum = true;
    } else {
        if (!finishedSecNum) {
            finishedSecNum = true;
        } else {
            trueRez = (parseInt(firstNum) / parseInt(secNum));
        }
    }
    operator = "/";
    updateText();
}
function clear() {

}
function clearAll() {
    firstNum = "";
    secNum = "";
    operator = "";
    finishedFirstNum = false;
    finishedSecNum = false;
    res.innerText = "Rezultati";
}
function pike() {
    if (!finishedFirstNum) {
        if (firstNum.length > 0) {
            if (firstNum.charAt(firstNum.length - 1) != ".") {
                firstNum += ".";
            } else {

            }
        } else {
            firstNum = "0.";
        }
    } else {
        if (secNum.length > 0) {
            if (secNum.charAt(secNum.length - 1) != ".") {
                secNum += ".";
            } else {

            }
        } else {
            secNum = "0.";
        }
    }
    updateText();
}
function mute() {

}
function barazim() {
    if (!finishedFirstNum) {
        finishedFirstNum = true;
        secNum = "0";
        finishedSecNum = true;
        kalkulo();
    } else {
        if (!finishedSecNum) {
            finishedSecNum = true;
        } else {
            
        }
        kalkulo();
    }
}
function kalkulo(){
    let n1 = parseInt(firstNum);
    let n2 = parseInt(secNum);
    switch (operator) {
        case "+":
            trueRez = n1 + n2;
            break;
        case "-":
            trueRez = n1 - n2;
            break;
        case "/":
            trueRez = n1 / n2;
            break;
        case "x":
            trueRez = n1 * n2;
            break;

        default:
            break;
    }
    updateText();
}
function updateText() {
    currentText = "";
    currentText += firstNum;

    if (!finishedFirstNum) {
        if (firstNum.length > 11) {
            canType = false;
        }
    } else {
        currentText += operator;
        currentText += secNum;
        if (secNum.length > 11) {
            canType = false;
            finishedSecNum = true;
        } else {

        }
        if(finishedSecNum){
            currentText = "" + trueRez;
        }
    }
    res.innerText = currentText;
}