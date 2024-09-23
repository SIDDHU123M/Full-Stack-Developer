
// Defining the Vehicle interface
interface Vehicle {
    model: string;
    year: number;
    start(): void;
}

// Implementing the Vehicle interface in a class
class Car implements Vehicle {
    constructor(public model: string, public year: number) {}

    start(): void {
        console.log(`Starting ${this.model} (${this.year})...`);
    }
}

// Implementing the Vehicle interface in another class
class Motorcycle implements Vehicle {
    constructor(public model: string, public year: number) {}

    start(): void {
        console.log(`Starting ${this.model} (${this.year})...`);
    }
}

// Usage
const car = new Car("Toyota", 2020);
car.start(); // Output: Starting Toyota (2020)...

const motorcycle = new Motorcycle("Harley", 2021);
motorcycle.start(); // Output: Starting Harley (2021)...
