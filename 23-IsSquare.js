var isSquare = function (n) {
  for (let i = 0; i <= n; i++) {
    if (n === i ** 2) {
      return true;
    }
  }
  return false; // fix me
};

console.log(isSquare(25));
console.log(isSquare(7));
