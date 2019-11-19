import { cons } from '@hexlet/pairs';
import { playGame, randomNumber } from '../index';

const welcomeText = 'Welcome to the Brain Games!\nWhat is the result of the expression?\n';

const calculate = (num1, num2, proc) => {
  switch (proc) {
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    default:
      return num1 + num2;
  }
};

const randomProcedure = () => {
  const str = '*-+';
  return str[randomNumber(3)];
};

const qna = () => {
  const num1 = randomNumber(50);
  const num2 = randomNumber(50);
  const proc = randomProcedure();

  return cons(`${num1} ${proc} ${num2}`, `${calculate(num1, num2, proc)}`);
};

const startCalc = () => playGame(qna, welcomeText);

export default startCalc;
