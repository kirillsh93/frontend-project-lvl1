import { cons } from '@hexlet/pairs';
import { playGame, randomNumber } from '../index';

const welcomeText = 'Welcome to the Brain Games!\nWhat number is missing in the progression?\n';

const progression = (start, step, size, hidden) => {
  let result = `${start}`;

  if (hidden === 0) {
    result = '..';
  }

  for (let i = 1; i <= size; i += 1) {
    if (i === hidden) {
      result += ' ..';
    } else {
      result = `${result} ${i * step + start}`;
    }
  }

  return result;
};

const qna = () => {
  const num = randomNumber(50);
  const step = randomNumber(20);
  const hidden = randomNumber(10);

  return cons(`${progression(num, step, 9, hidden)}`, `${hidden * step + num}`);
};

const startProgression = () => playGame(qna, welcomeText);

export default startProgression;
