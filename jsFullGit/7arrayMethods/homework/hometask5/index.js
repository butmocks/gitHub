// 1. определяем массив ли приходит, НУЛЛ если нет
// 2. По условиям задачи используем метод .map() для создания нового массива
// 2. возвращаем не мутированый массив где его елементы умножены сами на себя

const squareArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(num => num * num);
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(squareArray(numbers));
