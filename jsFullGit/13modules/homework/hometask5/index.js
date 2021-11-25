export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArray(numbers));

// 1. будем оперировать 2-мя массивами, с клиентамии и бабками
// 2. создаём функцию в которой функция примет 4 параметра
// 3. методом .indexOf() выбираем клиента, соответственно и соответствующий баланс
// возвращаем -1 если сумма снятия больше баланса
// если нет отнимаем и записываем результат и ретёрним

export const withdraw = (clients, balances, client, amount) => {
  const clientsArr = clients.indexOf(client);
  const result = balances[clientsArr] - amount;
  if (result < 0) return -1;
  return result;
};
const clientsArr = ['Bob', 'Jlob', 'Obormot', 'Barmaglot'];
const balancesArr = [666, 13, 69, 42];
console.log(withdraw(clientsArr, balancesArr, 'Obormot', 12));
console.log(balancesArr);

/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

export const getAdults = obj => {
  const result = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key];
    }
  }
  return result;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
