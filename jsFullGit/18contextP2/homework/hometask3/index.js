// input arr
// output number

function sumOfSquares() {
  return [...arguments].reduce((acc, el) => acc + el * el, 0);
}

sumOfSquares();
console.log(sumOfSquares(1, 2, 3, 4, 5, 6));