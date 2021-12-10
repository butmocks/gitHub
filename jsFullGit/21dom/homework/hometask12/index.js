function squaredNumbers() {
  const square = document.querySelectorAll('li[data-number]');
  square.forEach(function (element) {
    element.dataset.squaredNumbers = element.dataset.number * element.dataset.number;
    console.log(element);
  });
}

// squaredNumbers();

export { squaredNumbers };
