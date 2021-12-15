const clickBut = document.querySelectorAll('.pagination__page');
const hadleClick = event => {
  console.log(event.target.dataset.pageNumber);
};

clickBut[0].addEventListener('click', hadleClick);
clickBut[1].addEventListener('click', hadleClick);
clickBut[2].addEventListener('click', hadleClick);
