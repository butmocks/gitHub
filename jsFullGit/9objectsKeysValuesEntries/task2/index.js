// copyObj

// const users = {
//   Tom: 17,
//   'John Doe': 155,
//   Bob: 100,
// };

// const players = {
//   'John Doe': 19,
//   Bob: 18,
// };

// const res = Object.assign(users, players);

// console.log(res === users);

// 2 =============

// const users = {
//   Tom: 17,
//   'John Doe': 155,
//   Bob: 100,
// };

// const players = {
//   'John Doe': 19,
//   Bob: 18,
// };

// const res = Object.assign({}, users);
// console.log(res === users);
// res.Tom = 90;

// console.log(users);

// const copyObj = obj => Object.assign({}, obj);

// console.log(copyObj(players));

// 3 ======================

// const user = {
//   name: 'Tom',
//   key: 17,
// //   father: {
// //     name: 'Bob',
// //   },
// };

// // const player = { ...user };
// // console.log(player);

// const { name = 'default', ...restProps} = user;

// console.log(restProps);

// 3 ================

const user = {
  name: 'Tom',
  key: 17,
};

const { name = 'default', ...restProps } = user;

console.log(restProps);

const player = {
  game: 'football',
  ...restProps,
};

console.log(player);
