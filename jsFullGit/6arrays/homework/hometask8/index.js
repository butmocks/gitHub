// 1. На старте проверяем массив ли это
// НЕТ - NULL ответ!
// ДА - сектор приз на барабане, поцокотели дальше
// 2. Второй тур, проверка на кратность
// НЕТ - это борода, пушим в массив как есть
// ДА- БИНГО! добавляем дельту и пушим в новый массив

function increaseEvenEl(arr, delta) {
  const resultArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i of arr) {
    if (i % 2 === 0) {
        resultArr.push(i + delta);
    } else {
      resultArr.push(i);
    }
  }
  return resultArr;
}

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []
