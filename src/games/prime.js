import { cons } from '@hexlet/pairs';
import { playGame, randomNumber } from '../index';

const welcomeText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let d = 2; d * d <= num; d += 1) {
    if (num % d === 0) {
      return false;
    }
  }

  return true;
};

const qna = () => {
  const q = randomNumber(100);
  const a = isPrime(q) ? 'yes' : 'no';

  return cons(q, a);
};

const startPrime = () => playGame(qna, welcomeText);

export default startPrime;
