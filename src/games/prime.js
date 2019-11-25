import { cons } from '@hexlet/pairs';
import randomNumber from '../utils';
import playGame from '..';

const welcomeText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let div = 2; div <= Math.sqrt(num); div += 1) {
    if (num % div === 0) {
      return false;
    }
  }

  return true;
};

const generateQna = () => {
  const question = randomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

const startPrime = () => playGame(generateQna, welcomeText);

export default startPrime;
