import { car } from '@hexlet/pairs';

const isPrime = (num, h) => {
  if (h === 1) {
    return true;
  }
  return num % h === 0 ? false : isPrime(num, h - 1);
};

const question = (p) => {
  const number = car(car(p));

  return number;
};

const rightAnswer = (p) => {
  const number = car(car(p));
  const half = Math.round(number / 2);
  return isPrime(number, half) ? 'yes' : 'no';
};

export { question, rightAnswer };
