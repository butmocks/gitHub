// input: arr
// output: arr
// 1. фильтруем массив оставляя только числа
// 2. округляем до сотых
// 3. добавляем $ и возвращяем массив


function cleanTransactionsList(array) {
  let newArr = array.filter(num => {
    if (Number(num)) return num;
  });
  return newArr.map(num => '$' + Number(num).toFixed(2));
}
const array = [' 1.9', '16.4', 17, ' 1 dollar '];
cleanTransactionsList(array)
console.log(cleanTransactionList(array));
