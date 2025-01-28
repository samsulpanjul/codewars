// https://www.codewars.com/kata/5390bac347d09b7da40006f6

function toJadenCase(str) {
  const words = str.split(" ");
  const upper = words.map((c) => c.at(0).toUpperCase() + c.slice(1));
  return upper.join(" ");
}
