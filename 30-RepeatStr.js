// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/

function repeatStr(n, s) {
  let x = s;
  for (let i = 1; i < n; i++) {
    x += s;
  }
  return x;
}

console.log(repeatStr(2, "#"));
