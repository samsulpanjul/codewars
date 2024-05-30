// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
  return array.length === 0 ? 0 : array.reduce((total, curr) => total + curr, 0) / array.length;
}

console.log(findAverage([1, 3, 5, 7, 8, 10]));
