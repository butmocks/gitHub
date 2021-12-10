
function squaredNumbers() {
  const square = document.querySelectorAll('.number')
  .forEach((listItem) => {
    const listNum = listItem.dataset.number;
    listItem.dataset.squared = listNum * listNum;
    // console.log(listItem)
  });
}
// squaredNumbers()
export { squaredNumbers };
