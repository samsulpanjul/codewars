function getCount(str) {
  const vowels = ["a", "i", "u", "e", "o"];

  let count = 0;

  for (const char of str) {
    for (const vowel of vowels) {
      if (char == vowel) {
        count++;
      }
    }
  }

  return count;
}

console.log(getCount("abracadabra"));
