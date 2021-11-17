function getSenseOfLife() {
    return 42;
}

// const res = getSenseOfLife();
// console.log(res);

console.log(getSenseOfLife());

function getSquared(num) {
    return num * num;
}

//test data
console.log(getSquared(5))
console.log(getSquared(10))
console.log(getSquared(-7))

//=============

//input: number
//output: undefined
//func declaration
function printMessage() {
}

//func expression
function printMessage(num) {
    console.log('I am ' + num + ' years old')
}

// test data 

console.log(printMessage(50))
console.log(printMessage(25))
console.log(printMessage(32))

const mult = (firstNum, secondNum) => {
    return firstNum * secondNum;
};

//test data

console.log(mult(10, -4));


const getMagicNumber = () => 17;

//test data
console.log(getMagicNumber())