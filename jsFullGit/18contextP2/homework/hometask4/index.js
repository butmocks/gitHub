

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 1);

testWithMemory.calls; // [ [4, 2], [9, 1] ]

/* Поддержка функций с контекстом */

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);

methodWithMemory.apply({ name: 'Tom' }); // 'Tom'

methodWithMemory.calls; // [ [] ]

// input func
// output func
// algo 
// 1. функция сейвКоллс берёт функцию как аргумент и возвращает функцию withMemnory
// 2. Пушим агрументы элементов в пустой массив



function saveCalls(func) {
  function withMemory(...args) {
    withMemory.calls.push(args);
    return func.apply(this, arguments);
  }

  withMemory.calls = [];

  return withMemory;
}
