// let m = 10;
// const n = 20;
// let result = 1;

// do {
//     if (m % 2 === 1) {
//         result *= m;
//     }
//     m++
// } while (m <= n);

// console.log('Result: ' + result)

// FOR

// let result = 1;

// for (let m = 10; m <= 20; m++) {
//   if (m % 2 === 1) {
//     result *= m;
//   }
// }

// console.log('Result: ' + result)

//===========

let result = 1;

for (let m = 10; m <= 20; m++) {
    if (m % 2 === 0) continue;
    result *= m;
}
console.log('Result: ' + result);
