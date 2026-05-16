// 12 - Mixins & Composition in JavaScript
// "Favor composition over inheritance" — Gang of Four

// ─────────────────────────────────────────────
// 1. The Problem with Deep Inheritance
//    (Diamond Problem / Rigid Hierarchies)
// ─────────────────────────────────────────────
// Animal → FlyingAnimal → FlyingSwimmingAnimal ← gets messy!
// Solution: compose behaviors as mixins

// ─────────────────────────────────────────────
// 2. Mixin Pattern — Object.assign approach
// ─────────────────────────────────────────────
const CanFly = {
  fly() {
    console.log(`${this.name} is flying ✈️`);
  },
  land() {
    console.log(`${this.name} has landed 🛬`);
  },
};

const CanSwim = {
  swim() {
    console.log(`${this.name} is swimming 🏊`);
  },
  dive() {
    console.log(`${this.name} is diving 🤿`);
  },
};

const CanRun = {
  run() {
    console.log(`${this.name} is running 🏃`);
  },
};

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating 🍖`);
  }
}

// Duck can fly, swim, run
class Duck extends Animal {}
Object.assign(Duck.prototype, CanFly, CanSwim, CanRun);

// Eagle can only fly
class Eagle extends Animal {}
Object.assign(Eagle.prototype, CanFly);

// Fish can only swim
class Fish extends Animal {}
Object.assign(Fish.prototype, CanSwim);

const duck = new Duck("Donald");
duck.eat();   // Donald is eating
duck.fly();   // Donald is flying
duck.swim();  // Donald is swimming
duck.run();   // Donald is running

const eagle = new Eagle("Sam");
eagle.fly();  // Sam is flying

const fish = new Fish("Nemo");
fish.swim();  // Nemo is swimming
fish.dive();  // Nemo is diving

// ─────────────────────────────────────────────
// 3. Mixin Factory Functions (Functional Mixins)
//    More powerful — can have private state
// ─────────────────────────────────────────────
const Serializable = (Base) =>
  class extends Base {
    serialize() {
      return JSON.stringify(this);
    }
    static deserialize(json) {
      return Object.assign(new this(), JSON.parse(json));
    }
  };

const Timestamped = (Base) =>
  class extends Base {
    constructor(...args) {
      super(...args);
      this.createdAt = new Date().toISOString();
    }
  };

const Validatable = (Base) =>
  class extends Base {
    validate() {
      for (const [key, val] of Object.entries(this)) {
        if (val === null || val === undefined || val === "") {
          throw new Error(`Validation failed: "${key}" is empty`);
        }
      }
      return true;
    }
  };

// Compose a User class using multiple mixins
class BaseUser {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Stack mixins: Validatable → Timestamped → Serializable → BaseUser
const User = Serializable(Timestamped(Validatable(BaseUser)));

const user = new User("Ashutosh", "ash@gmail.com");
console.log(user.createdAt);          // ISO timestamp
console.log(user.validate());         // true
console.log(user.serialize());        // JSON string

// ─────────────────────────────────────────────
// 4. Composition over Inheritance
//    Build objects from small behavior units
// ─────────────────────────────────────────────

// Behavior units (pure functions that add abilities)
const withLogger = (state) => ({
  log: () => console.log(`[LOG] ${JSON.stringify(state)}`),
});

const withGreeting = (state) => ({
  greet: () => console.log(`Hello, I am ${state.name}!`),
});

const withAge = (state) => ({
  isAdult: () => state.age >= 18,
});

// Compose a person object
function createPerson(name, age) {
  const state = { name, age };
  return Object.assign(
    {},
    state,
    withLogger(state),
    withGreeting(state),
    withAge(state)
  );
}

const person = createPerson("Ashutosh", 25);
person.greet();           // Hello, I am Ashutosh!
console.log(person.isAdult()); // true
person.log();             // [LOG] {"name":"Ashutosh","age":25}

// ─────────────────────────────────────────────
// Key Takeaways:
// • Mixins = reusable behavior blocks mixed into classes
// • Object.assign(Target.prototype, mixin) → simple mixin
// • Mixin factories (fn(Base) => class extends Base) → powerful, composable
// • Composition = assembling objects from small capability functions
// • Avoids rigid inheritance trees and the "banana-gorilla-jungle" problem
// ─────────────────────────────────────────────
