// 1. будем оперировать 2-мя массивами, с клиентамии и бабками
// 2. создаём функцию в которой функция примет 4 параметра
// 3. методом .indexOf() выбираем клиента, соответственно и соответствующий баланс
// возвращаем -1 если сумма снятия больше баланса
// если нет отнимаем и записываем результат и ретёрним

// const withdraw = (clients, balances, client, amount) => {
//   const clientsArr = clients.indexOf(client);
//   const balancesArr = balances[clientsArr];

//   if (amount > balancesArr) {
//     return -1;
//   } else {
//     return balancesArr - amount;
//   }
// };

const withdraw = (clients, balances, client, amount) => {
  const clientsArr = clients.indexOf(client);
  const result = balances[clientsArr] - amount;
  if (result < 0) return -1;
  return result;
};

const clientsArr = ['Bob', 'Jlob', 'Obormot', 'Barmaglot'];
const balancesArr = [666, 13, 69, 42];
console.log(withdraw(clientsArr, balancesArr, 'Obormot', 12));
console.log(balancesArr);
