// начальный массив
// const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведи squaredNumbers в консоль

// put your code here

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль

// put your code here

// ======================
/// Этой функции он передаёт три параметра callback(item, i, arr):

// item – очередной элемент массива.
// i – его номер.
// arr – массив, который перебирается.
// ================

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

// put your code here

// ================
// Параметри:
// callback - Функція, викликає для кожного значення в масиві, приймає три аргументи:

// element - Поточний елемент в масиві який обробляється.
// index - Індекс поточного оброблюваного елемента в масиві. array Масив, за яким здійснюється прохід.
// thisArg - Необов'язковий параметр. Значення, що використовується в якості this при виконанні функції callback.

// Опис:
// find() метод об'єкту Array який викликає передану функцію
//=============

/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

// const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// put your code here

/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];

// put your code here

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];

// put your code here

// ===============================
// input: func, this (optional)
// output: arr

// callback
// input: el, index (optional), array (optional)
// output: el

// BAD
// const numbersList = [5, 0, 8, 10, -4, 50, 220];

// const mapRes = numbersList.map(el => {
//     const res = el * el;
//     return res;
// });
// console.log(mapRes)

// GOOD
// const numbersList = [5, 0, 8, 10, -4, 50, 220];

// const mapRes = numbersList.map(el => el * el);
// console.log(mapRes);

// =================
// const numbersList = [5, 0, 8, 10, -4, 50, 220];

// const mapRes = numbersList.map(el => 'my number is ' + el);
// console.log(mapRes);

// ============

// const numbersList = [5, 0, 8, 10, -4, 50, 220];
// numbersList.forEach(el => {
//   if (el > 100) {
//     console.log(el);
//   }

//   return el;
// });

// =================

// BAD
// const numbersList = [5, 0, 8, 10, -4, 50, 220];

// numbersList.find(el => {
//   if (el % 2 === 0) {
//     return true;
//   }
//   return false;
// });

// GOOD

// const numbersList = [5, 15, 8, 10, -4, 50, 220];

// console.log(numbersList.find(el => el % 2 === 0));

// WRONG METHOD
// const numbersList = [5, 15, 8, 10, -4, 50, 220];
// console.log(numbersList.filter(el => el % 2 === 0)[0]);

// REDUCE ======================
// input: func callback, init value
// output: number

// callback
// input: acc (number), el (number)
// output: acc (number)
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// BAD
// transactions.reduce((acc, el) => {
//   console.log('acc: ' + acc);
//   console.log('el: ' + el);
//   return acc + el;
// }, 100);

// GOOD
const sumRes = transactions.reduce((acc, el) => acc + el);
console.log(sumRes);
