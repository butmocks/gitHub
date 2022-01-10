// const arr = [77, 66, 13, 4];
// console.log(arr);

// input: arr, func
// output: arr

// callback
// input: el, index, array
// output: boolean

// algo
// 1. iterate arr
// 2. apply callback gor every el
// 3. if callback true - add to the new arr
// const arr = [77, 66, 13, 4];
// const filterArrayElements = (arr, callback) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++);
//   const el = arr[i];
//   if (callback(el));
//   result.push(el);

//   return result;
// };

// // // test data

// // const initialArr = [];

// console.log(filterArrayElements([77, 66, 13, 4], (el => el % 2 === 1)));

// const filterArrayElements = (arr, callback) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     if (callback(el, i, arr)) {
//       result.push(el);
//     }
//   }
//   return result;
// };

// console.log(filterArrayElements([77, 66, 50, 13, 4], el => el % 2 === 0));
// const filterArrayElements = (arr, callback) => {
// const arr = [77, 66, 50, 0, -1, 13, 4];
// const callb = el => {
//   if (el % 5 === 0) {
//     return el;
//   }
//   return false;
// }
// };

// console.log(filterArrayElements());


// 3 ==================
// const arr = [77, 66, 13, 4];
// console.log(arr);

// console.log(
//   filterArrayElements(arr, (el, i) => {
//     if (i < 3) {
//       return true;
//     }
//     return false;
//   }),
// );

const array = [77, 0, 25, 66, 13, 4];
console.log(array);

let callback = el => {
  return el % 2 === 0;
};
const filterArrayElements = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i ++) {
    const el = arr[i];
    if (callback(el)) {
      console.log(el);
      result.push(el);
    }
  }
  return result;
};
console.log(filterArrayElements(array, callback));