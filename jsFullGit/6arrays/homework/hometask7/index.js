// 1. проверяем массив ли данные
// нет - ретёрн null
// да - погнали дальше
// 2. перебираем наш массив и каждую цифру записываем в переменную
// 3. добавляем в переменную цыфры по ходу подбора

function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum > 100;
}
console.log(checkSum([22, 0, 14, 85, 4]));
