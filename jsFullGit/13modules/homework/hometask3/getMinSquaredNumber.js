export default arr => {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  const minSquared = Math.min(...arr.map(num => num * num));
  return minSquared;
};
