// input: object
// output: array
function getOwnProps(obj) {
  const prop = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      prop.push(key);
    }
  }
  return prop.filter(el => typeof obj[el] !== 'function');
}

const vehicle = {
  name: `Argo`,
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

console.log(getOwnProps(vehicle));
console.log(getOwnProps(ship));
