// 1 ========================

// const getSpecialNumbers = numbers => {
//   let specialNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//       specialNumbers.push(numbers[i]);
//     }
//   }
//   return specialNumbers;
// };

// 2 ========================

// const getSpecialNumbers = numbers => {
//   let specialNumbers = [];
//   numbers.forEach(num => {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });
//   return specialNumbers;
// };
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(getSpecialNumbers(arr));

// 3 ========================

// const getSpecialNumbers = numbers => {
//   const result = numbers.filter(num => {
//     if (num % 3 === 0) {
//       return true;
//     }
//     return false;
//   });
//   return result;
// };

// const arr = [1, 2, 3, 4, 5, 6, 18];
// console.log(getSpecialNumbers(arr));

// 4 ========================

// const getSpecialNumbers = numbers => {
//   const result = numbers.filter(num => num % 3 === 0);
//   return result;
// };

// const arr = [1, 2, 3, 4, 5, 6, 18, 30];
// console.log(getSpecialNumbers(arr));

// 5 ========================

const getSpecialNumbers = numbers =>
numbers.filter(num => num % 3 === 0);

const arr = [1, 2, 3, 4, 5, 6, 18, 30];
console.log(getSpecialNumbers(arr));
console.log(arr)
