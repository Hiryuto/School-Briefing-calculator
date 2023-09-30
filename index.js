// 計算記号が入る変数
let operator = "";
// 入力内容1
let firstInput = "";
// 入力内容2
let secondInput = "";
// 表示内容
let displayNum = "";
// フラグ
let flag = false;
// 計算結果
let result = 0;
// ボタンの数字
let number = 0;

//Mission2 他のボタンを描画する処理を書こう!


function numberButtonClick1() {
  //Mission3 ボタンを押した時の処理を書こう！

  firstInput = firstInput + number;
  resultInput.value = displayNum;
}

function operatorIfFunc(operator) {
  //Mission4 +の演算子を押した時の処理を書こう!

    flag = true;
    displayNum = displayNum + operator;
    resultInput.value = displayNum;
  
}

function numberButtonClick2() {
  displayNum = displayNum + number;
  secondInput = secondInput + number;
  resultInput.value = displayNum;
}

function calculate(operator) {
  //Mission5 =の演算子を押した時の処理を書こう!
    resultInput.value = result;
    flag = false;
    firstInput = result;
    secondInput = "";
    displayNum = result;
  
}

//Mission6 他のボタンを押した時の処理を書こう!



// 数字ボタンを取得します
const numberButtons = document.querySelectorAll(".number");

// 演算子ボタンを取得します
const operatorButtons = document.querySelectorAll(".operator");

// クリアボタンを取得します
const clearButton = document.getElementById("clear");

// 計算ボタンを取得します
const calculateButton = document.getElementById("calculate");

// 結果の入力フィールドを取得します
const resultInput = document.getElementById("result");

// 数字ボタンのイベントリスナー
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // ボタンのテキストコンテンツから数字を取得します
    number = button.textContent;

    // フラグをチェックし、適切な関数を呼び出します
    if (!flag) {
      numberButtonClick1();
    } else {
      numberButtonClick2();
    }
  });
});

// 演算子ボタンのイベントリスナー
operatorButtons.forEach((button) => {
  button.addEventListener("click", ()=>{
    operator = button.textContent
    operatorButton(operator)
  })});

async function operatorButton(operator) {
  if (flag) {
    document.getElementById("error").innerHTML =
      "連続して演算記号を入力することはできません";
    return;
  } else {
    operatorIfFunc(operator);
    await sleep(100);
    const regex = /\+/;
    const ifValue = document.getElementById("result").value;
    if (operatorFlags) {
      operatorIfFuncOther(operator);
    } else if (!regex.test(ifValue)) {
      document.getElementById("error").innerHTML = `<p style="color: red">この演算子はプログラムされていません<br>http://127.0.0.1:3000/index.js</p>`;
    }
  }
}

// sleepをできるようにする
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// クリアボタンのイベントリスナー
clearButton.addEventListener("click", () => {
  document.getElementById("error").innerHTML = "";
  firstInput = "";
  secondInput = "";
  displayNum = "";
  flag = false;
  resultInput.value = "";
});

// 計算ボタンのイベントリスナー
calculateButton.addEventListener("click", () => {
  calculateIF(operator)
});

async function calculateIF(operator) {
  
  document.getElementById("error").innerHTML = "";
  await sleep(100);
  const regex = /\+/;
  const ifValue = document.getElementById("result").value;
  // calculateFlagがtrueかどうかをチェックする
  if (regex.test(ifValue)){
    return calculate(operator)
  }
  
  if (calculateFlags) {
    calculateOther(operator);
  } else {
    // calculateFlagがfalseの場合はエラーメッセージを表示する
    document.getElementById(
      "error"
    ).innerHTML = `<p style="color: red">この演算記号はプログラムされていません<br>http://127.0.0.1:3000/index.js</p>`;
  }
}

function operatorIfFuncOther(operator) {
    if (operator == "+") {
      return;
    } else if (flag == false && operator == "-") {
      flag = true;
      displayNum = displayNum + operator;
      resultInput.value = displayNum;
    } else if (flag == false && operator == "×") {
      flag = true;
      displayNum = displayNum + operator;
      resultInput.value = displayNum;
    } else if (flag == false && operator == "÷") {
      flag = true;
      displayNum = displayNum + operator;
      resultInput.value = displayNum;
    }
  }
  
function calculateOther(operator) {
    if (operator == "+") {
      return;
    } else if (operator == "-") {
      result = Number(firstInput) - Number(secondInput);
      resultInput.value = result;
      flag = false;
      firstInput = result;
      secondInput = "";
      displayNum = result;
    } else if (operator == "×") {
      result = Number(firstInput) * Number(secondInput);
      resultInput.value = result;
      flag = false;
      firstInput = result;
      secondInput = "";
      displayNum = result;
    } else if (operator == "÷") {
      result = Number(firstInput) / Number(secondInput);
      resultInput.value = result;
      flag = false;
      firstInput = result;
      secondInput = "";
      displayNum = result;
    }
  }