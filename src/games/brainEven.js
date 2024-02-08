import getUserInput from '../cli.js';
import { getNameAndGreet, getRandomNumber, isEven } from '../utils.js';

const CORRECT_ANSWERS_TO_WIN = 3;
const RANGE = 100;

export default () => {
  let correctAnswersCount = 0;

  const name = getNameAndGreet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswersCount !== CORRECT_ANSWERS_TO_WIN) {
    const question = getRandomNumber(RANGE);

    console.log(`Question: ${question}`);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const playerAnswer = getUserInput('Your answer: ');

    if (playerAnswer !== correctAnswer) {
      console.log(` '${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
};
