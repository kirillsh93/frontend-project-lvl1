#!/usr/bin/env node

import {
  playGame, randomPair, getName, greet,
} from '../index';
import { question, rightAnswer } from '../games/prime';

console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".\n');

const name = getName();

greet(name);

playGame(0, name, question, rightAnswer, randomPair());
