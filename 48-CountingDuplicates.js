// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
  const textLowerCase = text.toLowerCase();
  const duplicateChar = [];
  let duplicate = 0;

  for (let i = 0; i < textLowerCase.length; i++) {
    let c = textLowerCase[i];
    for (let j = 0; j < textLowerCase.length; j++) {
      if (j === i) continue;
      if (c === textLowerCase[j]) {
        if (!duplicateChar.includes(c)) {
          duplicate++;
          duplicateChar.push(c);
        }
      }
    }
  }

  return duplicate;
}

console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount("abcde"));
