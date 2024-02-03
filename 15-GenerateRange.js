function generateRange(min, max, step) {
  const arr = [];
  for (min; min <= max; min += step) {
    arr.push(min);
  }
  return arr;
}

console.log(generateRange(2, 10, 2));
console.log(generateRange(-10, 1, 1));
console.log(generateRange(1, 15, 20));
