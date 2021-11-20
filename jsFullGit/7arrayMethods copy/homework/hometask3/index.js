const flatArray = arr => arr.flat().sort((a, b) => a - b);

const array = [1, 3, 2, 4, [(1, 2, 3)], [5]];
console.log(flatArray(array));