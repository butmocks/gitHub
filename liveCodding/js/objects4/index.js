// input: obj, obj
// iutput: modified array

// algo
// 1. get keys & values
// 2. add to every value (map)
// 3. sort

// const getCustomersList = obj => {
//   const keys = Object.keys(obj);

//   return Object.values(obj)
//     .map((el, index) => ({ ...el, id: keys[index] }))
//     .sort((a, b) => a.age - b.age);
// };

// const customers = {
//   'customer-id-1': {
//     name: 'William',
//     age: 54,
//   },
//   'customer-id-2': {
//     name: 'Tom',
//     age: 17,
//   },
// };

// getCustomersList(customers);

// v2 =======================================

const getCustomersList = obj => {
  return Object.entries(obj)
    .map(([id, customers] => ({ ... customers, id}))
    .sort((a, b) => a.age - b.age);
};

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

getCustomersList(customers);


// const getCustomersList = obj => {
// Object.entries(obj).map(entry => ({...entry[1], id: entry[0] }))
//   .sort((a, b) => a.age - b.age);

// destructing
// const arr = [10, 22, 11];
// const [el1, el2] = arr;
// console.log(el1, el2)


function hello({age, name, city}) {
    
}
