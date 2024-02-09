import rls from 'readline-sync';

export default function greetPlayer() {
  console.log('Welcome to the Brain Games!');
  const name = rls.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}
