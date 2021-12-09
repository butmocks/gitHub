function setButton(buttonText) {
  document.querySelector('body')
  .innerHTML = `<button>${buttonText}</button>`;
}

export { setButton };
const buttonText = 'xxx';
console.log(setButton(buttonText));
