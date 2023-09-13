//計算記号が入る変数
let operator = "";
//入力内容1
let num1 = "";
//入力内容2
let num2 = "";
//表示内容
let displayNum = "";
//フラグ
let flag = false;
//計算結果
let result = 0;
//ボタンの数字
let number = 0;

cheat1();

function numberButtonClick1() {
  console.log(number);
  displayNum = displayNum + number;
  num1 = num1 + number;
  resultInput.value = num1;
}

function operatorIfFunc(operator) {
  if (operator == "+") {
    flag = true;
    displayNum = displayNum + operator;
    resultInput.value = displayNum;
  }
}

function numberButtonClick2() {
  displayNum = displayNum + number;
  num2 = num2 + number;
  resultInput.value = displayNum;
}

function calculate() {
  if (operator == "+") {
    result = Number(num1) + Number(num2);
    resultInput.value = result;
    flag = false;
    num1 = result;
    num2 = "";
    displayNum = result;
  }
}
operatorOtherFlag();
calculateOtherFlag();
