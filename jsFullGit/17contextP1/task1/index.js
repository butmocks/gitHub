// methods

// const user = {
//   name: 'John',
//   age: 17,
// };

// user.walk = function walk() {
//   console.log('I\'m walking');
// };

// user.sayHi = function() {
//   console.log(`Hi, I am ${this.name}.`);
// }

// user.sayHi();

// =========================

// const user = {
//   name: 'John',
//   age: 17,
//   sayHi() {
//     console.log()
//     console.log(`Hi, I am ${this.name}.`);
//   }
// };

// user.sayHi();

// ===========================

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     console.log();
//     console.log(`${this.firstName} ${this.lastName}.`);
//   },
// };

// user.getFullName();

// =======================

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     console.log();
//     console.log(`${this.firstName} ${this.lastName}.`);
//   },
// };

// // user.getFullName();

// const func = user.getFullName;
// func();

// .bind(); =============================

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     console.log();
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// // user.getFullName();

// const func = user.getFullName.bind(user);
// func();

// =================================

// const user = {
//   name: 'Doe',
//   getFullName() {
//     console.log();
//     console.log(`${this.name}`);
//   },
// };

// // user.getFullName();

// const func = user.getFullName.bind({name: 'Tom'});
// func();

// .call() ================

// const user = {
//   name: 'Doe',
//   getFullName() {
//     console.log();
//     console.log(`${this.name}`);
//   },
// };

// const func = user.getFullName;
// func.call({ name: 'Tom' });

// .apply() ====================

const user = {
  name: 'Doe',
  sayHi(age, message) {
    console.log(`${message}. I'm ${this.name}. I'm ${age} years old`);
  },
};

const func = user.sayHi;

const anotherUser = {
  name: 'Tom',
};

func.apply(anotherUser, [17, 'Hello']);

// const user = {
//   name: 'Doe',
//   sayHi(age, message) {
//     console.log(`${message}. I'm ${this.name}. I'm ${age} years old`);
//   },
// };

// const func = user.sayHi;

// const anotherUser = {
//   name: 'Tom',
// };

// func.call(anotherUser, 17, 'Hello');
