// 'use strict'

const timer = {
  minsPassed: 0,
  secondsPassed: 0,
  intervalID: null,
  startTimer() {
    this.intervalID = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },

  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },

  stopTimer() {
    clearInterval(this.intervalID);
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};
export { timer };
// test data
// timer.startTimer()
// console.log(getTime())

// // context definition
// function sum(a, b) {
//     //
//     // this.firstName;
// }
// console.log(this)

// parameters
// parent lex env
// context

// const obj = {
//     firstName: 'James',
//     printName() {
//         console.log(this)
//     }
// }
// obj.printName();

// const func = obj.printName;
// func()

// //
// [1, 2].filter(function (el) {
//     console.log(this.firstName);
// });
