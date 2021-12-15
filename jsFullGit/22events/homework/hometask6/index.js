function makeClickOnlyOne() {
  console.log('clicked');
  buttonEl.removeEventListener('click', makeClickOnlyOne);
}
const buttonEl = document.querySelector('.single-use-btn');
buttonEl.addEventListener('click', makeClickOnlyOne);
