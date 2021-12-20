// addImage

// const buttonElem = document.querySelector('#button');

// buttonElem.addEventListener('click', () => console.log('Click'));

// let sum = 0;
// const startTime = new Date();
// console.log('Cycle started');
// for (let i = 0; i < 5e9; i++) {
//   sum += 1;
// }
// const endTime = new Date();
// console.log(`Cycle took ${endTime - startTime}ms`);

// ========================

const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };

  imgElem.addEventListener('load', onImageLoaded);

  imgElem.addEventListener('error', () => callback('Image load failed'));
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;

  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

addImage(imgSrc, onImageLoaded);

// ======== HOMETASK ===========

// const addImage = (imgSrc, callback) => {
//   // put your code here
// };

// // callack function
// const onImageLoaded = (error, imgElem) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   const { width, height } = imgElem;
//   const sizeElem = document.querySelector('.image-size');

//   sizeElem.textContent = `${width} x ${height}`;
// };

// // examples
// // addImage(
// //   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
// //   onImageLoaded,
// // );
