import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (qna, text) => {
  console.log(`Welcome to the Brain Games!\n${text}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let data = qna();
  let rounds = 3;

  while (rounds > 0) {
    console.log(`Question: ${car(data)}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== cdr(data)) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${cdr(data)}'.\nLet's try again, ${name}!`);
      return;
    }

    data = qna();
    rounds -= 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
