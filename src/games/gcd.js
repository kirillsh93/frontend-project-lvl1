import { cons } from '@hexlet/pairs';
import { playGame, randomNumber } from '../index';

const welcomeText = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  const d = num1 % num2;

  return d === 0 ? num2 : gcd(num2, d);
};

const qna = () => {
  const num1 = randomNumber(100);
  const num2 = randomNumber(100);
  const bigger = num1 > num2 ? num1 : num2;
  const smaller = bigger === num1 ? num2 : num1;

  const q = `${num1} ${num2}`;
  const a = `${gcd(bigger, smaller)}`;

  return cons(q, a);
};

const startGcd = () => playGame(qna, welcomeText);

export default startGcd;
