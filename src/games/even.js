import { car } from '@hexlet/pairs';
import playGame from '../index';

const question = (p) => {
  const number = car(car(p));
  return number;
};

const rightAnswer = (p) => {
  const number = car(car(p));
  return number % 2 === 0 ? 'yes' : 'no';
};

const startEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');
  return playGame(question, rightAnswer);
};

export default startEven;
