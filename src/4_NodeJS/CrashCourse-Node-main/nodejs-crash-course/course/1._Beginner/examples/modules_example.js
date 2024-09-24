// This is an example of working with modules in Node.js

// Importing a core module
const fs = require('fs');

// Importing a custom module
const mathUtils = require('../../utils/mathUtils');

// Using the core module
const data = fs.readFileSync('data.txt', 'utf8');
console.log('Data:', data);

// Using the custom module
const sum = mathUtils.add(5, 3);
console.log('Sum:', sum);