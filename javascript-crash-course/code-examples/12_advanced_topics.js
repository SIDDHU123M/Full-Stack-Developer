// Advanced JavaScript Topics

// 1. Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe' };
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log('Data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// 2. Generators
function* generatorFunction() {
  yield 'Hello';
  yield 'World';
  yield '!';
}

const generator = generatorFunction();
console.log(generator.next().value); // Output: Hello
console.log(generator.next().value); // Output: World
console.log(generator.next().value); // Output: !

// 3. Proxies
const target = {
  name: 'John Doe',
  age: 30,
};

const handler = {
  get: function (target, property) {
    if (property === 'age') {
      return target[property] + 5;
    }
    return target[property];
  },
};

const proxy = new Proxy(target, handler);
console.log(proxy.name); // Output: John Doe
console.log(proxy.age); // Output: 35

// 4. Reflect API
const person = {
  name: 'John Doe',
  age: 30,
};

console.log(Reflect.has(person, 'name')); // Output: true
console.log(Reflect.get(person, 'age')); // Output: 30

// 5. Modules (ES6)
import { greet, calculate } from './module.js';

console.log(greet('John')); // Output: Hello, John!
console.log(calculate(5, 3, '+')); // Output: 8

// 6. Asynchronous Iteration (ES8)
const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      async next() {
        if (i < 3) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return { value: i++, done: false };
        }
        return { done: true };
      },
    };
  },
};

(async function () {
  for await (const item of asyncIterable) {
    console.log(item);
  }
})();

// 7. Web Workers
const worker = new Worker('worker.js');

worker.onmessage = function (event) {
  console.log('Message from worker:', event.data);
};

worker.postMessage('Hello from main thread!');

// 8. Service Workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}