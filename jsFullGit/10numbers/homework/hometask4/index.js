function getMaxAbsoluteNumber(arr) {
  if (!Array.isArray(arr) || arr.length < 1) {
    return null;
  }
  const array = arr.map(i => {
    return Math.abs(i);
  });
  const result = Math.max(...array);
  return result;
}
getMaxAbsoluteNumber([-10, 10, -10]); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777
