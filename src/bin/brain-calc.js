#!/usr/bin/env node

import {
  playGame, randomPair, getName, greet,
} from '../index';
import { question, rightAnswer } from '../games/calc';

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');

const name = getName();

greet(name);

playGame(0, name, question, rightAnswer, randomPair());
