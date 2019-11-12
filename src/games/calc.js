import { car, cdr } from '@hexlet/pairs';

const procedure = (num1, num2, proc) => {
  switch (proc) {
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    default:
      return num1 + num2;
  }
};

const question = (p) => {
  const num1 = car(car(p));
  const num2 = cdr(car(p));
  const proc = car(cdr(p));

  return `${num1} ${proc} ${num2}`;
};

const rightAnswer = (p) => {
  const num1 = car(car(p));
  const num2 = cdr(car(p));
  const proc = car(cdr(p));

  return `${procedure(num1, num2, proc)}`;
};

export { question, rightAnswer };
