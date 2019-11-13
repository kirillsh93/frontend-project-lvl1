import { car } from '@hexlet/pairs';
import playGame from '../index';

const isPrime = (num, div) => {
  if (div === 1) {
    return true;
  }
  return num % div === 0 ? false : isPrime(num, div - 1);
};

const question = (p) => {
  const number = car(car(p));

  return number;
};

const rightAnswer = (p) => {
  const number = car(car(p));
  const half = Math.round(number / 2);
  if (number < 2) {
    return 'no';
  }
  return isPrime(number, half) ? 'yes' : 'no';
};

const startPrime = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".\n');
  return playGame(question, rightAnswer);
};

export default startPrime;
