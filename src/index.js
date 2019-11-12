import readlineSync from 'readline-sync';
import { cons } from '@hexlet/pairs';

const getName = () => readlineSync.question('May I have your name? ');

const greet = (name) => console.log(`Hello, ${name}!\n`);

const randomNumber = (range) => Math.floor(Math.random() * range);

const randomProcedure = () => {
  const str = '*-+';

  return str[randomNumber(3)];
};

const procedure = (num1, num2, proc) => {
  switch (proc) {
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    default:
      return num1 + num2;
  }
};

const randomPair = () => cons(cons(randomNumber(100), randomNumber(100)), cons(randomProcedure(), randomNumber(10)));

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
  playGame, randomPair, getName, greet, procedure, randomNumber,
};
