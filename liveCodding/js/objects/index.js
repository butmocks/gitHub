/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

// input: object
// output: function object;

// function addPropertyV1(obj, key, value) {
//    obj[key] = value;
//   return obj;
// }

// // test data
// const transaction = {
//   value: 170,
// };
// console.log(addPropertyV1(transaction, 'currency', 'USD'));
// console.log(transaction);

// v2 ==============================

// function addPropertyV2(obj, key, value) {
//   // input: target obj, source obj1 ...source objN
//   // output: target obj
//   const sourceObj = { [key]: value };
//   Object.assign(obj, sourceObj);
//   return obj;
// }

// console.log(addPropertyV2(transaction, 'currency', 'USD'));
// console.log(transaction);

// function addPropertyV2(obj, key, value) {
// return Object.assign(obj, {[key]: value})
// }
// const transaction = {
//     value: 170,
// }
// console.log(addPropertyV2(transaction, 'currency', 'USD'));
// console.log(transaction);

// v3 ==========================

// function addPropertyV2(obj, key, value) {
//   return Object.assign(obj, { [key]: value });
// }

// function addPropertyV3(obj, key, value) {
//   return Object.assing({}, obj, { [key]: value });
// }

// // const transaction = {
// //   value: 170,
// // };

// // test data
// const transaction = {
//   value: 170,
// };

// console.log(addPropertyV3(transaction, 'currency', 'USD'));
// console.log(transaction);

// v4 =============================

function addPropertyV4(obj, key, value) {
  const object = { ...obj, [key]: value };
  return object;
}

// test data
const transaction = {
  value: 170,
};

// const addPropertyV5 = (obj, key, value) => ({...obj, [key]: value })

console.log(addPropertyV4(transaction, 'currency', 'USD'));
console.log(transaction);

// ====================

console.log([...[1, 2, 4, 88]]);
