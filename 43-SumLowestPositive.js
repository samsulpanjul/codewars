// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {
  let number1 = Number.MAX_VALUE;
  let number2 = Number.MAX_VALUE;
  let index1 = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < number1) {
      number1 = numbers[i];
      index1 = i;
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < number2) {
      if (index1 === i) continue;
      number2 = numbers[i];
    }
  }

  return number1 + number2;
}

// just use sort and sum index 0 and index 1 lol wtf

console.log(sumTwoSmallestNumbers([1000, 2, 3, 5]));
