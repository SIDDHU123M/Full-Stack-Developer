// Objects.js

// Example of creating objects using object literals
const person = {
  name: 'John Doe',
  age: 30,
  profession: 'Developer',
};

// Accessing object properties
console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
console.log(person.profession); // Output: Developer

// Modifying object properties
person.age = 35;
console.log(person.age); // Output: 35

// Adding new properties to an object
person.location = 'New York';
console.log(person.location); // Output: New York

// Example of creating objects using constructor functions
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Creating instances of the Car object
const car1 = new Car('Toyota', 'Camry', 2020);
const car2 = new Car('Honda', 'Accord', 2019);

// Accessing object properties
console.log(car1.make); // Output: Toyota
console.log(car2.model); // Output: Accord
console.log(car1.year); // Output: 2020
console.log(car2.year); // Output: 2019

// Adding methods to an object
Car.prototype.start = function () {
  console.log('The car has started.');
};

car1.start(); // Output: The car has started.
car2.start(); // Output: The car has started.