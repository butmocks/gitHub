// 1. осознать суть задания
// 2. необходимо создать функцию в которой будет применен метод итерации
// который найдёт максимальное число
// 3. вторая итерация найдёт минимальное
// 4ю сложить цыферки и проверить больше они 1000 или нет
// 5. вывести булевое значение


function checker(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  if (max + min > 1000) {
    return true;
  } else {
    return false;
  }
}
const numbers = [45, 4, 5, 82, 17, 666];
console.log(checker(numbers));
