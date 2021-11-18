// 1. Learn requirements
// 2. create step by step algo(& input/output for function)
// 3. write draft solution & testing
// 4. refactoring & final testing -> final solution

// ALGO
// 1. itarate num from 2 num => i
// 2. itarate i from 2 => j
// 3. если остаток деления i на j равен 0 - то не простое
// 4. если есть остаток то простое

function getPrimes(num) {
  let prime = 0;
  for (let i = 2; i < num; i++) {
    for (let j = 2; j < i; j++) {
      if (i %= j === 0) {
        ;
      } 
    }

  }
}
