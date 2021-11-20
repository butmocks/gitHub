// 1. создаём функцию, если не массив отправляем домой
// 2. если массив возвращяем взятые с него данные

function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    return Array.from(arr);
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(cloneArr(arr));
