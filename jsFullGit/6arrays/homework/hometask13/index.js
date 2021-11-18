// 1. осознаём что будем оперировать 2-мя массивами, с клиентамии и бабками
// 2. создаём функцию в которой функция примет 4 параметра
// 3. создаём цикл, который проверит есть ли у Человека достаточная сумма,
// ДА - СУПЕР, пишем остаток, и корректируем массив
// НЕТ - ретёрн



function withdraw(clients, balances, client, amount) {
  let i = 0;
  while (i < clients.length - 1) {
    if (clients[i] === client) {
      break;
    }
    i += 1;
  }
  if (balances[i] < amount) {
    return -1;
  }
  balances[i] -= amount;
  return balances[i];
}

const clients1 = ['Bob', 'Jlob', 'Obormot', 'Barmaglot'];
const balances1 = [666, 13, 69, 42];
console.log(withdraw(clients1, balances1, 'Obormot', 12));
console.log(balances1);