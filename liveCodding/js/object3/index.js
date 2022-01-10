// input: obj1, obj2
// output: boolean

// algo:
// 0. compare length, if not equal -> false
// 1. iterate obj1 keys
// 2. compare if(value1 != value2) -> false
// 3.

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
compareObjects(obj2, obj3); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true


// // input: obj1, obj2
// // output: boolean

// // algo:
// // 0. compare length, if not equal -> false
// // 1. iterate obj1 keys
// // 2. compare if(value1 != value2) -> false
// // 3.

// function compareObjects(obj1, obj2) {
//   const keys = Object.keys(obj1);

//   if (keys.length !== Object.keys(obj2).length) {
//     return false;
//   }
//   return true;
// }

// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

// console.log(compareObjects(obj1, obj2)); // ==> false
// compareObjects(obj2, obj3); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true