// 1. Check if it is Array
// no - null
// yes - next step
// 2. Interate Array and take square of any i
//3. push i to empy array
//

function squareArray(arr) {
  const squareNumbers = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    squareNumbers.push(arr[i] * arr[i]);
  }

  return squareNumbers;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
