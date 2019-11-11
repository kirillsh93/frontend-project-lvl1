import { car } from '@hexlet/pairs';

const question = (p) => {
  const number = car(car(p));

  return number;
};

const rightAnswer = (p) => {
  const number = car(car(p));
  return number % 2 === 0 ? 'yes' : 'no';
};

export { question, rightAnswer };
