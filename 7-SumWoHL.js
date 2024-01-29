function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0;
  }

  let high = array[0];
  let low = array[0];
  let sum = 0;

  for (const number of array) {
    if (number < low) low = number;
    else if (number > high) high = number;

    sum += number;
  }
  return sum - (low + high);
}

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([3, 5]));
console.log(sumArray(null));
