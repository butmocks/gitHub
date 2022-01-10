// input: arr, callback func
// output: arr

// callback input: el, index, arr
// callback output: el

// 1. Необходимо проитерировать массив создавая новый
// 2. применяем функцию колбек к каждому елементу нового массива
// 3. записываем всё в новый массив

const arr = [1, 2, 3, 4, 5]

const mapArrayElements = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
};

const callback = (arrElement, index, entireArr) => arrElement * 100 / 100;
console.log(mapArrayElements(arr, callback))