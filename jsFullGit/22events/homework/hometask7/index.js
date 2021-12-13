function hadleClick(event) {
  console.log(event.target.textContent);
}
const makeSomeBtn = document.querySelector('.btn');
const makeSomeBtn1 = document.querySelector('.btn').nextElementSibling;

makeSomeBtn.addEventListener('click', hadleClick);
makeSomeBtn1.addEventListener('click', hadleClick);
