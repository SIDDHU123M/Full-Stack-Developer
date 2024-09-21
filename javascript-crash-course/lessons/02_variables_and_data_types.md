# Variables and Data Types

In JavaScript, variables are used to store and manipulate data. They can hold different types of values, such as numbers, strings, booleans, objects, and more. Understanding variables and data types is essential for working with JavaScript.

## Declaring Variables

In JavaScript, variables are declared using the `var`, `let`, or `const` keyword. The `var` keyword is used for declaring variables with function scope, while `let` and `const` are used for block-scoped variables.

```javascript
var name = 'John';
let age = 25;
const PI = 3.14;
```

## Data Types

JavaScript has several built-in data types, including:

- **Number**: Represents numeric values, such as `42` or `3.14`.
- **String**: Represents textual data, enclosed in single or double quotes, such as `'Hello'` or `"World"`.
- **Boolean**: Represents a logical value, either `true` or `false`.
- **Object**: Represents a collection of key-value pairs, such as `{ name: 'John', age: 25 }`.
- **Array**: Represents an ordered list of values, such as `[1, 2, 3]`.
- **Null**: Represents the intentional absence of any object value.
- **Undefined**: Represents an uninitialized variable or missing property.

```javascript
let number = 42;
let message = 'Hello, World!';
let isTrue = true;
let person = { name: 'John', age: 25 };
let numbers = [1, 2, 3];
let empty = null;
let undefinedValue = undefined;
```

## Type Conversion

JavaScript provides functions and operators for converting between different data types. For example, you can convert a number to a string using the `toString()` method or the `String()` function.

```javascript
let number = 42;
let numberAsString = number.toString();
let string = String(number);
```

## Type Coercion

JavaScript also performs automatic type coercion, which is the process of converting values of one type to another type. This can sometimes lead to unexpected results, so it's important to understand how type coercion works.

```javascript
let result = '10' + 2; // '102'
let sum = 5 + '5'; // '55'
```

## Exercises

1. Declare a variable `name` and assign it your name as a string.
2. Declare a variable `age` and assign it your age as a number.
3. Declare a variable `isStudent` and assign it a boolean value indicating whether you are a student or not.
4. Create an object `person` with properties `name`, `age`, and `isStudent`.
5. Create an array `numbers` with three numbers of your choice.
6. Convert the number `42` to a string and assign it to a variable `numberAsString`.
7. Perform type coercion to concatenate the string `'10'` and the number `2`.

## Additional Resources

- [MDN Web Docs: JavaScript Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN Web Docs: Type Conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_conversion)
- [MDN Web Docs: Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)