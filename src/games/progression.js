import { cons } from '@hexlet/pairs';
import randomNumber from '../utils';
import playGame from '..';

const welcomeText = 'What number is missing in the progression?';

const getProgression = (first, step, size, hidden) => {
  let result = '';

  for (let i = 0; i < size; i += 1) {
    if (hidden === i) {
      result = i === 0 ? '..' : `${result} ..`;
    } else {
      result = `${result} ${i * step + first}`;
    }
  }

  return result;
};

const generateQna = () => {
  const first = randomNumber(0, 100);
  const step = randomNumber(1, 30);
  const hidden = randomNumber(0, 9);

  const question = getProgression(first, step, 10, hidden);
  const answer = String(hidden * step + first);

  return cons(question, answer);
};

const startProgression = () => playGame(generateQna, welcomeText);

export default startProgression;
