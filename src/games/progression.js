import { car, cdr } from '@hexlet/pairs';
import playGame from '../index';

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

const question = (p) => {
  const start = car(car(p));
  const step = cdr(car(p));
  const toHide = cdr(cdr(p));

  return progression(start, step, 9, toHide);
};

const rightAnswer = (p) => {
  const start = car(car(p));
  const step = cdr(car(p));
  const n = cdr(cdr(p));

  return `${n * step + start}`;
};

const startProgression = () => {
  console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?\n');
  return playGame(question, rightAnswer);
};

export default startProgression;
