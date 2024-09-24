# Functions in TypeScript

## Overview
Functions are one of the core building blocks in TypeScript, enabling developers to create reusable and organized code. This lesson will provide an in-depth look at defining and using functions, exploring parameters, return types, and more advanced concepts like higher-order functions and overloads. Mastering functions will enhance your ability to write efficient and maintainable TypeScript applications.

## Learning Objectives
By the end of this lesson, you will be able to:
- Define, call, and organize functions in TypeScript.
- Understand and implement various types of function parameters and return types.
- Explore advanced concepts such as higher-order functions, function overloading, and callback functions.

## Key Concepts

### 1. Defining Functions
Functions in TypeScript are defined using the `function` keyword, followed by the function name, parameters, and an optional return type.

- **Syntax**:
    ```typescript
    function functionName(parameterName: type): returnType {
        // function body
    }
    ```

- **Example**:
    ```typescript
    function add(a: number, b: number): number {
        return a + b;
    }

    const sum = add(5, 10);
    console.log(sum); // Output: 15
    ```

### 2. Function Parameters
Parameters are values passed into functions. TypeScript allows for various parameter types, including optional parameters, default parameters, and rest parameters.

#### Optional Parameters
Optional parameters are denoted by a `?` after the parameter name. They allow for flexibility when calling functions.

- **Example**:
    ```typescript
    function greet(name: string, age?: number): string {
        if (age !== undefined) {
            return `Hello, my name is ${name} and I am ${age} years old.`;
        }
        return `Hello, my name is ${name}.`;
    }

    console.log(greet("Alice"));          // Output: Hello, my name is Alice.
    console.log(greet("Bob", 25));        // Output: Hello, my name is Bob and I am 25 years old.
    ```

#### Default Parameters
Default parameters allow you to initialize a parameter with a default value if no value or `undefined` is passed.

- **Example**:
    ```typescript
    function multiply(a: number, b: number = 1): number {
        return a * b;
    }

    console.log(multiply(5));    // Output: 5 (5 * 1)
    console.log(multiply(5, 2)); // Output: 10 (5 * 2)
    ```

#### Rest Parameters
Rest parameters allow you to represent an indefinite number of arguments as an array.

- **Example**:
    ```typescript
    function sumAll(...numbers: number[]): number {
        return numbers.reduce((sum, current) => sum + current, 0);
    }

    console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
    ```

### 3. Return Types
Defining a return type is a best practice in TypeScript as it enhances code clarity and type safety.

- **Example**:
    ```typescript
    function divide(a: number, b: number): number {
        return a / b;
    }

    const result = divide(10, 2);
    console.log(result); // Output: 5
    ```

### 4. Function Expressions
Functions can be defined as expressions and assigned to variables, providing a way to create anonymous functions.

- **Example**:
    ```typescript
    const square = function (n: number): number {
        return n * n;
    };

    console.log(square(4)); // Output: 16
    ```

### 5. Arrow Functions
Arrow functions provide a more concise syntax and lexically bind the `this` value, which can simplify your code when dealing with object methods.

- **Syntax**:
    ```typescript
    const functionName = (parameters) => {
        // function body
    };
    ```

- **Example**:
    ```typescript
    const square = (n: number): number => n * n;

    console.log(square(3)); // Output: 9
    ```

### 6. Higher-Order Functions
Higher-order functions are functions that can take other functions as arguments or return them as results. This concept is widely used in functional programming paradigms.

- **Example**:
    ```typescript
    function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
        return operation(a, b);
    }

    const resultAdd = applyOperation(5, 10, add);
    console.log(resultAdd); // Output: 15
    ```

### 7. Function Overloading
Function overloading allows you to create multiple signatures for a single function name, providing flexibility based on the argument types.

- **Example**:
    ```typescript
    function combine(input1: string, input2: string): string;
    function combine(input1: number, input2: number): number;
    function combine(input1: any, input2: any): any {
        return input1 + input2;
    }

    console.log(combine("Hello, ", "world!")); // Output: Hello, world!
    console.log(combine(5, 10));                // Output: 15
    ```

### 8. Callback Functions
Callback functions are functions passed as arguments to other functions and are invoked at a later time. They are commonly used in asynchronous programming.

- **Example**:
    ```typescript
    function fetchData(callback: (data: string) => void) {
        const data = "Fetched Data";
        callback(data);
    }

    fetchData((result) => {
        console.log(result); // Output: Fetched Data
    });
    ```

### 9. Using `this` in Functions
When using regular functions, the value of `this` can vary based on how the function is called. Arrow functions, on the other hand, inherit the `this` value from their enclosing scope.

- **Example**:
    ```typescript
    class Counter {
        count: number;

        constructor() {
            this.count = 0;
        }

        increment() {
            setTimeout(function () {
                this.count++; // `this` refers to the global object
                console.log(this.count); // Output: NaN or error
            }, 1000);
        }

        incrementWithArrow() {
            setTimeout(() => {
                this.count++; // `this` refers to the Counter instance
                console.log(this.count); // Output: 1 (after 1 second)
            }, 1000);
        }
    }

    const counter = new Counter();
    counter.increment(); // NaN
    counter.incrementWithArrow(); // 1 (after 1 second)
    ```

## Summary
In this lesson, we covered the fundamentals of functions in TypeScript, including defining functions, using parameters, specifying return types, and exploring advanced concepts like higher-order functions, function overloading, and callbacks. Mastering these concepts will empower you to write clean, efficient, and maintainable TypeScript code.

## Suggested Next Steps
- Proceed to the next lesson: [Advanced Types in TypeScript](05_advanced_types.md) to learn about more complex data types in TypeScript.

## Useful Resources
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [TypeScript Deep Dive - Functions](https://basarat.gitbook.io/typescript/main-1/functions)

## Navigation
- Go back to the [TypeScript Chapter](../README.md) for a complete overview.