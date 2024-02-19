function calculateAge(x, y) {
  if (y - x > 1) {
    return `You are ${y - x} years old.`;
  } else if (y - x < -1) {
    return `You will be born in ${(y - x) * -1} years.`;
  } else if (y - x == 1) {
    return `You are 1 year old.`;
  } else if (y - x == -1) {
    return `You will be born in 1 year.`;
  } else {
    return `You were born this very year!`;
  }
}

console.log(calculateAge(2012, 2016));
console.log(calculateAge(2012, 2016));
console.log(calculateAge(2012, 2020));
console.log(calculateAge(2030, 2020));
