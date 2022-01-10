function printMessage(country, city) {
  console.log(this);

  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// inout: object, args(optional)
// output: function

// option1
const bindedFunc = printMessage.bind(user);
bindedFunc('Ukraine', 'Odesa');

// option2
const bindedFunc2 = printMessage.bind(user, 'UK', 'Liverpool');
bindedFunc2('London');

// option3
const bindedFunc3 = printMessage.bind(user, 'UK', 'Liverpool');
bindedFunc3();

// input: obj
// output: func
function myBind(func, context, ...bindArgs) {
  // input: obj, array
  // output: result of func

  return function (...funcArgs) {
    func.apply(context, [...bindArgs, ...funcArgs]);
  };
}

// test data
// option1
// const myBindedFunc = myBind(printMessage, user);
// myBindedFunc('Ukraine', 'Odesa');

// option2
const myBindedFunc2 = myBind(printMessage, user, 'UK');
myBindedFunc2('London');

// option3
// const myBindedFunc3 = myBind(printMessage, user, 'UK', 'Liverpool');
// myBindedFunc3();

// =======================
// BONUS!!!!!!!!!
// написать свой байнд без колл и эплай

const userEvil = {
  firstName: 'Satan',
  age: 666,
  tempFunc: 'some secret data',
};

function myOwnBind(country, city) {
  console.log(this);

  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

function myNewBind(func, context, ...bindArgs) {
  return function () {
    const copied = { ...context };
    copied.newFunction = func;
    copied.newFunction(...bindArgs);
  };
}

const bindBonus = myNewBind(printMessage, user, 'Dungeon', 'Hell');

bindBonus();

// console.log(user)
