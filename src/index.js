import readlineSync from 'readline-sync';
import { cons } from '@hexlet/pairs';

const getName = () => readlineSync.question('May I have your name? ');

const greet = (name) => console.log(`Hello, ${name}!\n`);

const askAnswer = () => readlineSync.question('Your answer: ');

const randomNumber = (range) => Math.floor(Math.random() * range);

const randomProcedure = () => {
  const str = '*-+';
  return str[randomNumber(3)];
};

// eslint-disable-next-line max-len
const gamesData = () => cons(cons(randomNumber(50), randomNumber(50)), cons(randomProcedure(), randomNumber(10)));

const playGame = (q, a) => {
  const name = getName();
  greet(name);

  let data = gamesData();
  let rounds = 3;

  while (rounds > 0) {
    console.log(`Question: ${q(data)}`);
    const playerAnswer = askAnswer();

    if (playerAnswer !== a(data)) {
      return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${a(data)}'.\nLet's try again, ${name}!`);
    }

    data = gamesData();
    rounds -= 1;
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${name}!`);
};

export default playGame;
