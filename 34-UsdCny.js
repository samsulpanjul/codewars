// https://www.codewars.com/kata/5977618080ef220766000022

function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

console.log(usdcny(15));
console.log(usdcny(465));
