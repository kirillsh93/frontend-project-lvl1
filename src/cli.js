import rls from 'readline-sync';

export default function getUserInput(prompt) {
  const userInput = rls.question(prompt);
  return userInput;
}
