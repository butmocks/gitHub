const start = 17;
const end = 81;
let result = 0;
let m = start;

while (m <= end) {
  if (m % 5 === 0) {
    console.log(m);
  } else if (m % 2 === 0 && m % 4 !== 0) {
    result += m;
  } else if (m % 3 === 0) {
    result -= m;
  } else if (m % 4 === 0) {
    result *= m;
  }
  m += 1;
}