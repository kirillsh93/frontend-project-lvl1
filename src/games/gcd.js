import { cons } from '@hexlet/pairs';
import randomNumber from '../utils';
import playGame from '..';

const welcomeText = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (a, b) => (b === 0 ? a : findGreatestDivisor(b, a % b));

const generateQuestionAnswer = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const answer = String(findGreatestDivisor(num1, num2));

  return cons(question, answer);
};

const startGcd = () => playGame(generateQuestionAnswer, welcomeText);

export default startGcd;
