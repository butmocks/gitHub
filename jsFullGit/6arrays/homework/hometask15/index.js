// 1. вздохнули, всё не так плохо
// 2. методом итерации проверяем соответствие символа "нам" в массиве
// 3. выводим тру или фолс

const includes = (arr, num) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === num) {
    return true;
    }
  }
  return false;
};

// examples
includes([1, 4, 8, 3], 3);
includes([1, 4, 8, 3], 5);
