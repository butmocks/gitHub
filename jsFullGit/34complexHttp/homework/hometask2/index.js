const baseUrl = 'https://61da71d5ce86530017e3cd56.mockapi.io/api/v1/users';

export const getUsersList = () => {
  return fetch(baseUrl).then(response => response.json());
};

export const getUserById = userId => {
  return fetch(`${baseUrl}/${userId}`).then(response => response.json());
};

export const createUser = obj => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(obj),
  });
};

export const updateUser = (userId, obj) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(obj),
  });
};

export const deleteUser = userId => {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });
};

// examples
getUsersList().then(users => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('2').then(userData => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
…
deleteUser('2').then(() => {
  console.log('User updated');
});
