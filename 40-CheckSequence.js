// https://www.codewars.com/kata/5c1ac4f002c59c725900003f

function checkSequence(sequence, l, n) {
  let length = 1;
  let count = 0;

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] === sequence[i - 1]) {
      length++;
      if (length === l) {
        count++;
        length = 1;
      }
    }
  }

  return count === n;
}

console.log(checkSequence("THHHH", 3, 1));
