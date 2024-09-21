# Functions and Interfaces

In this lesson, we will explore functions and interfaces in TypeScript. Functions are an essential part of any programming language, and TypeScript provides additional features to enhance their functionality. Interfaces, on the other hand, allow us to define contracts for objects and classes, ensuring that they adhere to a specific structure.

## Functions

### Function Declarations and Expressions

In TypeScript, we can define functions using function declarations or function expressions. Function declarations have a named identifier, while function expressions can be anonymous or named.

```typescript
// Function Declaration
function add(a: number, b: number): number {
  return a + b;
}

// Function Expression
const subtract = function(a: number, b: number): number {
  return a - b;
};

// Arrow Function Expression
const multiply = (a: number, b: number): number => a * b;
```

### Optional and Default Parameters

In TypeScript, we can make function parameters optional by adding a `?` after the parameter name. We can also provide default values for parameters using the `=` operator.

```typescript
function greet(name: string, age?: number): void {
  if (age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

function calculateArea(length: number, width = 10): number {
  return length * width;
}
```

### Interfaces

Interfaces in TypeScript allow us to define the structure of objects and classes. They provide a way to enforce a specific shape or contract for a particular type.

```typescript
interface Person {
  name: string;
  age: number;
  greet: (name: string) => void;
}

const person: Person = {
  name: "John",
  age: 30,
  greet(name: string) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  },
};
```

### Implementing Interfaces in Classes

We can implement interfaces in classes to ensure that the class adheres to the structure defined by the interface. This helps in maintaining consistency and enforcing contracts.

```typescript
interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  calculateArea(): number {
    return this.width * this.height;
  }
}
```

### Extending Interfaces

Interfaces can also be extended to inherit properties and methods from other interfaces. This allows us to create more specific interfaces based on existing ones.

```typescript
interface Animal {
  name: string;
  eat(): void;
}

interface Dog extends Animal {
  bark(): void;
}

const dog: Dog = {
  name: "Buddy",
  eat() {
    console.log("Eating...");
  },
  bark() {
    console.log("Woof!");
  },
};
```

## Practical Examples

### Example 1: Calculating the Area

Let's create a function that calculates the area of a rectangle given its length and width.

```typescript
function calculateArea(length: number, width: number): number {
  return length * width;
}

const length = 10;
const width = 5;
const area = calculateArea(length, width);

console.log(`The area of the rectangle is ${area}.`);
```

### Example 2: Greeting a Person

Let's create a function that greets a person by their name and age.

```typescript
function greetPerson(name: string, age?: number): void {
  if (age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greetPerson("John");
greetPerson("Jane", 25);
```

### Example 3: Implementing an Interface

Let's implement an interface for a rectangle shape and calculate its area.

```typescript
interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  calculateArea(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 5);
const area = rectangle.calculateArea();

console.log(`The area of the rectangle is ${area}.`);
```

## Exercises

1. Create a function that takes an array of numbers and returns the sum of all the numbers.

2. Implement an interface for a Circle shape that includes a method to calculate its circumference.

3. Create a class that implements the Circle interface and calculates the circumference of a circle given its radius.

4. Create a function that takes an object with a `name` property and a `greet` method, and invokes the `greet` method with the name as an argument.

Feel free to experiment with different scenarios and explore more features of functions and interfaces in TypeScript.

Remember to test your code and ensure that it produces the expected results.

This file is intentionally left blank.