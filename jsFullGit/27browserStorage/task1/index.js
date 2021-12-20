// getLocalStorage

localStorage.clear();

localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('name', 'Tom');
localStorage.getItem('age', JSON.stringify(17));

// console.log(JSON.parse(localStorage.getItem('hobbies')));

// const getLocalStorageData = () => {
//     for (let i = 0; i < localStorage.length; i++) {
//         localStorage.key(i)
//     }
// }

// ==================
// const getLocalStorageData = () => {
//   for (let i of localStorage) {
//     localStorage.key(i);
//   }
// };

// ===================
// const getLocalStorageData = () => {
//   Object.keys(localStorage);
// };

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      const newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log(getLocalStorageData());
