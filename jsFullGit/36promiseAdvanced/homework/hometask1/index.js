const fetchUser = async userId => {
  try {
    const respoUser = await fetch(`https://api.github.com/users/${userId}`);
    if (!respoUser.ok) {
      return null;
    }
    const userData = await respoUser.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to load data');
  }
};



// const fetchUser = async userId => {
//   const response = await fetch(`https://api.github.com/users/${userId}`);
//   if (response.ok) {
//     return response.json();
//   }

//   throw new Error('Failed to fetch user');
// };