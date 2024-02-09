import rls from 'readline-sync';

const MAX_ROUNDS = 3;

export default function app(game) {
  let roundCount = 0;
  // Greet player
  console.log('Welcome to the Brain Games!');
  const name = rls.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // Print game description
  console.log(game.description);

  // Main logic
  while (roundCount !== MAX_ROUNDS) {
    const [question, correctAnswer] = game.nextRound();

    // Print question and get player's answer
    console.log(`Question: ${question}`);
    const playerAnswer = rls.question('Your answer: ');

    // Check correctness
    if (playerAnswer !== correctAnswer.toString()) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    roundCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
}
