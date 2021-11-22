// rooms = {
//   room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
//   room2: [{ name: 'Dan' }],
//   room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
// };

// const getPeople = obj => {
//   return Object.values(obj)
//     .reduce((acc, el) => acc.concat(el), [])
//     .map(el => el.name);
// };

// console.log(getPeople(rooms));

const rooms = {
  room1: [
    { name: 'room1 name1' },
    { name: 'room1 name2' },
    { name: 'room1 name3' },
    { name: 'room1 name4' },
  ],
  room2: [
    { name: 'room2 name1' },
    { name: 'room2 name3' },
    { name: 'room2 name2' },
    { name: 'room2 name4' },
  ],
  room3: [
    { name: 'room3 name1' },
    { name: 'room3 name2' },
    { name: 'room3 name3' },
    { name: 'room3 name4' },
  ],
};

const getPeople = object =>
  Object.values(object)
    .flat()
    .map(elem => (elem = elem.name));

const usersArr = getPeople(rooms);

console.log(usersArr);

console.log(rooms);
