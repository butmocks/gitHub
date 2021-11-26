// sendMessage
'use strict';

// const message = 'Just learn it!';
// sendMessage('Tom');
// const sendMessage = name => {
//   const sender = 'Gromcode';

//   console.log(`${name}, ${message}. You ${sender}`);
// };

let message = 'Just learn it!';

export function sendMessage(name) {
  const sender = 'Gromcode';

  console.log(`${name}, ${message}. You ${sender}`);
}

function setMessage(text) {
  message = text;
}

sendMessage('Tom');

setMessage('Hello!');
sendMessage('Tom');

message = 'Hi!';

sendMessage('Tom')

// another.js

// import {sendMessage} from 'index.js'
// let message = 'Bay!';
// send message('Bob')
