// multiRount

// 0.1 + 0.2 === 0.3; // 0.30000000000000004

// num => []

// const multiRound = num => [
//     Math.round(num),
//     Math.floor(num),
//     Math.ceil(num),
//     Math.trunc(num)
// ];
// console.log(multiRound(17.1)); // [17, 17, 18, 17]
// console.log(multiRound(-17.1)); // [-17, -18, -17, -17]
// console.log(multiRound(Math.PI)); // [3, 3, 4, 3]
// // Math.round((Math.PI * 1000) / 1000); // 3.142;
// // Math.PI.toFixed(3) // '3.142' add + to make num

// v2 ====================

// const multiRound = num => [
//     Math.round(num * 100) / 100,
//     Math.floor(num * 100) / 100,
//     Math.ceil(num * 100) / 100,
//     Math.trunc(num * 100) / 100,
//     num.toFixed(2),
// ];
// console.log(multiRound(Math.PI)); // [3.14, 3.14, 3.15, 3.14, '3.14']
// console.log(multiRound(-Math.PI)); // [-3.14, -3.15, -3.14, -3.14, '-3.14'];

// ====================

(0.1 * 34 + 0.2 * 17).toFixed(2); // '6.80'

