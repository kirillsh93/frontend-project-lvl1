import { cons } from '@hexlet/pairs';
import { playGame, randomNumber } from '../index';

const welcomeText = 'Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (num, div) => {
  if (num < 2) {
    return 'no';
  }

  if (div === 1) {
    return 'yes';
  }

  return num % div === 0 ? 'no' : isPrime(num, div - 1);
};

const qna = () => {
  const num = randomNumber(100);
  const half = Math.round(num / 2);

  return cons(num, isPrime(num, half));
};

const startPrime = () => playGame(qna, welcomeText);

export default startPrime;
