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

const topping = {
  cheese: {
    price: 15,
    ccal: 15,
  },
  potatto: {
    price: 10,
    ccal: 15,
  },
  lattuce: {
    price: 20,
    ccal: 20,
  },
  sauce: {
    price: 15,
    ccal: 15,
  },
};
class Burger {
  constructor(size, topping) {
    this.size = size;
    this.toppings = topping;
  };
  addToppings(toppings) {
    this.topping.push(...toppings);
  };
  getPrice() {
    return this.size.price + this.toppings.price;
  };
  getCcal() {
    return this.size.ccal + this.toppings.ccal;
  };
};

let newB = new Burger(size.medium, topping.cheese);
let newBurger = new Burger(size.extra, topping.lattuce);

console.log(`Price is : ${newB.getPrice()}`);
console.log(`Price is : ${newBurger.getPrice()}`);
console.log(`Calories in burger : ${newBurger.getCcal()}`);
