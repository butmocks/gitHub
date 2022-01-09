const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          email: `${userId}@exampl.com`,
          userId: `${userId}`,
        });
      }, 1000);
    }
  });

  return request;
};


requestUserData('broken')
.catch(error => {
    console.log(error)
    return 1
});
.then(data => 4)
.then(data => console.log(data))
.finally(() => console.log('finally'))