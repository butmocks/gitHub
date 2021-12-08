class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }
  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(key => key._name);
  }

  getUserIds() {
    return this._users.map(key => key._id);
  }

  getUserNameById(id) {
    for (let user of this._users) {
      if (user.id === id) return user.name;
    }
  }
}

export { User, UserRepository };

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

const user1 = new User('2', 'Bob', 'session-id');
const user2 = new User('3', 'Jlob', 'session-id');
const user3 = new User('4', 'Obormot', 'session-id');

const userRepository = new UserRepository([user, user1, user2, user3]);
console.log(userRepository.users);
console.log(userRepository.getUserNames());
console.log(userRepository.getUserIds());
console.log(userRepository.getUserNameById(4));