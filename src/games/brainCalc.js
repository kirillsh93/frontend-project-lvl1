import { getRandomNumber, getRandomItem } from '../utils.js';

const RANGE = 20;
const OPERATIONS = ['-', '+', '*'];

const getCalcResult = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Wrong operation');
  }
};

const generateQestionAndAnswer = () => {
  const a = getRandomNumber(RANGE);
  const b = getRandomNumber(RANGE);
  const operation = getRandomItem(OPERATIONS);

  const question = `${a} ${operation} ${b}`;
  const correctAnswer = getCalcResult(a, b, operation);

  return [question, correctAnswer];
};

export default {
  description: 'What is the result of the expression?',
  nextRound: generateQestionAndAnswer,
};
