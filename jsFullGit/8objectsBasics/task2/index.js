// concatProps

// method 1
// const arr = ['a', 'b'];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 2 ======

// const arr = ['a', 'b'];
// for (let value of arr) {
//   console.log(value);
// }

// 1 и 2 методы работают с массивами
// с обьектами пример далее

// const user = {
//   name: 'Tom',
//   age: 17,
// };

// for (let key in user) {
//   console.log(user[key]);
// }

// 3 =============

// user => ['Tom', 17]

// const user = {
//   name: 'Tom',
//   age: 17,
// };
// const concatProps = obj => {
//   const arr = [];

//   for (let key in obj) {
//     arr.push(obj[key]);
//   }
//   return arr;
// };

// console.log(concatProps(user));

// 4 =================

// user => ['Tom', 17]

const user = {
  name: 'Tom',
  age: 17,
};
const concatProps = obj => {
  let arr = [];

  for (let key in obj) {
    arr = arr.concat(obj[key]);
  }

  return arr;
};

console.log(concatProps(user));
// работает только при ЛЕТ
