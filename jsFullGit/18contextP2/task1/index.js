'use strict';
// event (this in arrow functions)

// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this.name);
//   },
// };

// // obj.sayHi(); // потеря контекста

// const func = obj.sayHi;

// func();

// ==================

// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//   },
// };

// // obj.sayHi();

// const func = obj.sayHi;

// func();

// var a = 1;
// console.log(window.a);

// let b = 2;
// console.log(window.b);

// =====================

// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//   },
// };

// // obj.sayHi();

// const func = obj.sayHi;

// func();
// console.log(this)

// function func() {
//     console.log(this)
// }

// func()

// ========================

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//   },
// };

// // user.sayHi();

// setTimeout(() => user.sayHi, 100)

// =================== hw1

const event = {
  guests: [
    { name: 'Tom', email: 't@gmail.com', age: 17 },
    { name: 'Bob', email: 'b@gmail.com', age: 18 },
  ],
  message: 'Welcome to the party',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        text: `Hi ${name}. ${this.message}`,
        email,
      }));
  },
};

console.log(event.getInvitations());
