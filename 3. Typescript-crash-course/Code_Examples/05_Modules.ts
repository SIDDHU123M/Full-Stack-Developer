// This file contains module-based organization examples for previous lessons

// Importing modules
import { greet } from './02_Functions';
import { Vehicle, Car, Truck } from './03_Classes';
import { Stack } from './04_Generics';

// Using imported functions
greet('John');

// Using classes
const car = new Car('Toyota', 'Camry');
car.start();

const truck = new Truck('Ford', 'F-150');
truck.loadCargo(500);

// Using generics
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop()); // Output: 3

const stringStack = new Stack<string>();
stringStack.push('Hello');
stringStack.push('World');
console.log(stringStack.pop()); // Output: World