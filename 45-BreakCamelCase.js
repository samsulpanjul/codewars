// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  const str = [];

  string.split("").map((c) => {
    if (c === c.toUpperCase()) str.push(" ", c);
    else str.push(c);
  });

  return str.join("");
}

console.log(solution("camelCaseTest123"));
