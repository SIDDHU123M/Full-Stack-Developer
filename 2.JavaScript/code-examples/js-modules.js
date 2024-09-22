// js-modules.js

// Example 1: Exporting and Importing Modules
// Exporting a function
export function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Importing the greet function
import { greet } from './path/to/module';

greet('John'); // Output: Hello, John!

// Example 2: Exporting and Importing Multiple Values
// Exporting multiple values
export const PI = 3.14159;
export const square = (x) => x * x;

// Importing multiple values
import { PI, square } from './path/to/module';

console.log(PI); // Output: 3.14159
console.log(square(5)); // Output: 25

// Example 3: Default Exports
// Exporting a default value
export default function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// Importing the default export
import sayHello from './path/to/module';

sayHello('Jane'); // Output: Hello, Jane!

// Example 4: Renaming Exports and Imports
// Exporting with a different name
export { greet as sayHello };

// Importing with a different name
import { sayHello as greet } from './path/to/module';

greet('Alice'); // Output: Hello, Alice!