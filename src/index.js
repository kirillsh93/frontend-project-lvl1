import readlineSync from 'readline-sync';
import { cons } from '@hexlet/pairs';

const getName = () => readlineSync.question('May I have your name? ');

const greet = (name) => console.log(`Hello, ${name}!\n`);

const randomNumber = () => Math.round(Math.random() * 100);

const randomProcedure = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  const str = '*-+';
  return str[randomNum - 1];
};

const randomPair = () => cons(cons(randomNumber(), randomNumber()), randomProcedure());

const askAnswer = () => readlineSync.question('Your answer: ');

const playGame = (count, name, q, a, p) => {
  while (count < 3) {
    console.log(`Question: ${q(p)}`);
    const playerAnswer = askAnswer();

    if (playerAnswer === a(p)) {
      console.log('Correct!');
      return playGame(count + 1, name, q, a, randomPair());
    }
    return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${a(p)}'.\nLet's try again, ${name}!`);
  }
  return console.log(`Congratulations, ${name}!`);
};

export {
  playGame, randomPair, getName, greet,
};
