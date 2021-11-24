// The Math.pow() function returns the base to the exponent power, as in base^exponent.
function superRound(num, prec) {
  const res = 10 ** prec;

  return [
    Math.floor(num * res) / res,
    Math.trunc(num * res) / res,
    Math.ceil(num * res) / res,
    Math.round(num * res) / res,
    +num.toFixed(prec),
  ];
};

console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
