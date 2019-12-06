import { cons } from '@hexlet/pairs';
import randomNumber from '../utils';
import playGame from '..';

const welcomeText = 'What number is missing in the progression?';

const progressionSize = 10;

const generateQuestion = (first, step, size, hiddenElementIndex) => {
  let result;

  for (let i = 0; i < size; i += 1) {
    const num = i * step + first;
    if (hiddenElementIndex === i) {
      result = i === 0 ? '..' : `${result} ..`;
    } else {
      result = i === 0 ? `${num}` : `${result} ${num}`;
    }
  }

  return result;
};

const generateQuestionAnswer = () => {
  const first = randomNumber(0, 100);
  const step = randomNumber(1, 30);
  const hiddenElementIndex = randomNumber(0, progressionSize - 1);

  const question = generateQuestion(first, step, progressionSize, hiddenElementIndex);
  const answer = String(hiddenElementIndex * step + first);

  return cons(question, answer);
};

const startProgression = () => playGame(generateQuestionAnswer, welcomeText);

export default startProgression;
