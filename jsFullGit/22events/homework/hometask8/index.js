function upgradeInput(event) {
  console.log(event.target.value);
}
const findInput = document.querySelector('.text-input');
findInput.addEventListener('change', upgradeInput);
