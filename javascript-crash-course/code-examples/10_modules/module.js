// This is a sample module in JavaScript

// Private variable
let privateVariable = 'This is a private variable';

// Public function
function publicFunction() {
  console.log('This is a public function');
}

// Public object
const publicObject = {
  message: 'This is a public object',
  logMessage() {
    console.log(this.message);
  }
}

// Exporting variables and functions
export { privateVariable, publicFunction, publicObject };