import { cons } from '@hexlet/pairs';
import randomNumber from '../utils';
import playGame from '..';

const welcomeText = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  const big = num1 > num2 ? num1 : num2;
  const small = big === num1 ? num2 : num1;

  const findDivisor = (bigNum, smallNum) => {
    const divisor = bigNum % smallNum;
    return divisor === 0 ? smallNum : findDivisor(smallNum, divisor);
  };

  return findDivisor(big, small);
};

const generateQna = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const answer = String(findGcd(num1, num2));

  return cons(question, answer);
};

const startGcd = () => playGame(generateQna, welcomeText);

export default startGcd;
