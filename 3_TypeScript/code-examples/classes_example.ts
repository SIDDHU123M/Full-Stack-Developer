// Demonstrates the creation of classes, properties, and methods.
class Person {
    name: string;  // Property to store the person's name
    age: number;   // Property to store the person's age

    // Constructor to initialize the properties
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method to greet the person
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create an instance of the Person class
const person1 = new Person("Alice", 28);
person1.greet(); // Output: Hello, my name is Alice and I am 28 years old.
