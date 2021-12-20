export const mult = a => b => a * b;

export const twice = mult(7);
export const triple = mult(9);

console.log(mult(5)(4));
console.log(mult(7)(9));
