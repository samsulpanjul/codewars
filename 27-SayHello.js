// https://www.codewars.com/kata/5302d846be2a9189af0001e4/

const sayHello = (name, city, state) => `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}`;

// Hello, John Smith! Welcome to Phoenix, Arizona!

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));
console.log(sayHello(["Franklin", "Delano", "Roosevelt"], "Chicago", "Illinois"));
