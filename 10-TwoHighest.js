// https://www.codewars.com/kata/57ab3c09bb994429df000a4a/

function twoHighest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let max1 = sortedArr[sortedArr.length - 1];
  let max2 = sortedArr[0];

  for (const val of arr) {
    if (val > max2 && val < max1) {
      max2 = val;
    }
  }

  return sortedArr.length < 2 ? arr : [max1, max2];
}

console.log(twoHighest([15, 20, 20, 17, 19, 21]));
