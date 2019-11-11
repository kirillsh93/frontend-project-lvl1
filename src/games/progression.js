import { car, cdr } from '@hexlet/pairs';

const progression = (start, step, size, hidden) => {
  let num = start;
  let result = `${num}`;

  if (hidden === 0) {
    result = '..';
  }

  for (let i = 1; i <= size; i += 1) {
    if (i === hidden) {
      num += step;
      result += ' ..';
    } else {
      num += step;
      result = `${result} ${num}`;
    }
  }
  return result;
};

const hiddenNumber = (start, step, count, hidden) => {
  const next = start + step;

  return count === hidden ? start : hiddenNumber(next, step, count + 1, hidden);
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
  const toHide = cdr(cdr(p));

  return `${hiddenNumber(start, step, 0, toHide)}`;
};

export { question, rightAnswer };
