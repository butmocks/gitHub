const splitString = (string, len = 10) => {
  if (typeof string !== 'string') return null;
  const strArr = [];
  let startPosition = 0;

  while (true) {
    let chunk = string.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    if (chunk.length < len) {
    chunk += '.'.repeat(len - chunk.length);
    }
    strArr.push(chunk[0] + chunk.slice(1));
    startPosition += len;
  }
  return strArr;
};

console.log(splitString('abcdefgh', 3));
