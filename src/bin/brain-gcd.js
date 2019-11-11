#!/usr/bin/env node

import {
  playGame, randomPair, getName, greet,
} from '../index';
import { question, rightAnswer } from '../games/gcd';

console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n');

const name = getName();

greet(name);

playGame(0, name, question, rightAnswer, randomPair());
