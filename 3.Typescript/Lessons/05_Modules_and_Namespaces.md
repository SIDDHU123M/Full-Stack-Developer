# Modules and Namespaces

In TypeScript, modules and namespaces provide a way to organize and encapsulate code. They help in creating modular and reusable code structures. In this lesson, we will explore how to work with modules and namespaces in TypeScript.

## Modules

Modules in TypeScript are similar to modules in other programming languages. They allow you to organize code into separate files and provide a way to control the visibility and accessibility of code elements. TypeScript supports both ES6 modules and the older TypeScript module syntax.

### Importing and Exporting Modules

To use code from one module in another module, you need to import and export the necessary code elements. Let's see how to do this.

#### Exporting

To export a code element (variable, function, class, etc.) from a module, you can use the `export` keyword. Here's an example:

```typescript
// math.ts
export const PI = 3.14;

export function calculateArea(radius: number): number {
  return PI * radius * radius;
}
```

In the above example, we export a constant `PI` and a function `calculateArea` from the `math` module.

#### Importing

To use the exported code elements from another module, you need to import them. Here's an example:

```typescript
// main.ts
import { PI, calculateArea } from './math';

console.log(PI); // Output: 3.14
console.log(calculateArea(5)); // Output: 78.5
```

In the above example, we import the `PI` constant and the `calculateArea` function from the `math` module using the `import` statement. We can then use them in our `main.ts` module.

### Default Exports

In addition to named exports, TypeScript also supports default exports. A module can have at most one default export. Default exports are useful when you want to export a single value or a class from a module. Here's an example:

```typescript
// logger.ts
export default class Logger {
  log(message: string): void {
    console.log(message);
  }
}
```

In the above example, we export the `Logger` class as the default export from the `logger` module. To import the default export, you can use any name you like:

```typescript
// main.ts
import MyLogger from './logger';

const logger = new MyLogger();
logger.log('Hello, world!'); // Output: Hello, world!
```

In the above example, we import the default export from the `logger` module and create an instance of the `Logger` class.

### Namespace

Namespaces in TypeScript provide a way to group related code elements under a single namespace. They help in avoiding naming conflicts and organizing code. Here's an example:

```typescript
// shapes.ts
namespace Shapes {
  export class Circle {
    constructor(public radius: number) {}

    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  export class Rectangle {
    constructor(public width: number, public height: number) {}

    calculateArea(): number {
      return this.width * this.height;
    }
  }
}
```

In the above example, we define a namespace `Shapes` and export two classes `Circle` and `Rectangle` under that namespace. To use these classes, we need to reference the namespace:

```typescript
// main.ts
/// <reference path="./shapes.ts" />

const circle = new Shapes.Circle(5);
console.log(circle.calculateArea()); // Output: 78.5

const rectangle = new Shapes.Rectangle(10, 20);
console.log(rectangle.calculateArea()); // Output: 200
```

In the above example, we reference the `shapes.ts` file using the `/// <reference path="..." />` directive. This allows us to use the classes from the `Shapes` namespace.

## Exercises

1. Create a module named `utils` and export a function named `capitalize` that takes a string as input and returns the capitalized version of the string.

2. Import the `capitalize` function from the `utils` module in your `main.ts` file and use it to capitalize a few strings.

3. Create a module named `geometry` and export a class named `Triangle` that takes the lengths of its three sides as input and has a method named `calculateArea` that calculates and returns the area of the triangle.

4. Import the `Triangle` class from the `geometry` module in your `main.ts` file and create an instance of the `Triangle` class with some side lengths. Call the `calculateArea` method and log the result.

Remember to test your code and experiment with different inputs to ensure it works as expected.

This concludes the lesson on modules and namespaces in TypeScript. Modules and namespaces are powerful tools for organizing and encapsulating code in TypeScript projects. They help in creating modular and reusable code structures.