// методы .pop() .push .shift() .unshift()

// const people = ['Tom', 'Ann', 'Bob'];

// // // people[people.length] = 'Jack';

// // people.length = 2;

// people.push('Jack', 'John'); // add to end
// people.unshift('Jack', 'John') // add to start
// people.pop('Jack', 'John') // del in end
// people.shift('Jack', 'John') // del in start

//====================

// const people = ['Tom', 'Ann', 'Bob'];
// const first = people.shift();

// console.log(first);
// console.log(people);
// console.log(people.length);


// ===========

// // from , to => [n% 3 === 0]

function getSpecialNumbers(from, to) {
    let specialNumbers = [];

    for (let i = from; i <= to; i++) {
        if (i % 3 === 0) {
            specialNumbers.push(i)
        }
    }
    return specialNumbers
}

const specialNumbers = getSpecialNumbers(10, 30);

console.log(specialNumbers);

