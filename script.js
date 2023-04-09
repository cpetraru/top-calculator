let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayText = document.querySelector("#display-text");
const buttons = [...document.querySelectorAll(".btn")];
const numbers = [...document.querySelectorAll(".number")];
const operators = [...document.querySelectorAll(".operator")];
let isFirstNumber = false;
let isSecondNumber = false;
let isOperator = false;

const add = (a, b) => {
  if (!Number(b)) b = 0;
  return Number(a) + Number(b);
};

const substract = (a, b) => {
  if (!Number(b)) b = 0;
  return Number(a) - Number(b);
};

const multiply = (a, b) => {
  if (!Number(b)) b = 1;
  return Number(a) * Number(b);
};

const devide = (a, b) => {
  if (!Number(b)) b = 1;
  return Number(a) / Number(b);
};

const operate = (operator, x, y) => {
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return substract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return devide(x, y);
    default:
      return "Please use a valid operator.";
  }
};

// display logic
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (true) {
      case btn.classList.contains("back"):
        back();
      case btn.classList.contains("clear"):
        clear();
    }
    if (!btn.classList.contains("back") && !btn.classList.contains("clear")) {
      displayText.innerText += btn.textContent;
    }
  });
});

numbers.forEach((btn) => {
  btn.addEventListener("click", () => setNumbers(btn));
});

operators.forEach((btn) => {
  btn.addEventListener("click", () => setOperator(btn));
});

function back() {
  let charArr = [];
  let newDisplay = "";
  for (let i = 0; i < displayText.textContent.length - 1; i++) {
    charArr.push(displayText.textContent[i]);
  }
  newDisplay = charArr.join("");
  displayText.textContent = newDisplay;
}

function clear() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  displayText.textContent = "";
  isFirstNumber = false;
  isSecondNumber = false;
  isOperator = false;
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
  }
  isFirstNumber = true;
}
