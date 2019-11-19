import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const randomNumber = (range) => Math.floor(Math.random() * range);

const playGame = (qna, text) => {
  console.log(`${text}`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let data = qna();
  let rounds = 3;

  while (rounds > 0) {
    console.log(`Question: ${car(data)}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== cdr(data)) {
      return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${cdr(data)}'.\nLet's try again, ${name}!`);
    }

    data = qna();
    rounds -= 1;
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${name}!`);
};

export { playGame, randomNumber };
