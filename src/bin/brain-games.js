#!/usr/bin/env node

import { getName, greet } from '../index';

console.log('Welcome to the Brain Games!\n');

const name = getName();

greet(name);
