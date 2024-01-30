function array(string) {
  const splitted = string.split(",");

  if (splitted.length < 3) {
    return null;
  }

  splitted.shift();
  splitted.pop();
  return splitted.join(" ");
}

console.log(array("A1,B2,C3,D4,E5"));
console.log(array("A1,B2,C3"));
