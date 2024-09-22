# JavaScript Data Types

In JavaScript, there are two main categories of data types: primitive types and reference types. Understanding these data types is essential for writing effective JavaScript code.

## Primitive Data Types

JavaScript has six primitive data types:

1. **Number**: Represents numeric values, including integers and floating-point numbers. For example:

   ```javascript
   let age = 25;
   let pi = 3.14;
   ```

2. **String**: Represents textual data enclosed in single or double quotes. For example:

   ```javascript
   let name = 'John';
   let message = "Hello, world!";
   ```

3. **Boolean**: Represents a logical value, either `true` or `false`. For example:

   ```javascript
   let isLogged = true;
   let isHidden = false;
   ```

4. **Null**: Represents the intentional absence of any object value. For example:

   ```javascript
   let data = null;
   ```

5. **Undefined**: Represents a variable that has been declared but has not been assigned a value. For example:

   ```javascript
   let city;
   ```

6. **Symbol**: Represents a unique identifier. Symbols are often used as keys in objects to avoid naming collisions. For example:

   ```javascript
   const id = Symbol('id');
   let user = {
     [id]: 123,
   };
   ```

## Reference Data Types

JavaScript also has reference data types, which are objects that are stored by reference rather than by value. Some common reference types include:

1. **Object**: Represents a collection of key-value pairs. Objects can contain properties and methods. For example:

   ```javascript
   let person = {
     name: 'John',
     age: 25,
     sayHello: function() {
       console.log('Hello!');
     },
   };
   ```

2. **Array**: Represents an ordered list of values. Arrays can contain elements of any data type. For example:

   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   let fruits = ['apple', 'banana', 'orange'];
   ```

3. **Function**: Represents a reusable block of code that performs a specific task. Functions can be assigned to variables, passed as arguments, and returned from other functions. For example:

   ```javascript
   function add(a, b) {
     return a + b;
   }
   ```

4. **Date**: Represents a specific moment in time. The `Date` object provides methods for working with dates and times. For example:

   ```javascript
   let now = new Date();
   ```

These are the main data types in JavaScript. Understanding their characteristics and how to work with them is crucial for writing effective JavaScript code.