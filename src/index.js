import readlineSync from 'readline-sync';

const greet = () => {
  const answer = readlineSync.question('May I have your name? ');

  return console.log(`Hello, ${answer}!`);
};

export default greet;
