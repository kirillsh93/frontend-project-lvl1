import { cons } from '@hexlet/pairs';
import { playGame, randomNumber } from '../index';

const welcomeText = 'What number is missing in the progression?';

const progression = (start, step, size, hidden) => {
  let result = `${start}`;

  if (hidden === 0) {
    result = '..';
  }

  for (let i = 1; i <= size; i += 1) {
    if (i === hidden) {
      result = `${result} ..`;
    } else {
      result = `${result} ${i * step + start}`;
    }
  }

  return result;
};

const qna = () => {
  const num = randomNumber(50);
  const step = randomNumber(20) + 1;
  const hidden = randomNumber(10);

  const q = `${progression(num, step, 9, hidden)}`;
  const a = `${hidden * step + num}`;

  return cons(q, a);
};

const startProgression = () => playGame(qna, welcomeText);

export default startProgression;
