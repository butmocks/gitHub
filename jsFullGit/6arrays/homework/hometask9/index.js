// 1 проверяем кто по жизни
// 2. методом аншифт добавляем елемент в начало нового массива

function reverseArray(arr) {
  const reversed = [];
  if (!Array.isArray(arr)) {
    return null;
  }

  for (let i of arr) {
    reversed.unshift(i);
  }
  return reversed;
}
// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(reverseArray(numbers));
