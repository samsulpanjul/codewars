// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/

// function sum(numbers) {
//   let total = 0;

//   for (const num of numbers) {
//     total += num;
//   }

//   return total;
// }

const sum = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(sum([1, 5.2, 4, 0, -1]));
