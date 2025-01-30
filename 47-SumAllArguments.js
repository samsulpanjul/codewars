// https://www.codewars.com/kata/540c33513b6532cd58000259

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 5, 111, 12));
