let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayText = document.querySelector("#display-text");
let total = "";
const buttons = [...document.querySelectorAll(".btn")];
const numbers = [...document.querySelectorAll(".number")];
const operators = [...document.querySelectorAll(".operator")];
const operateBtn = document.querySelector(".operate");
const backBtn = document.querySelector(".back");
const clearBtn = document.querySelector(".clear");
let isFirstNumber = false;
let isSecondNumber = false;
let isOperator = false;

const add = (a, b) => {
  if (!Number(b)) b = 0;
  total = Number(a) + Number(b);
  return Math.round(total * 100) / 100;
};

const substract = (a, b) => {
  if (!Number(b)) b = 0;
  total = Number(a) - Number(b);
  return Math.round(total * 100) / 100;
};

const multiply = (a, b) => {
  if (!Number(b)) b = 1;
  total = Number(a) * Number(b);
  return Math.round(total * 100) / 100;
};

const devide = (a, b) => {
  if (!Number(b)) b = 1;
  total = Number(a) / Number(b);
  return Math.round(total * 100) / 100;
};

function operate(operator, x, y) {
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return substract(x, y);
    case "x":
      return multiply(x, y);
    case "/":
      return devide(x, y);
    default:
      return "Please use a valid operator.";
  }
}

function back() {
  let charArr = [];
  let newDisplay = "";
  const displayLength = displayText.textContent.length;
  for (let i = 0; i < displayLength; i++) {
    charArr.push(displayText.textContent[i]);
  }
  switch (true) {
    case charArr[displayLength - 1] === operator:
      operator = "";
    case charArr.length === 1:
      clear();
  }
  //   if (charArr[displayLength - 1] === operator) operator = "";
  charArr.pop();
  newDisplay = charArr.join("");
  displayText.textContent = newDisplay;
  if (displayText.textContent === "") displayText.textContent = "0";
}

function clear() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  displayText.textContent = "0";
  isFirstNumber = false;
  isSecondNumber = false;
  isOperator = false;
  total = "";
}

function setNumbers(num) {
  if (isFirstNumber === false) {
    return (firstNumber += num.textContent);
  } else if (isFirstNumber === true) {
    return (secondNumber += num.textContent);
  }
}

function setOperator(op) {
  switch (true) {
    case firstNumber === "":
      firstNumber = "0";
    case !isOperator:
      operator = op.textContent;
    case (isFirstNumber, isSecondNumber, isOperator, total):
      setTotal();
  }
  isFirstNumber = true;
}

function setTotal() {
  operate(operator, firstNumber, secondNumber);
  displayText.textContent = total;
  firstNumber = total;
  secondNumber = "";
}

numbers.forEach((btn) => {
  btn.addEventListener("click", () => setNumbers(btn));
});

operators.forEach((btn) => {
  btn.addEventListener("click", () => setOperator(btn));
});

operateBtn.addEventListener("click", () => {
  setTotal();
  operator = "";
});

backBtn.addEventListener("click", () => back());

clearBtn.addEventListener("click", () => clear());

// display logic
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (
      !btn.classList.contains("back") &&
      !btn.classList.contains("clear") &&
      !btn.classList.contains("operate")
    ) {
      if (displayText.textContent === "0" && !isFirstNumber)
        displayText.textContent = "";
      displayText.textContent += btn.textContent;
    }
  });
});
