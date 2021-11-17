
// for (let i = 1; i <= 5; i++) {

//     console.log('\n=> ' + i + ' <=\n\n')

//     for (let j = 1; j <= 10; j++) {
//         console.log(i + ' x ' + j + ' = ' + i * j);
//     }

// }

let result = 0;

while (true) {
    const userInput = prompt('Your number');
    if (!userInput) {
        break;
    }
    result += Number(userInput);
}

console.log('Result: ' + result);