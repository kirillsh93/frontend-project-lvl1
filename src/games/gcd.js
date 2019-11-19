import { cons } from '@hexlet/pairs';
import { playGame, randomNumber } from '../index';

const welcomeText = 'Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n';

const gcd = (num1, num2) => {
  const d = num1 % num2;

  return d === 0 ? num2 : gcd(num2, d);
};

const qna = () => {
  const num1 = randomNumber(100);
  const num2 = randomNumber(100);
  const bigger = num1 > num2 ? num1 : num2;
  const smaller = bigger === num1 ? num2 : num1;

  return cons(`${num1} ${num2}`, `${gcd(bigger, smaller)}`);
};

const startGcd = () => playGame(qna, welcomeText);

export default startGcd;
