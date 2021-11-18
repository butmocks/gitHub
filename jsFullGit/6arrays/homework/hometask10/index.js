// 1. проверяем массив ли
// 2. берём элемент и закидуем в новый массив
// 3. возвращаем новый массив

function cloneArr(arr) {
  const newClone = [];

  if (!Array.isArray(arr)) {
    return null;
  }

  for (let i of arr) {
    newClone.push(i);
  }
  return newClone;
}

const numbers = [4, 8, 9, 10, 0, 1];
console.log(cloneArr(numbers));
