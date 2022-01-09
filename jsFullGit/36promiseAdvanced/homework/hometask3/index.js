const fetchUser = async userId => {
  try {
    const respoUser = await fetch(`https://api.github.com/users/` + userId);
    if (respoUser.ok) {
      return await respoUser.json();
    }
    throw new Error('Failed to load data');
  } catch (err) {
    return err.message;
  }
};

const getUsersBlogs = arrId =>
  Promise.all(arrId.map(async el => fetchUser(el).then(res => res.blog)));

getUsersBlogs(['google', 'facebook', 'gaearon']).then(linksList => console.log(linksList));
