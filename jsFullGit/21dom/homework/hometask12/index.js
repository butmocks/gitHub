const squaredNumbers = () => {
  document.querySelectorAll('.number').forEach(elem => {
    const squared = elem.dataset.number ** 2;
    elem.dataset.squared = squared;
  });
};

// squaredNumbers();

export { squaredNumbers };
