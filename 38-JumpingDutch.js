// https://www.codewars.com/kata/570bcd9715944a2c8e000009

function sc(floor) {
  if (floor <= 1) return "";
  else if (floor <= 6) {
    return `Aa~ `.repeat(floor - 1) + `Pa! Aa!`;
  } else {
    return `Aa~ `.repeat(floor - 1) + "Pa!";
  }
}

console.log(sc(2));
console.log(sc(6));
console.log(sc(7));
