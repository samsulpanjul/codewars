// https://www.codewars.com/kata/50654ddff44f800200000007/javascript

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

console.log(solution("45", "1"));
console.log(solution("45", "155"));
console.log(solution("Soon", "Me"));
