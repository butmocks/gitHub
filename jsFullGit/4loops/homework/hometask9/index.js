let sum = 0;

for (let i = 1; i <= 1000; i++) {
  sum += i;
}

const m = sum / 1234;
const n = sum % 1234;

console.log(m > n);
