export const createCalculator = () => {
  let memory = 0;

  const add = number => {
    memory += number;
  };

  const decrease = number => {
    memory -= number;
  };

  const reset = () => {
    memory = 0;
  };

  const getMemo = () => memory;

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator = createCalculator();
const calculatorNext = createCalculator();

calculator.getMemo(); // 0
calculator.add(3);
calculator.getMemo(); // 3
calculator.decrease(5);
calculatorNext.add(5);
calculatorNext.getMemo(); // 5
calculator.getMemo(); // -2
calculator.reset();
calculator.getMemo(); // 0

console.log(calculator.getMemo()); // 3