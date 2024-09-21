// Class hierarchy for a vehicle management system

class Vehicle {
  constructor(public brand: string, public model: string) {}

  getInfo(): string {
    return `Brand: ${this.brand}, Model: ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(brand: string, model: string, public numWheels: number) {
    super(brand, model);
  }

  getInfo(): string {
    return `${super.getInfo()}, Number of Wheels: ${this.numWheels}`;
  }
}

class Motorcycle extends Vehicle {
  constructor(brand: string, model: string, public numCylinders: number) {
    super(brand, model);
  }

  getInfo(): string {
    return `${super.getInfo()}, Number of Cylinders: ${this.numCylinders}`;
  }
}

const car = new Car("Toyota", "Camry", 4);
console.log(car.getInfo()); // Output: Brand: Toyota, Model: Camry, Number of Wheels: 4

const motorcycle = new Motorcycle("Honda", "CBR500R", 2);
console.log(motorcycle.getInfo()); // Output: Brand: Honda, Model: CBR500R, Number of Cylinders: 2