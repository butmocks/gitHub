// 1. исходя из условий задачи необходимо применить метод .reduce()
// гуглим как его использовать, оказывается довольно сложный метод и необходимо
// будет еще с ним ознакомится
// 2. пишем функцию, если аргумент не массив - вернём null
// 3. возвращаем сумму и спользуя наш метод

function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce(function (acc, num) {
    return acc + num;
  });
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(sum(arr));
