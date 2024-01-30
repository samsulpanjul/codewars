function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
  for (const num of classPoints) {
    total += num;
  }

  return total / classPoints.length < yourPoints;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
