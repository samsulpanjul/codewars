const areYouPlayingBanjo = (name) => (name[0] === "R" || name[0] === "r" ? `${name} plays banjo` : `${name} does not play banjo`);

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("bravo"));
console.log(areYouPlayingBanjo("rolf"));
