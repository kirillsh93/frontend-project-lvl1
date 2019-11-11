import { car, cdr } from '@hexlet/pairs';

const gcd = (num1, num2) => {
  const d = num1 % num2;

  return d === 0 ? num2 : gcd(num2, d);
};

const question = (p) => {
  const num1 = car(car(p));
  const num2 = cdr(car(p));

  return `${num1} ${num2}`;
};

const rightAnswer = (p) => {
  const num1 = car(car(p));
  const num2 = cdr(car(p));
  const b = num1 > num2 ? num1 : num2;
  const s = b === num1 ? num2 : num1;

  return `${gcd(b, s)}`;
};

export { question, rightAnswer };
