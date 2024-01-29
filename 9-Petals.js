function howMuchILoveYou(nbPetals) {
  const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];

  const say = (nbPetals - 1) % phrases.length;
  return phrases[say];
}

console.log(howMuchILoveYou(14));
