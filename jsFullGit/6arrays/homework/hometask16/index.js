// 1. тут повезло, на подготовке в MATE Academy использовал глубже методы массивов

function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let newArr = [...new Set(array)];
  return newArr;
}

removeDuplicates([1, 2, 3, 4, 3, 4, 5, 6, 7, 8, 9]);
