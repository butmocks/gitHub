// sendMessage
'use strict';

// const message = 'Just learn it!';
// sendMessage('Tom');
// const sendMessage = name => {
//   const sender = 'Gromcode';

//   console.log(`${name}, ${message}. You ${sender}`);
// };

let message = 'Just learn it';

function sendMessage(name) {
  const sender = 'Your Gromcode';
  console.log(`${name}, ${message}! ${sender}`);
}

function setMessage(text) {
  message = text;
}

sendMessage('Ann');

setMessage('Good job');
sendMessage('Ann');

// sendMessage('Tom');

// message = 'Hi!';

// sendMessage('Tom');

// another.js

// import {sendMessage} from 'index.js'
// let message = 'Bay!';
// send message('Bob')
