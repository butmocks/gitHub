// const numbers = [11, 22, 33, 44, 55, 66];

function swap(numbers) {
  const [a, ...rest] = numbers;
  return [...rest, a];
}


function swapManual(numbers) {
  let numbersArr = [];
  for (const sum of numbers) {
    if (sum !== numbers[0]) {
      numbersArr.push(sum);
    }
  }
  numbersArr.push(numbers[0]);
  return numbersArr;
}




console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]