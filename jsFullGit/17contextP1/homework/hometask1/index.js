const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    console.log();
    console.log(`${this.firstName} ${this.lastName}.`);
  },
};

user.getFullName();
