#!/usr/bin/env node

import { getName, playGame } from '../even';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');

const name = getName();

console.log(`Hello, ${name}!\n`);

playGame(0, name);
