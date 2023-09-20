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
  button.addEventListener("click", () => {

    // フラグがfalseでないかをチェックします
    if (flag != false) {
      document.getElementById("error").innerHTML =
        "連続して演算記号を入力することはできません";
      return;
    } else {
      // ボタンのテキストコンテンツから演算子を取得します
      operator = button.textContent;

      // operatorIfFunc関数を呼び出します
      operatorIfFunc(operator);

      // operatorFlagをチェックし、適切な関数を呼び出します
      if (operatorFlag) {
        operatorIfFuncOther(operator);
      } else {
        document.getElementById(
          "error"
        ).innerHTML = `<p style="color: red">この演算子はプログラムされていません<br>http://127.0.0.1:3000/index.js</p>`;
      }
    }
  });
});
// クリアボタンのイベントリスナー
clearButton.addEventListener("click", () => {
  document.getElementById("error").innerHTML = "";
  num1 = "";
  num2 = "";
  displayNum = "";
  flag = false;
  resultInput.value = "";
});

// 計算ボタンのイベントリスナー
calculateButton.addEventListener("click", () => {
  document.getElementById("error").innerHTML = "";
  calculate();

  // calculateFlagがtrueかどうかをチェックする
  if (calculateFlag) {
    calculateOther();
  } else {
    // calculateFlagがfalseの場合はエラーメッセージを表示する
    document.getElementById(
      "error"
    ).innerHTML = `<p style="color: red">この演算記号はプログラムされていません<br>http://127.0.0.1:3000/index.js</p>`;
  }
});
