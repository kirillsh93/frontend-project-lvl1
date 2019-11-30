import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

export default (questionAnswer, welcomeText) => {
  console.log(`Welcome to the Brain Games!\n${welcomeText}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const data = questionAnswer();

    console.log(`Question: ${car(data)}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== cdr(data)) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${cdr(data)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
