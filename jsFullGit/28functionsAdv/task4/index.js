const add2 = value1 => value1 + 2;
const square = value2 => value2 * value2;
const half = value3 => value3 / 2;

const compose =
  (...funcs) =>
  value => {
    return funcs.reduce((acc, func) => func(acc), 1);
  };

const superFunc = compose(add2, square, half);

console.log(superFunc(true));

// const add2 = value => value + 2;
// const square = value => value * value;
// const half = value => value / 2;
// const compose =
//   (...funcs) =>
//   value =>
//     funcs.reduce((acc, func) => {
//       console.log(func);
//       return func(acc);
//     }, value);

// const superFunc = compose(add2, square, half);
// console.log(superFunc);

// console.log(superFunc(2));
//  put your code here
