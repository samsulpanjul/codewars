// https://www.codewars.com/kata/538835ae443aae6e03000547

function add(n) {
  return (x) => {
    return n + x;
  };
}

const addOne = add(1);
const addThree = add(3);

console.log(addOne(3));
console.log(addOne(5));

console.log(addThree(5));

console.log(add(5)(5));
