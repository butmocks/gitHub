// function arguments

const prefix = 'Hi, ';

function sayHi(name) {
  const greeting = prefix + name;
  console.log(greeting);
}

sayHi('Ann')


//===========
// const prefix = 'Hi, ';

// function sayHi(name = 'anonymus') {
//   const greeting = prefix + name;
//   console.log(greeting);
// }

// sayHi('Ann', 'Bob');

//=======

// const prefix = 'Hi, ';

// function sayHi(name, anotherName = 'anonymus') {
//   const greeting = prefix + name + ' and ' + anotherName;
//   console.log(greeting);
// }

// sayHi('Ann', 'Bob');
