// юзаем лайфхак предыдущего задания, получаем массив уникальных чисел, и выводим его длину
function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let newArr = [...new Set(array)];
  return newArr.length;
}

console.log(uniqueCount([5, 6, 1, 2, 2, 3, 6, 4, 9, 5, 6]));

