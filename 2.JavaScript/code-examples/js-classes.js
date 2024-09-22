// JavaScript Classes Examples

// Class Declaration
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Class Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  // Overriding Method
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Creating Instances
const animal = new Animal('Animal');
const dog = new Dog('Buddy', 'Labrador');

// Calling Methods
animal.speak(); // Output: Animal makes a sound.
dog.speak(); // Output: Buddy barks.