# Functions in TypeScript

## Introduction

Functions are an essential part of any programming language, including TypeScript. They allow you to encapsulate a block of code that can be executed multiple times with different inputs. In this lesson, we will explore the basics of functions in TypeScript and learn how to define and use them effectively.

## Defining Functions

In TypeScript, you can define functions using the `function` keyword followed by the function name, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces. Here's an example of a simple function that adds two numbers:

```typescript
function addNumbers(a: number, b: number): number {
  return a + b;
}
```

In the above example, the function `addNumbers` takes two parameters `a` and `b`, both of type `number`, and returns their sum, which is also of type `number`. The return type is specified after the parameter list using the colon (`:`) notation.

## Calling Functions

Once a function is defined, you can call it by using its name followed by parentheses containing the arguments. Here's an example of calling the `addNumbers` function:

```typescript
const result = addNumbers(5, 10);
console.log(result); // Output: 15
```

In the above example, we call the `addNumbers` function with arguments `5` and `10`, and store the result in a variable `result`. We then log the result to the console, which will output `15`.

## Optional Parameters

In TypeScript, you can make function parameters optional by adding a question mark (`?`) after the parameter name. Optional parameters allow you to provide default values or omit them altogether when calling the function. Here's an example:

```typescript
function greet(name?: string): void {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello, stranger!");
  }
}
```

In the above example, the `greet` function has an optional parameter `name` of type `string`. If a value is provided for `name`, it will be used in the greeting message. Otherwise, the function will greet the user as a stranger.

## Rest Parameters

Rest parameters allow you to pass an arbitrary number of arguments to a function. They are denoted by three dots (`...`) followed by the parameter name. The rest parameters are treated as an array within the function. Here's an example:

```typescript
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}
```

In the above example, the `sumNumbers` function takes any number of arguments and returns their sum. The rest parameter `numbers` is an array of numbers, which we can use the `reduce` method to calculate the sum.

## Conclusion

Functions are a fundamental building block of any programming language, and TypeScript is no exception. In this lesson, we learned how to define and call functions in TypeScript, as well as how to use optional parameters and rest parameters. With this knowledge, you can start writing reusable and modular code using functions in TypeScript.

Next, we will explore advanced types in TypeScript. Stay tuned!
```

Please note that the file is intentionally left blank as per your request.