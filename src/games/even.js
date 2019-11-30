import { cons } from '@hexlet/pairs';
import randomNumber from '../utils';
import playGame from '..';

const welcomeText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateQuestionAnswer = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const startEven = () => playGame(generateQuestionAnswer, welcomeText);

export default startEven;
