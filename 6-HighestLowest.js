function highAndLow(numbers) {
  let high = numbers[0];
  let low = numbers[0];

  for (const number of numbers) {
    if (number > high) high = number;
    if (number < low) low = number;
  }

  return `${high} ${low}`;
}

console.log(highAndLow("45432159"));
