const resultInput = document.getElementById('result');
let currentExpression = '';

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const calculateButton = document.getElementById('calculate');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    appendNumber(number);
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const operator = button.textContent;
    appendOperator(operator);
  });
});

clearButton.addEventListener('click', clearResult);

calculateButton.addEventListener('click', calculate);

function appendNumber(number) {
  // 小数点から始まる少数を受け付けた場合、0.に変換する
  if (currentExpression === '' && number === '.') {
    currentExpression = '0.';
  } else {
    currentExpression = currentExpression + number;
  }
  resultInput.value = currentExpression;
}

function appendOperator(operator) {
  currentExpression = currentExpression + operator;
  resultInput.value = currentExpression;
}

function calculate() {
  if (currentExpression !== '') {
    const expression = currentExpression.replace(/÷/g, '/');
    const replacedExpression = expression.replace(/×/g, '*');
    try {
      const calculateExpression = new String(`${replacedExpression}`);
      const result = calculateExpression.toString()
      resultInput.value = result;
      currentExpression = '';
    } catch (error) {
      resultInput.value = 'Error';
      result = ""
    }
  }
}

function clearResult() {
  currentExpression = '';
  resultInput.value = '';
}