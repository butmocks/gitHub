// 1. логика задания простая, делаем всё как в 10 задании но + делим это на длину массива

function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  console.log((arr.reduce(function (acc, num) {
    return acc + num;
  })) / arr.length);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arrAverage(arr))

