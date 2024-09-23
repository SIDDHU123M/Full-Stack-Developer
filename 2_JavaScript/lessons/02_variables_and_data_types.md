# Variables and Data Types

## Introduction

In JavaScript, variables are used to store data values. Each variable has a name (identifier) and a data type that determines the kind of data it can hold. Understanding how to work with variables and data types is fundamental to writing effective JavaScript code.

## Variables in JavaScript

### Declaring Variables

Variables can be declared using three keywords: `var`, `let`, and `const`.

- **`var`**: Declares a variable with function scope. It is hoisted, meaning it can be accessed before its declaration.
- **`let`**: Declares a block-scoped variable. It is not hoisted, making it safer to use in loops and conditions.
- **`const`**: Declares a block-scoped variable that cannot be reassigned. Use `const` for values that should remain constant.

### Example: Variable Declaration

```javascript
// Variable declaration with var
var name = "John Doe";

// Variable declaration with let
let age = 30;

// Variable declaration with const
const birthYear = 1993;
```

### Naming Conventions

When naming variables, follow these conventions:
- Use meaningful names (e.g., `totalPrice`, `isAvailable`).
- Use camelCase for multi-word names (e.g., `userName`, `accountBalance`).
- Avoid starting names with numbers or using special characters (except for underscores and dollar signs).

## Data Types in JavaScript

JavaScript has several built-in data types:

1. **Number**: Represents numeric values, including integers and floating-point numbers.
2. **String**: Represents a sequence of characters, enclosed in single or double quotes.
3. **Boolean**: Represents a logical entity and can be either `true` or `false`.
4. **Undefined**: Represents a variable that has been declared but not assigned a value.
5. **Null**: Represents the intentional absence of any object value.
6. **Object**: Represents a collection of key-value pairs. Objects can hold multiple values and are mutable.
7. **Array**: A special type of object used for storing ordered lists of values.

### Example: Different Data Types

```javascript
let score = 85;                // Number
let name = "Alice";           // String
let isPassed = true;          // Boolean
let userDetails;              // Undefined
let selectedColor = null;     // Null
let person = { name: "Bob", age: 25 }; // Object
let numbers = [1, 2, 3, 4];   // Array
```

## Type Checking and Type Conversion

### Checking Data Types

You can check the data type of a variable using the `typeof` operator.

### Example: Using `typeof`

```javascript
console.log(typeof score);        // Output: "number"
console.log(typeof name);         // Output: "string"
console.log(typeof isPassed);     // Output: "boolean"
console.log(typeof userDetails);  // Output: "undefined"
console.log(typeof person);       // Output: "object"
console.log(typeof numbers);      // Output: "object" (arrays are also objects)
```

### Type Conversion

JavaScript performs automatic type conversion in certain situations, but you can also explicitly convert data types using the following methods:

- **`String(value)`**: Converts a value to a string.
- **`Number(value)`**: Converts a value to a number.
- **`Boolean(value)`**: Converts a value to a boolean.

### Example: Type Conversion

```javascript
let value = "5";
let numberValue = Number(value); // Converts string to number
console.log(numberValue); // Output: 5

let isActive = Boolean(1); // Converts number to boolean
console.log(isActive); // Output: true
```

## Conclusion

Understanding variables and data types is essential in JavaScript programming. Variables allow you to store and manipulate data, while data types define the nature of the data being stored. By using the appropriate data types and understanding type conversion, you can write more effective and reliable JavaScript code.

## Suggestions

- Experiment with different variable declarations and data types in the browser's console.
- Create a small program that utilizes various data types and prints the results to understand how type conversion works.

## Resources

- [MDN Web Docs - JavaScript Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar#declarations)
- [MDN Web Docs - Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript.info - Variables](https://javascript.info/variables)
- [W3Schools - JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)

## Next Steps

- Learn more about functions and scope in the next lesson.
- Next Lesson >> [Functions and Scope](03_functions_and_scope.md)
