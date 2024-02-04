// https://www.codewars.com/kata/57f780909f7e8e3183000078/

// function grow(x) {
//   let res = 1;
//   for (const num of x) {
//     res *= num;
//   }
//   return res;
// }

const grow = (x) => x.reduce((acc, num) => acc * num, 1);

console.log(grow([4, 1, 1, 1, 4]));
