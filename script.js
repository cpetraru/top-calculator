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
