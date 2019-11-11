import { car, cdr } from '@hexlet/pairs';

const question = (p) => {
  const num1 = car(car(p));
  const num2 = cdr(car(p));
  const procedure = cdr(p);

  return `${num1} ${procedure} ${num2}`;
};

const rightAnswer = (p) => {
  const num1 = car(car(p));
  const num2 = cdr(car(p));
  const procedure = cdr(p);

  switch (procedure) {
    case '*':
      return `${num1 * num2}`;
    case '-':
      return `${num1 - num2}`;
    default:
      return `${num1 + num2}`;
  }
};

export { question, rightAnswer };
