import getUserInput from './cli.js';

export const getRandomNumber = (range) => Math.floor(Math.random() * range) + 1;

export const isEven = (num) => num % 2 === 0;

export const getNameAndGreet = () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserInput('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
