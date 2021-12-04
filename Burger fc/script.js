const size = {
  small: {
    price: 50,
    ccal: 30,
  },
  medium: {
    price: 75,
    ccal: 40,
  },
  extra: {
    price: 100,
    ccal: 50,
  },
};

const TOPPING = {
  CHEESE: {
    price: 15,
    ccal: 15,
  },
  POTTATO: {
    price: 10,
    ccal: 15,
  },
  LATTUCE: {
    price: 20,
    ccal: 20,
  },
  SAUCE: {
    price: 15,
    ccal: 15,
  },
};
function Burger(size, topping = []) {
  this.size = size;
  this.toppings = [...topping];
};
Burger.prototype.addTopping = function (...toppings) {
  this.toppings.push(...toppings);
};
Burger.prototype.getPrice = function () {
  return (this.size.price = this.toppings.reduce((acc, e) => acc + e.price, 0));
};
Burger.prototype.getCCal = function () {
  return (this.size.ccal = this.toppings.reduce((acc, e) => acc + e.ccal, 0));
};

const burger = new Burger(size.extra);
burger.addTopping(TOPPING.CHEESE);

console.log(burger.getPrice());
