
function getArrayBounds(arr) {
    if(!Array.isArray(arr)){
        return null;
    }
    console.log([arr.length, arr[0], arr[arr.length - 1]]);
}

// examples
getArrayBounds([1, 10, 9, 11]); // ==> [4, 1, 11]
getArrayBounds(10, 12, 14); // ==> null
getArrayBounds([1]); // ==> [1, 1, 1]



// const numbers = [11, 22, 33, 55, 66];

// function getArrayBound(arr) {
//     if(!Array.isArray(arr)){
//         return null;
//     }
//     return [arr.length, arr[0], arr[arr.length - 1]];
// }

// const arrayBound = getArrayBound([]);

// console.log(arrayBound);