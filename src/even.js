import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');

const rightAnswer = (randomNumber) => (randomNumber % 2 === 0 ? 'yes' : 'no');

export const playGame = (rightAnswers, name) => {
  while (rightAnswers < 3) {
    const randomNumber = Math.round(Math.random() * 100);
    const playerAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

    if (playerAnswer === rightAnswer(randomNumber)) {
      console.log('Correct!');
      return playGame(rightAnswers + 1, name);
    }
    return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer(randomNumber)}'.\nLet's try again, ${name}!`);
  }
  return console.log(`Congratulations, ${name}!`);
};
