function getItemsList() {
  const technologyItems = document.querySelectorAll('.technology');

  console.dir(technologyItems);
  return technologyItems;
}

function getItemsArray() {
  const elementsArray = Array.from(document.querySelectorAll('.tool'));

  console.dir(elementsArray);
  return elementsArray;
}

export { getItemsArray, getItemsList };
