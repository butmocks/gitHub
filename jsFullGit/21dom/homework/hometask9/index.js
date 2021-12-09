
// finishList();
// // export { finishList };

// const list = {
//   liElemFirst: document.createElement('li'),
//   liElemFourth: document.createElement('li'),
//   liElemSixth: document.createElement('li'),
//   liElemEightth: document.createElement('li'),
//   finishList() {
//     this.liElemFirst.listElem.prepend(liElemFirst) = '1';
//     this.liElemFourth = '4';
//     this.liElemSixth = '6';
//     this.liElemEightth = '8';
//   },
  
// };

function finishList() {
  const liElemFirst = document.createElement('li');
  const liElemFourth = document.createElement('li');
  const liElemSixth = document.createElement('li');
  const liElemEightth = document.createElement('li');
  liElemFirst.textContent = '1';
  liElemFourth.textContent = '4';
  liElemSixth.textContent = '6';
  liElemEightth.textContent = '8';
  const listElem = document.querySelector('.list');
  listElem.append(liElemEightth);
  listElem.prepend(liElemFirst);
  const specLi = document.querySelector('.special');
  specLi.before(liElemFourth);
  specLi.after(liElemSixth);
}
finishList();
export { finishList }
