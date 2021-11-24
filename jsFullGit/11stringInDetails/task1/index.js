// const text = 'message';

// const myMessage = 'The text is ${text.toUpperCase()}, \nAnd something else.';

// console.log(myMessage); // The text is ${text.toUpperCase()},
// // And something else.

// ===================

// const text = 'message';

// const myMessage = `
// The text is ${text.toUpperCase()},
// And something else.
// `;

// console.log(myMessage); // The text is MESSAGE,
//                         // And something else.

// ================

// const text = 'message';
// console.log(text[0]); // m

// ================

// const text = 'message';

// console.log(text[text.length - 1]); // e
// console.log(text[text.length]); // undefined

// ================

// const text = 'message';

// console.log(text.charAt(1)); // e

// ================

// const text = 'message';

// console.log(text.charAt(1)); // e

// text[2] = 'Q';
// console.log(text); // message

// .concat() ================

// const text = 'message';

// text.concat('asd');
// console.log(text.concat('asd')); // messageasd
// console.log(text + 'asd'); // // messageasd

// .split() ================

// const text = 'message';
// console.log(text.split('e')); // ['m', 'ssag', '']

// MAKE FIRST LETTER TO UPPERCASE==============

// const t = 'text';
// t[0].toUpperCase(); // T
// t[0].toUpperCase() + t.slice(1);
// console.log(t[0].toUpperCase() + t.slice(1)); // Text

// TASK1 ==============
// splitText
// splitString('abcd efgh', 4) => 'Abcd\n efg\nH'

// 1. 'abcdefg', 4 symbols => ['Abcd', 'Efg']
// => 'Abcd/nEfg'

const splitText = (text, len) => {
  const strArr = [];
  let startPosition = 0;

  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArr.join('\n');
};

console.log(splitText('abcdefg', 4));
