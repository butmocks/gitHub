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

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const result = addImage(imgSrc);

console.log(result);

// const onImageLoaded = (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const { width, height } = data;

//   const sizeElem = document.querySelector('.image-size');

//   sizeElem.textContent = `${width} x ${height}`;
// };

// addImage(imgSrc, onImageLoaded);
