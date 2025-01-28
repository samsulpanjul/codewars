// https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(sheep) {
  sheep = sheep.filter(Boolean);
  return sheep.length;
}

console.log(countSheeps([undefined, null, false, true]));
console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]));
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));
