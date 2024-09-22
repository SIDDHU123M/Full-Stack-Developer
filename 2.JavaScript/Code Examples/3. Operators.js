// Operators.js

// Arithmetic Operators
let num1 = 10;
let num2 = 5;

let addition = num1 + num2;
console.log("Addition:", addition);

let subtraction = num1 - num2;
console.log("Subtraction:", subtraction);

let multiplication = num1 * num2;
console.log("Multiplication:", multiplication);

let division = num1 / num2;
console.log("Division:", division);

let modulus = num1 % num2;
console.log("Modulus:", modulus);

let exponentiation = num1 ** num2;
console.log("Exponentiation:", exponentiation);

// Assignment Operators
let x = 10;
x += 5; // equivalent to x = x + 5
console.log("x:", x);

let y = 10;
y -= 5; // equivalent to y = y - 5
console.log("y:", y);

let z = 10;
z *= 5; // equivalent to z = z * 5
console.log("z:", z);

let w = 10;
w /= 5; // equivalent to w = w / 5
console.log("w:", w);

let v = 10;
v %= 5; // equivalent to v = v % 5
console.log("v:", v);

// Comparison Operators
let a = 5;
let b = 10;

console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);
console.log("a === b:", a === b);
console.log("a !== b:", a !== b);

// Logical Operators
let isTrue = true;
let isFalse = false;

console.log("isTrue && isFalse:", isTrue && isFalse);
console.log("isTrue || isFalse:", isTrue || isFalse);
console.log("!isFalse:", !isFalse);

// Bitwise Operators
let binary1 = 5; // 0101
let binary2 = 3; // 0011

console.log("binary1 & binary2:", binary1 & binary2); // Bitwise AND
console.log("binary1 | binary2:", binary1 | binary2); // Bitwise OR
console.log("binary1 ^ binary2:", binary1 ^ binary2); // Bitwise XOR
console.log("~binary1:", ~binary1); // Bitwise NOT
console.log("binary1 << 1:", binary1 << 1); // Left shift
console.log("binary1 >> 1:", binary1 >> 1); // Right shift