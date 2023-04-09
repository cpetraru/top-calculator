let firstNumber = 0;
let secondNumber = 0;
let operator = "";
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display-text");

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

function operate(operator, x, y) {
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
      return 'Please use a valid operator.';
  }
}
