// // vehicle and ship

// const vehicle = {
//   move() {
//     console.log('moving');
//   },
//   stop() {
//     console.log('stopped')
//   }
// }

// vehicle.move()

// console.log(vehicle)

// ====================

// const vehicle = {
//   move() {
//     console.log('moving');
//   },
//   stop() {
//     console.log('stopped');
//   },
// };

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log('lifting anchor down');
//   },
//   liftAnchorUp()) {
//     console.log('lifting anchor up');
//   },
//   __proto__: vehicle,
// };

// console.log(ship);

// [prototype];

// =====================

// const vehicle = {
//   move() {
//     console.log('moving');
//   },
//   stop() {
//     console.log('stopped');
//   },
// };

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log('lifting anchor down');
//   },
//   liftAnchorUp() {
//     console.log('lifting anchor up');
//   },

// };

// Object.setPrototypeOf(ship, vehicle)

// ship.move()
// console.log(ship)

// ==================================

const vehicle = {
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
  __proto__
};

Object.setPrototypeOf(ship, vehicle);

ship.move();
