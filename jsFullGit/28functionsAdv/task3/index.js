const mult = numberOne => numberTwo => numberOne * numberTwo;
const twice = numberOne => mult(numberOne)(2);
const triple = numberOne => mult(numberOne)(3);
console.log(twice(4));
console.log(triple(4));
console.log(mult(4)(2));
