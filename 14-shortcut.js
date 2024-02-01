// https://www.codewars.com/kata/5547929140907378f9000039/

// function shortcut(string) {
//   const vowels = ["a", "i", "u", "e", "o"];
//   const splitted = string.split("");
//   for (let i = 0; i < splitted.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (splitted[i] == vowels[j]) {
//         splitted.splice(i, 1);
//       }
//     }
//   }
//   return splitted.join("");
// }

function shortcut(string) {
  const vowels = ["a", "i", "u", "e", "o"];
  const splitted = string.split("");
  for (const char of string) {
    for (const vow of vowels) {
      //   if (char == vow) {
      //     splitted.splice(splitted.indexOf(char), 1);
      //   }
      char === vow ? splitted.splice(splitted.indexOf(char), 1) : null;
    }
  }
  return splitted.join("");
}

console.log(shortcut("hello"));
