const resolvedPromise = new Promise(resolve => {
  resolve(17);
});
const resolvedPromise2 = Promise.resolve(17);
console.log(resolvedPromise, resolvedPromise2); // same

const rejecredPromise = new Promise((resolve, reject) => {
  reject(new Error('error'));
});
rejecredPromise.catch(data => console.log(data));

const rejecredPromise2 = Promise.reject(new Error('error'));
rejecredPromise2.catch(data => console.log(data));
// console.log(rejecredPromise, rejecredPromise2);
