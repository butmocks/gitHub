// own props

const vehicle = {
  isMovong: false,
  move() {
    console.log(`${this.name} moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Aurora',
  hasWheels: false,
  liftAnchorDown() {
    console.log('lifting anchor down');
  },
  liftAnchorUp() {
    console.log('lifting anchor up');
  },
};

Object.setPrototypeOf(ship, vehicle);

for (let prop in ship) {
  if (ship.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

console.log(Object.keys(ship));
