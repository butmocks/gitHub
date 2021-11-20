// 1. идём по пунктам задачи, готовый алгоритм
// 2. обзываем функцию, сразу пишем что если аргумент не массив то шлём его на...
// 3. если ок - провперяем на чётность (%2===0)
// 3. то что попадает под чётность увеличиваем на дельту и возвращаем в массив

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(num => {
    if (num % 2 === 0) {
      return (num += delta);
    }
    return num;
  });
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(increaseEvenEl(numbers, 10));

