// This file contains advanced JavaScript concepts

// Closures
function outerFunction() {
  const outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: I am from the outer function

// 'this' binding
const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: Hello, my name is John

// 'call', 'apply', and 'bind'
const person2 = {
  name: 'Jane'
};

function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

greet.call(person2); // Output: Hello, my name is Jane

// Event loop
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');