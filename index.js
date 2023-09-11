const resultInput = document.getElementById("result");
let currentExpression = "";
//計算記号が入る変数
let operator = "";
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const calculateButton = document.getElementById("calculate");
let num1 = "";
let num2 = "";
let displayNum = "";
let flag = false;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    if (!flag) {
      console.log(number);
      displayNum = displayNum + number;
      num1 = num1 + number;

      resultInput.value = num1;
    } else {
      displayNum = displayNum + number;
      num2 = num2 + number;
      resultInput.value = displayNum;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.textContent;
    operatorIfFunc(operator);
  });
});
function operatorIfFunc(operator) {
  if (flag != false) {
    console.error("連続して演算記号を入力することはできません");
    return;
  }
  if (operator == "+") {
    flag = true;
    displayNum = displayNum + operator;
    resultInput.value = displayNum;
  } else {
  }
}

calculateButton.addEventListener("click", () => {
  calculate();
});

function calculate() {
  if (operator == "+") {
    result = Number(num1) + Number(num2);
    console.log("a" + result);
    resultInput.value = result;
  }
}
