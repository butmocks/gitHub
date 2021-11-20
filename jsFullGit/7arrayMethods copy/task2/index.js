// unsorted array => sorted array

// const sortArray = numbers => {
//   numbers.sort((a, b) => a - b);
//   return numbers;
// };

// const arr = [2, 4, 1, 5, 21, 18];

// console.log(sortArray(arr));

// my ver =========
// const arr = [2, 4, 1, 5, 21, 18];
// console.log(arr.sort())

// 2 ============
// sorted without mutation => use copy

// const sortArray = numbers => {
//     const copy = [...numbers];
//   numbers.sort((a, b) => a - b);
//   return copy;
// };

// const arr = [2, 4, 1, 5, 21, 18];

// console.log(sortArray(arr));

// 3 ============ slice() если не указать количество
// элементов он тупо скопирует массив

// const sortArray = numbers => {
//     const copy = numbers.slice();
//   copy.sort((a, b) => a - b);
//   return copy;
// };

// const arr = [2, 4, 1, 5, 21, 18];

// console.log(sortArray(arr));

// =============

const sortArray = numbers =>
numbers.slice().sort((a, b) => b -a);

const arr = [2, 4, 1, 5, 21, 18];

console.log(sortArray(arr));
