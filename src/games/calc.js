import { cons } from '@hexlet/pairs';
import randomNumber from '../utils';
import playGame from '..';

const welcomeText = 'What is the result of the expression?';

const operations = '*-+';

const randomOperation = (operationsList) => {
  const randomSymbol = randomNumber(0, operationsList.length - 1);
  return operationsList[randomSymbol];
};

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    default:
      return num1 + num2;
  }
};

const generateQna = () => {
  const num1 = randomNumber(0, 50);
  const num2 = randomNumber(0, 50);
  const operation = randomOperation(operations);

  const question = `${num1} ${operation} ${num2}`;
  const answer = String(calculate(num1, num2, operation));

  return cons(question, answer);
};

const startCalc = () => playGame(generateQna, welcomeText);

export default startCalc;
