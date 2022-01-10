// input: obj
// output: undefined

const saveUser = userData => {
  console.log(JSON.stringify(userData));

  // inp: string, obj
  // out: promise
  const httpPromise = fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  // input: callback
  // --- in: promise result
  // --- out: RANDOM
  // output: promise
  httpPromise
  .then(response => {
    return response.json();
  })
  .then(res => {
      console.log(res);

      alert(JSON.stringify(res))
  });
};

// test data
const user = {
  email: 'test@gmail.com',
  userName: 'user111',
  password: 'sassas',
};

saveUser(user)
