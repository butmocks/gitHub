// class Vehicle {
//   constructor(name, hasWheels) {
//     this.hasWheels = hasWheels;
//     this.name = name;
//   }
//   move() {
//     console.log(`${this.name} is moving`);
//   }

//   stop() {
//     console.log(`${this.name} stopped`);
//   }
// }

// class Ship extends Vehicle {
//   constructor(name, speed) {
//     super(name, false);
//     this.speed = speed;
//   }
//   move() {
//     console.log(`${this.name} lifting anchor up`);
//     super.move();
//   }

//   stop() {
//     super.stop();
//     console.log(`${this.name} lifting anchor down`);
//   }
// }

// const ship1 = new Ship('Aurora', 17);

// ship1.startMachine();

// =======================

class Vehicle {
  constructor(name, hasWheels) {
    this.hasWheels = hasWheels;
    this.name = name;
  }
  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, speed) {
    super(name, false);
    this.speed = speed;
  }
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  }

  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

const ship1 = new Ship('Aurora', 17);

ship1.startMachine()

console.log(ship1);

// =============================

// const vehicle = {
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   hasWheels: false,
//   name: 'Chaika',
//   liftAnchorUp() {
//     console.log(`${this.name} lifting anchor up`);
//   },
//   liftAnchorDown() {
//     console.log(`${this.name} lifting anchor down`);
//   },
//   startMachine() {
//     this.liftAnchorUp();
//     this.move();
//   },
//   stopMachine() {
//     this.stop();
//     this.liftAnchorDown();
//   },
// };

// Object.setPrototypeOf(ship, vehicle);
