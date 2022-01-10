// input: array
// output: function


// algo
// 1. create empty obj
// 2. iterate arrays and put key/value to the obj

// function buildObject(keysList, valuesList) {
//   const res = {};
//   for (let i = 0; i < keysList.length; i++) {
//     res[keysList[i]] = valuesList[i];
//   }
//   return res;
// }

// examples
// const keys = ['name', 'address', 'age'];
// const values = ['JLOB', 'Ukraine', -5];
// const result = buildObject(keys, values);


const keys = ['population', 'country', 'language'];
const values = ['300000000', 'Uganda', 'Africaas'];
const result = buildObject(keys, values);
console.log(result);

// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }


function buildObject(keysList, valuesList) {
    return keysList.reduce((acc, key, i) => ({...acc, [key]: valuesList[i]}), {})

}