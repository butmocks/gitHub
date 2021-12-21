export const addImage = imgSrc => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerEl = document.querySelector('.page');
    containerEl.append(imgElem);

    const onImgLoaded = () => {
      const { width, height } = imgElem;
      resolveCb({ width, height });
    };

    imgElem.addEventListener('load', onImgLoaded);
    imgElem.addEventListener('error', () => rejectCb(new Error('Image load is failed...')));
  });
  return p;
};
