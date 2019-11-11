#!/usr/bin/env node

import {
  playGame, randomPair, getName, greet,
} from '../index';
import { question, rightAnswer } from '../games/progression';

console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?\n');

const name = getName();

greet(name);

playGame(0, name, question, rightAnswer, randomPair());
