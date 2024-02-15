// https://www.codewars.com/kata/559ac78160f0be07c200005a/

function nameShuffler(str) {
  let splitted = str.split(" ");
  splitted.unshift(splitted[1]);
  splitted.pop();
  return splitted.join(" ");
}

console.log(nameShuffler("tom jerry"));
