function writeConsoleByClick() {
  console.log(inputEl.value);
}

const buttonEl = document.querySelector('.search__btn');
const inputEl = document.querySelector('.search__input');

buttonEl.addEventListener('click', writeConsoleByClick);
