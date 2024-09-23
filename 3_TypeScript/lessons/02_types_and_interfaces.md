# Types and Interfaces

This lesson covers the concept of types and interfaces in TypeScript.

## Types

Types in TypeScript allow you to specify the data type of a variable. TypeScript provides several built-in types such as `number`, `string`, `boolean`, `object`, and `array`. You can also create custom types using the `type` keyword.

Here's an example of using types in TypeScript:

```typescript
// Using built-in types
let age: number = 25;
let name: string = "John Doe";
let isStudent: boolean = true;

// Using custom types
type Point = {
  x: number;
  y: number;
};

let point: Point = {
  x: 10,
  y: 20
};
```

## Interfaces

Interfaces in TypeScript define the structure of an object. They specify the properties and their types that an object must have. Interfaces can also be used to define function types.

Here's an example of using interfaces in TypeScript:

```typescript
interface Person {
  name: string;
  age: number;
  sayHello: () => void;
}

let person: Person = {
  name: "John Doe",
  age: 25,
  sayHello: () => {
    console.log("Hello!");
  }
};
```

Interfaces can also be extended to create new interfaces that inherit the properties and methods of existing interfaces.

```typescript
interface Employee extends Person {
  employeeId: number;
}

let employee: Employee = {
  name: "John Doe",
  age: 25,
  sayHello: () => {
    console.log("Hello!");
  },
  employeeId: 12345
};
```

## Summary

In this lesson, you learned about types and interfaces in TypeScript. Types allow you to specify the data type of a variable, while interfaces define the structure of an object. Understanding types and interfaces is essential for writing type-safe and maintainable code in TypeScript.
```

Please note that the file is intentionally left blank as per your request.