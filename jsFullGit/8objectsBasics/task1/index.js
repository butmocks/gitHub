// // transformToObject

// const prop = 'my';

// const obj = {
//   name: 'Tom',
//   interest: 'football',
//   age: 17,
//   'my name': 'Bob',
//   [prop + 'name']: 'value', // 11 min video задать вопрос, зачем такой синтаксис, если строка консоль на строке 20 не реагирует на нее?
// };

// // console.log(obj.age); // 17

// // obj.age = 18;
// // console.log(obj.age); // 18

// console.log(obj['my name']);

// console.log(obj[prop + 'name']);

// del

// const obj = {
//   name: 'Tom',
//   interest: 'football',
//   age: 17,
//   'my& name': 'Bob',
//   [prop + 'name']: 'value', // 11 min video задать вопрос, зачем такой синтаксис, если строка консоль на строке 20 не реагирует на нее?
// };

// console.log(obj.age); // 17

// obj.age = 18;
// console.log(obj.age); // 18

// console.log(obj['my& name']);

// console.log([prop + ' name']);

// 2 task ======================
// transformToObject

// const transformToObject = arr => {
//   const obj = {};
//   arr.forEach(el => {
//     obj[el] = el;
//   });
//   return obj;
// };

// // [1, 'text'] => { '1': 1, text: 'text' }

// const arr = [1, 'text'];
// const result = transformToObject(arr);

// console.log(result); // 16 min видео, ментор говорит что переменная меняется, и надо использовать ЛЕТ, но и с конст работает!!!

// 3 ====================

// const user = {
//   name: 'Tom',
// };

// user.name = 'Bob';

// console.log(user.name);

// user = {};

// // const a = { a: 18 };
// // const b = a;

// 4 ==================

// const a = {}
// const b = {}

// console.log(a === b)

// 5 ===============

// const name = 'Tom';
// const user = {
//   name: name,
// };
// // короткая запись
// const name = 'Tom';
// const user = {
//   name,
// };
