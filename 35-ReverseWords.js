function reverseWords(str) {
  let split = str.split(" ");
  let reversed = [];
  for (let i = split.length - 1; i >= 0; i--) {
    reversed.push(split[i]);
  }

  return reversed.join(" ");
}

console.log(reverseWords("Hello World!"));
