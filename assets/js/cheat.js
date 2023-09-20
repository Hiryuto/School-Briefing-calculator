var calculateFlag = false;
var operatorFlag = false;
function operatorOtherFlag() {
  operatorFlag = true;
}
function calculateOtherFlag() {
  calculateFlag = true;
}
function cheat1() {
  const container = document.querySelector(".container4");
  const createAndAppendElement = (className, textContent) => {
    const newElement = document.createElement("div");
    newElement.className = className;
    newElement.textContent = textContent;
    container.appendChild(newElement);
  };

  createAndAppendElement("item number", "2");
  createAndAppendElement("item number", "3");
  createAndAppendElement("item operator", "-");

  const container3 = document.createElement("div");
  container3.className = "container container3";
  container.before(container3);

  const createAndAppendElementToContainer3 = (className, textContent) => {
    const newElement = document.createElement("div");
    newElement.className = className;
    newElement.textContent = textContent;
    container3.appendChild(newElement);
  };

  createAndAppendElementToContainer3("item number", "4");
  createAndAppendElementToContainer3("item number", "5");
  createAndAppendElementToContainer3("item number", "6");
  createAndAppendElementToContainer3("item operator", "×");

  const container4 = document.createElement("div");
  container4.className = "container container2";
  container3.before(container4);

  const createAndAppendElementToContainer4 = (className, textContent) => {
    const newElement = document.createElement("div");
    newElement.className = className;
    newElement.textContent = textContent;
    container4.appendChild(newElement);
  };

  createAndAppendElementToContainer4("item number", "7");
  createAndAppendElementToContainer4("item number", "8");
  createAndAppendElementToContainer4("item number", "9");
  createAndAppendElementToContainer4("item operator", "÷");

  const container5 = document.createElement("div");
  container5.className = "container container1";
  container4.before(container5);

  const createAndAppendElementToContainer5 = (className, textContent, ID) => {
    const newElement = document.createElement("div");
    newElement.className = className;
    newElement.textContent = textContent;
    newElement.id = ID;
    container5.appendChild(newElement);
  };

  createAndAppendElementToContainer5("item empty");
  createAndAppendElementToContainer5("item empty");
  createAndAppendElementToContainer5("item empty");
  createAndAppendElementToContainer5("item", "C", "clear");

  const NewContainer5 = document.createElement("div");
  NewContainer5.className = "container container5";
  container.after(NewContainer5);

  const createAndAppendElementToNewContainer5 = (
    className,
    textContent,
    ID
  ) => {
    const newElement = document.createElement("div");
    newElement.className = className;
    newElement.textContent = textContent;
    newElement.id = ID;
    NewContainer5.appendChild(newElement);
  };

  createAndAppendElementToNewContainer5("item number", "0");
  createAndAppendElementToNewContainer5("item operator", "🥺");
  createAndAppendElementToNewContainer5("item", "=", "calculate");
  createAndAppendElementToNewContainer5("item operator", "+");
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
function calculateOther() {
  if (operator == "+") {
    return;
  } else if (operator == "-") {
    result = Number(num1) - Number(num2);
    resultInput.value = result;
    flag = false;
    num1 = result;
    num2 = "";
    displayNum = result;
  } else if (operator == "×") {
    result = Number(num1) * Number(num2);
    resultInput.value = result;
    flag = false;
    num1 = result;
    num2 = "";
    displayNum = result;
  } else if (operator == "÷") {
    result = Number(num1) / Number(num2);
    resultInput.value = result;
    flag = false;
    num1 = result;
    num2 = "";
    displayNum = result;
  }
}
