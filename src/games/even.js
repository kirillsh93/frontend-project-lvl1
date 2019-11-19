import { cons } from '@hexlet/pairs';
import { playGame, randomNumber } from '../index';

const welcomeText = 'Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const qna = () => {
  const q = randomNumber(100);
  const a = isEven(q);
  return cons(q, a);
};

const startEven = () => playGame(qna, welcomeText);

export default startEven;
