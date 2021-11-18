function sum(from, to) {
  let result = 0;
  for (let i = from; i <= to; i += 1) {
    result += i;
  }
  return result;
}

function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  }
  return false;
}
const result1 = compareSums(8, 3, 4, 2);
console.log(result1);
