function oddCount(n) {
  const arr = [];
  for (let i = 1; i < n; i++) {
    i % 2 === 1 ? arr.push(i) : null;
  }
  return arr.length;
}

console.log(oddCount(15));
console.log(oddCount(233));
