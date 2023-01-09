

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

//Basic Math Functions
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;}

function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

//calc screen variable creation
let calcScreen = document.getElementById("calc-input")
//String passed to calc screen and used to evaluate equations
let equation = "";

//creates nodelist of number buttons
let calcButtons = document.getElementsByClassName("calc-number");
//Adds event listeners to each number button
for(let item of calcButtons) {
    item.addEventListener("click", () => {
        buttonPress(item.innerText);
    });
}

let num1 = "";
let num2 = "";
let operator = "";   
let total = "";
function buttonPress(calcButton) { 
    console.log(calcButton);
    if(calcButton === "=" && num1 !== "" && operator != "" && num2 !== ""){
        total = operate(operator, num1, num2)
        calcScreen.textContent = total;
        num1 = total;
        num2 = "";
        operator = "";
        total = "";
    } else if (calcButton === "C"){
        num1 = "";
        num2 = "";
        operator = "";
        calcScreen.textContent = "0";
    } else if (calcButton === "%"){
        num1 = num1 / "100";
        calcScreen.textContent = num1
    } else if (calcButton === "+/-"){
        //Toggles positive and negative
        if (num1 < 0) {
            num1 = Math.abs(num1);
        } else {
            num1 = -Math.abs(num1);
        }
        calcScreen.textContent = num1;
    } else if (operator === "" && !isNaN(Number(calcButton))) {
        num1 += calcButton;
        calcScreen.textContent = num1;
    } else if(num1 !== "" && isNaN(Number(calcButton)) && calcButton !== "=") {
        operator = calcButton;
        calcScreen.textContent = num1 + operator;
    } else if(operator !== "" && !isNaN(Number(calcButton))) {
        num2 += calcButton;
        calcScreen.textContent = num1 + operator + num2;
    }

}


