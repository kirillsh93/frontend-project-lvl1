import { getRandomNumber, isEven } from '../utils.js';

const RANGE = 100;

const generateQestionAndAnswer = () => {
  const question = getRandomNumber(RANGE);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  nextRound: generateQestionAndAnswer,
};
