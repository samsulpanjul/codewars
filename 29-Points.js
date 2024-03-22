// https://www.codewars.com/kata/5bb904724c47249b10000131/

function points(games) {
  let points = 0;
  for (const score of games) {
    const point = score.split(":");
    const x = point[0];
    const y = point[1];
    if (x > y) {
      points += 3;
    } else if (x < y) {
      continue;
    } else if (x === y) {
      points += 1;
    }
  }
  return points;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]));
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]));
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]));
