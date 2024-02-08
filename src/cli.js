import rls from 'readline-sync';

export const greetUser = () => {
  const name = rls.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
