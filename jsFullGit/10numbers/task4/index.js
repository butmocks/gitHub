// getAbsoluteNumber

// [2, -6, 78, -99] => 99;

// const getAbsoluteNumber = arr => {
//     let max = -Infinity;

//     arr.forEach(num => {
//         if (Math.abs(num) > max) {
//             max = Math.abs(num)
//         }
//     });
//     return max;
// }
// console.log(getAbsoluteNumber([2, -6, 78, -99])); // 99

// v2 ===================
// 1 - get absolute values
// 2 - find max

const getAbsoluteNumber = arr => {
    const absoluteValues = arr
    .map(num => Math.abs(num));

    const max = Math.max(...absoluteValues);
    return max;
}

console.log(getAbsoluteNumber([2, -6, 78, -99])); // 99

