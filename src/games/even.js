import { cons } from '@hexlet/pairs';
import { playGame, randomNumber } from '../index';

const welcomeText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const qna = () => {
  const q = randomNumber(100);
  const a = isEven(q) ? 'yes' : 'no';
  return cons(q, a);
};

const startEven = () => playGame(qna, welcomeText);

export default startEven;
