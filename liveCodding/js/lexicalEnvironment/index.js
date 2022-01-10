/* eslint-disable */

// GLOBAL lex env
// {
// environmentRecord: {
// 'message': 'Test',
// 'weight': 55,
// 'run': {
    // console.log('RUN')
// }
// 'createMessenger': {...},
// 'messenger': ....
// }
// 'outherLexicalEnv': null
// }

// createMessenger1 lex env
// {
// environmentRecord: {
// 'message': 'hello'
// 'sender': ...
// 'sendMessage': ...
// ...
// 
// 
// 
// 
// 'outherLexicalEnv': global
// }

// createMessenger2 lex env
// {
// environmentRecord: {
// 'message': 'Just learn it'
// 'sender': ...
// 'sendMessage': ...
// ...
// 
// 
// 
// 
// 'outherLexicalEnv': global
// }

// setMessage lex env
// {
// environmentRecord: {
// 
//  'text': 'hello'
// 
// ...
// 
// 'outherLexicalEnv': createMessager1
// }

// printer lex env
// {
// environmentRecord: {
// 
//  ....
// }
// 
// 
// 'outherLexicalEnv': createMessager1
// }


const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

// input: string
// ut
function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';


// input: string
// output: undefined

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  function printer() {
      console.log(message)
  }

  return {
    sendMessage,
    setMessage,
    setSender,
    printer
  };
}

const messanger1 = createMessenger();
messanger1.printer();
messanger1.setMessage('hello')

messanger1.printer()
const messanger2 = createMessenger();
run();
