// 1. Learn requirements
// 2. create step by step algo(& input/output for function)
// 3. write draft solution & testing
// 4. refactoring & final testing -> final solution

// ALGO
// 1. itarate num from 2 num => i
// 2. itarate i from 2 => j
// 3. если остаток деления i на j равен 0 - то не простое
// 4. если есть остаток то простое

//input: number
//output: boolean

function isPrime(number) {
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
// test data

getPrimes(111);
