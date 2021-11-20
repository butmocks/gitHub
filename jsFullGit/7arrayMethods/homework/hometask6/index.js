// 1. понимаем суть задачи
// 2. идеально использовать метод .reverse() но он мутирующий
// значит необходимо зделать копию и ее менять, или использовать
// с ним же метод .slice() как было показано в уроке
// 5. не забываем, что если аргумент не массив ретёрним НУЛЛ

const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArray(numbers));

