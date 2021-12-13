function changeSomeMean() {
  console.log(findSomeEl.value);
}
const findSomeEl = document.querySelector('.text-input');

findSomeEl.addEventListener('change', changeSomeMean);
