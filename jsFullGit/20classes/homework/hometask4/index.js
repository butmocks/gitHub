// input obj
// output arr

class Order {
  constructor(price, city, type) {
    this.id = `${Math.random()}`;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.price = price;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    if (this.price < 1000) return false;
    return true;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();

    return this.confirmOrder;
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') return true;
    return false;
  }
}

const order2 = new Order(3255, 'Kyiv', 'Buy');
const order3 = new Order(1257, 'Kyiv', 'Sell');
const order1 = new Order(10, 'Kyiv', 'gde');