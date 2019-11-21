import { cons } from '@hexlet/pairs';
import { playGame, randomNumber } from '../index';

const welcomeText = 'What is the result of the expression?';

const symbols = '*-+';

const randomSymbol = (str) => str[randomNumber(str.length)];

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

const qna = () => {
  const num1 = randomNumber(50);
  const num2 = randomNumber(50);
  const proc = randomSymbol(symbols);

  const q = `${num1} ${proc} ${num2}`;
  const a = `${calculate(num1, num2, proc)}`;

  return cons(q, a);
};

const startCalc = () => playGame(qna, welcomeText);

export default startCalc;
