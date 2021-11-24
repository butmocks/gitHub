// 1. использую метод split и возвращаю новый массив
// 2. используя метод reverse переворачиваю массив
// 3. методом join собираем его в кучу

function reverseString(str) {
  if (typeof str !== 'string') return null;
  return str.split('').reverse().join('');
}

const str = 'qwerty';
console.log(reverseString(str));
