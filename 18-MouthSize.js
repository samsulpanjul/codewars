// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/

const mouthSize = (animal) => (animal === "alligator" || animal === "ALLIGATOR" ? "small" : "wide");

console.log(mouthSize("alligator"));
console.log(mouthSize("ALLIGATOR"));
console.log(mouthSize("tes"));
