// Variables.js

// Variable declaration using var, let, and const
var variable1 = 'Hello'; // Declaring a variable using var
let variable2 = 'World'; // Declaring a variable using let
const variable3 = 'JavaScript'; // Declaring a constant variable using const

// Printing the variables
console.log(variable1); // Output: Hello
console.log(variable2); // Output: World
console.log(variable3); // Output: JavaScript

// Reassigning variables
variable1 = 'Hi';
variable2 = 'There';

// Printing the updated variables
console.log(variable1); // Output: Hi
console.log(variable2); // Output: There

// Type conversion and coercion
let num1 = 5;
let num2 = '10';

let sum = num1 + Number(num2); // Type conversion using Number()
console.log(sum); // Output: 15

let concatenation = num1 + num2; // Type coercion
console.log(concatenation); // Output: 510