# Modules in JavaScript

In JavaScript, modules are used to organize code into reusable and maintainable units. Modules allow you to encapsulate related functionality, prevent naming conflicts, and promote code reusability.

## Introduction to Modules

A module is a self-contained unit of code that can be imported and used in other parts of your application. JavaScript modules follow the CommonJS or ES6 module syntax.

### CommonJS Modules

CommonJS is a module system used in Node.js. It uses the `require` function to import modules and the `module.exports` object to export values.

To import a module:

```javascript
const module = require('./module');
```

To export values from a module:

```javascript
module.exports = {
  // exported values
};
```

### ES6 Modules

ES6 introduced a native module system for JavaScript. It uses the `import` and `export` keywords to import and export modules.

To import a module:

```javascript
import module from './module';
```

To export values from a module:

```javascript
export default {
  // exported values
};
```

## Using Modules

Once you have defined and exported a module, you can use it in other parts of your application.

### Importing a Module

To import a module, use the `import` statement followed by the module path:

```javascript
import module from './module';
```

You can also import specific values from a module:

```javascript
import { value1, value2 } from './module';
```

### Exporting from a Module

To export values from a module, use the `export` keyword followed by the value or object you want to export:

```javascript
export const value1 = 'Value 1';
export const value2 = 'Value 2';
```

You can also export a default value from a module:

```javascript
export default {
  // default value
};
```

## Practical Examples

Let's look at some practical examples of using modules in JavaScript:

### Example 1: Math Module

Create a `math.js` module that exports various math functions:

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
```

In another file, import and use the math functions:

```javascript
// main.js
import { add, multiply } from './math';

console.log(add(2, 3)); // Output: 5
console.log(multiply(4, 5)); // Output: 20
```

### Example 2: Utility Module

Create a `utility.js` module that exports utility functions:

```javascript
// utility.js
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const reverse = (str) => str.split('').reverse().join('');
```

In another file, import and use the utility functions:

```javascript
// main.js
import { capitalize, reverse } from './utility';

console.log(capitalize('hello')); // Output: Hello
console.log(reverse('world')); // Output: dlrow
```

## Exercises

1. Create a module that exports a function to calculate the area of a circle. Import and use the function in another file.

2. Create a module that exports an object representing a person. The object should have properties for name, age, and occupation. Import and use the object in another file.

3. Create a module that exports a function to generate a random number between two given values. Import and use the function in another file.

## Additional Resources

- [MDN Web Docs: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Node.js Modules](https://nodejs.org/api/modules.html)
- [ES6 Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)