// 11 - Abstraction in JavaScript
// Abstraction = hiding internal complexity, exposing only what's necessary

// ─────────────────────────────────────────────
// 1. Abstraction via Constructor Function + Closure
// ─────────────────────────────────────────────
function BankAccount(owner, balance) {
  // Private (hidden) state via closure
  let _balance = balance;

  // Public interface only
  this.owner = owner;

  this.deposit = function (amount) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    _balance += amount;
    console.log(`Deposited ₹${amount}. New balance: ₹${_balance}`);
  };

  this.withdraw = function (amount) {
    if (amount > _balance) throw new Error("Insufficient funds");
    _balance -= amount;
    console.log(`Withdrew ₹${amount}. Remaining: ₹${_balance}`);
  };

  this.getBalance = function () {
    return _balance; // controlled read-only access
  };
}

const acc = new BankAccount("Ashutosh", 5000);
acc.deposit(1000);
acc.withdraw(2000);
console.log("Balance:", acc.getBalance()); // 4000
// acc._balance → undefined (truly hidden)

// ─────────────────────────────────────────────
// 2. Abstraction via ES6 Class + Private Fields (#)
// ─────────────────────────────────────────────
class CoffeeMachine {
  #waterLevel = 0; // truly private field

  fillWater(ml) {
    this.#waterLevel += ml;
    console.log(`Water filled: ${this.#waterLevel}ml`);
  }

  makeCoffee(type) {
    if (this.#waterLevel < 200) {
      console.log("Not enough water! Fill at least 200ml.");
      return;
    }
    this.#heatWater(); // internal step hidden from user
    this.#brewCoffee(type);
    this.#waterLevel -= 200;
  }

  // Private internal methods
  #heatWater() {
    console.log("⚙️  Heating water internally...");
  }

  #brewCoffee(type) {
    console.log(`☕ Brewing ${type} coffee...`);
  }
}

const machine = new CoffeeMachine();
machine.fillWater(500);
machine.makeCoffee("Espresso");
// machine.#waterLevel → SyntaxError (private!)

// ─────────────────────────────────────────────
// 3. Abstraction via Abstract-like Base Class
//    (JavaScript has no native abstract classes,
//     but we simulate it with Error throws)
// ─────────────────────────────────────────────
class Shape {
  constructor(color) {
    if (new.target === Shape) {
      throw new Error("Shape is an abstract class. Cannot instantiate directly.");
    }
    this.color = color;
  }

  // Abstract method — subclasses MUST implement
  area() {
    throw new Error("Method area() must be implemented by subclass");
  }

  describe() {
    console.log(`This is a ${this.color} shape with area: ${this.area()}`);
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  area() {
    return (Math.PI * this.radius ** 2).toFixed(2);
  }
}

class Rectangle extends Shape {
  constructor(color, w, h) {
    super(color);
    this.width = w;
    this.height = h;
  }

  area() {
    return this.width * this.height;
  }
}

const c = new Circle("red", 7);
c.describe(); // This is a red shape with area: 153.94

const r = new Rectangle("blue", 5, 10);
r.describe(); // This is a blue shape with area: 50

// try { new Shape("green"); } // ← throws Error

// ─────────────────────────────────────────────
// Key Takeaways:
// • Abstraction = "what to do", not "how it's done"
// • Users interact with a clean public interface
// • Internal logic / data is hidden (closure, #fields)
// • Simulated abstract classes enforce contracts on subclasses
// ─────────────────────────────────────────────
