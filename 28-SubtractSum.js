// https://www.codewars.com/kata/56c5847f27be2c3db20009c3/

function SubtractSum(n) {
  let x = n
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((total, cur) => total + cur);
  return x;
}

console.log(SubtractSum(10));
