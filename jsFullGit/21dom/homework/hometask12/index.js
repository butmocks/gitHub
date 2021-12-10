
function squaredNumbers() {
  const square = document.querySelectorAll('li[data-number]');
  square.forEach(function (listItem) {
    listItem.dataset.squaredNumbers = listItem.dataset.number * listItem.dataset.number;
  });
}

export { squaredNumbers };
