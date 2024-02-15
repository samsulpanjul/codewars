// https://www.codewars.com/kata/55143152820d22cdf00001bb/

function number9(n) {
  let count = 0;
  for (let i = 9; i <= n; i++) {
    let str = String(i);
    for (let j = 0; j < str.length; j++) {
      str[j] == 9 ? count++ : null;
    }
  }
  return count;
}

console.log(number9(19));
