function finishList() {
  const listElem = document.querySelector('.list');
  const SpecialElem = document.querySelector('.special');
  const LiNew = document.createElement('li');
  LiNew.textContent = 1;
  listElem.prepend(LiNew);
  const LiBefore = document.createElement('li');
  LiBefore.textContent = 4;
  SpecialElem.before(LiBefore);
  const createAfter = document.createElement('li');
  createAfter.textContent = 6;
  SpecialElem.after(createAfter);
  const liElem = document.createElement('li');
  liElem.textContent = 8;
  listElem.append(liElem);
}

// finishList();
export { finishList };
