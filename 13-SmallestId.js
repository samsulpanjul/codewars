// https://www.codewars.com/kata/55eea63119278d571d00006a/

function nextId(ids) {
  const sorted = ids.sort((a, b) => a - b);
  console.log(sorted);

  for (let i = 0; i < ids.length; i++) {
    if (sorted[i] === i) {
      continue;
    } else {
      return i;
    }
  }
}

console.log(nextId([1, 2, 0, 2, 3, 5]));
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
