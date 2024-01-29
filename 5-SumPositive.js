function positiveSum(arr) {
  let sum = 0;

  for (const num of arr) {
    if (num < 0) continue;
    sum += num;
  }

  return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
