const getTotalPrice = arr => {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return Math.floor(sum * 100) / 100;
};

const numbersArr = [17.159];

console.log('$' + getTotalPrice(numbersArr));
