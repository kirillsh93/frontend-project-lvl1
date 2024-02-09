export const getRandomNumber = (range) => Math.floor(Math.random() * range);

export const isEven = (num) => num % 2 === 0;

export const getRandomItem = (arr) => arr[getRandomNumber(arr.length)];
