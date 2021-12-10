export const squaredNumbers = () => {
  const listItem = Array.from(document.querySelectorAll('.number')).map (el => {
    const listNum = el.dataset.number * el.dataset.number;
    el.dataset.squaredNumbers = listNum;
  })
}

squaredNumbers()

// function squaredNumbers() {
//   const square = document.querySelectorAll('.number')
//   .forEach((listItem) => {
//     const listNum = listItem.dataset.number;
//     listItem.dataset.squared = listNum * listNum;
//     // console.log(listItem)
//   });
// }
// // squaredNumbers()
// export { squaredNumbers };
