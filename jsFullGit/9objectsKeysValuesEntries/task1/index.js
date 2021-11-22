// getAdults

// const user = {
//     name: 'Tom',
//     age: 17,
// }

// Object.keys()
// Object.values()
// Object.entries()

// console.log(Object.entries(user));

// const users = {
//   Tom: 17,
//   'John Doe': 19,
//   Bob: 18,
// };

// const getAdults = usersObj => {
//   // { 'Tom': 17, 'John Doe': 19, } => C
//   const usersArray = Object.entries(usersObj);

//   // [ ['Tom', 17], ['John Doe', 19]] => [['John Doe', 19]]
//   const filteredUsersArray = usersArray.filter(user => user[1] >= 18);

//   // [['John Doe', 19]] => ['John Doe']
//   const usersNames = filteredUsersArray.map(user => user[0]);

//   return usersNames;
// };

// console.log(getAdults(users));

// 2 ======================

const users = {
  Tom: 17,
  'John Doe': 19,
  Bob: 18,
};

const getAdults = usersObj => Object.entries(usersObj)
.filter(user => user[1] >= 18)
.map(user => user[0]);


console.log(getAdults(users));
