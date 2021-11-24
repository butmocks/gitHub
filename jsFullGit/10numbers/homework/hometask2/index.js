const getParsedIntegers = arr => arr.map(el => Number.parseInt(el, 10));

const getParsedIntegersV2 = arr => arr.map(el => parseInt(el, 10));

const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));

const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));

const array = ['1', '2as', '3.2', '4.3as'];
console.log(getParsedFloatsV2(array));
