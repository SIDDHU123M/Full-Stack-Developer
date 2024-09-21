# Control Structures

In JavaScript, control structures allow you to control the flow of your code based on certain conditions. They include conditional statements and looping constructs. Understanding control structures is essential for writing efficient and logical code.

## Conditional Statements

Conditional statements allow you to execute different blocks of code based on certain conditions. The most common conditional statements in JavaScript are `if`, `else if`, and `else`.

### The `if` Statement

The `if` statement is used to execute a block of code if a specified condition is true. Here's the syntax:

```javascript
if (condition) {
  // code to be executed if the condition is true
}
```

Example:

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
```

### The `else if` Statement

The `else if` statement allows you to specify a new condition to test if the previous condition is false. Here's the syntax:

```javascript
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition2 is true
} else {
  // code to be executed if all conditions are false
}
```

Example:

```javascript
let age = 18;

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}
```

### The `switch` Statement

The `switch` statement allows you to perform different actions based on different conditions. It is often used as an alternative to multiple `if` statements. Here's the syntax:

```javascript
switch (expression) {
  case value1:
    // code to be executed if expression matches value1
    break;
  case value2:
    // code to be executed if expression matches value2
    break;
  default:
    // code to be executed if expression doesn't match any value
}
```

Example:

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's Monday.");
    break;
  case "Tuesday":
    console.log("It's Tuesday.");
    break;
  default:
    console.log("It's another day of the week.");
}
```

## Looping Constructs

Looping constructs allow you to repeat a block of code multiple times. The most common looping constructs in JavaScript are `for`, `while`, and `do...while` loops.

### The `for` Loop

The `for` loop is used to execute a block of code a specified number of times. Here's the syntax:

```javascript
for (initialization; condition; increment/decrement) {
  // code to be executed
}
```

Example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### The `while` Loop

The `while` loop is used to execute a block of code as long as a specified condition is true. Here's the syntax:

```javascript
while (condition) {
  // code to be executed
}
```

Example:

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

### The `do...while` Loop

The `do...while` loop is similar to the `while` loop, but it always executes the code block at least once, even if the condition is false. Here's the syntax:

```javascript
do {
  // code to be executed
} while (condition);
```

Example:

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

## Practical Examples

### Example 1: Finding the Maximum Number

```javascript
let numbers = [5, 2, 9, 1, 7];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("The maximum number is: " + max);
```

### Example 2: Printing Even Numbers

```javascript
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

## Exercises

1. Write a program that prints the first 10 Fibonacci numbers.
2. Write a program that prints the multiplication table of a given number.
3. Write a program that calculates the sum of all numbers from 1 to 100.
4. Write a program that prints the factorial of a given number.
5. Write a program that checks if a given number is prime.

## Additional Resources

- [MDN Web Docs: Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript.info: Control flow](https://javascript.info/control-flow)
- [W3Schools: JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)
- [W3Schools: JavaScript For Loop](https://www.w3schools.com/js/js_loop_for.asp)
- [W3Schools: JavaScript While Loop](https://www.w3schools.com/js/js_loop_while.asp)
- [W3Schools: JavaScript Do/While Loop](https://www.w3schools.com/js/js_loop_do_while.asp)