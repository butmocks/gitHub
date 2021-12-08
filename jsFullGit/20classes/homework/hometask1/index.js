class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) return false;

    this.age = value;

    if (value >= 25) this.requestNewPhoto();

    return value;
  }

  static createEmpty() {
    return new this('', null);
  }
}

export { User };
const user1 = new User('Tom', 17);
const user2 = new User('Tom', 34);
console.log(User.compare(user1, user2));