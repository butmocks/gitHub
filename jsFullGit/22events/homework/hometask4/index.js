function checkValue() {
  if (findCheckBox.checked == true) {
    console.log(true);
  } else console.log(false);
}
const findCheckBox = document.querySelector('.task-status');
findCheckBox.addEventListener('change', checkValue);
