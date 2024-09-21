// ES6 Features Example

// Arrow Functions
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// Template Literals
const name = 'John';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!

// Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // Output: John
console.log(age); // Output: 30

// Default Parameters
const greet = (name = 'Guest') => {
  console.log(`Hello, ${name}!`);
};
greet(); // Output: Hello, Guest!
greet('John'); // Output: Hello, John!

// Spread Operator
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // Output: 6

// Classes
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

const john = new Person('John');
john.greet(); // Output: Hello, John!

// Modules (ES6 Modules)
import { add, multiply } from './math.js';
console.log(add(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6