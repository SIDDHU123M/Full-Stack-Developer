# Types and Interfaces in TypeScript

## Overview
This lesson focuses on understanding types and interfaces in TypeScript, two core features that enhance type safety and code structure. Mastery of types and interfaces is essential for building robust applications that minimize runtime errors and improve maintainability.

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand the various data types available in TypeScript.
- Declare and use basic types, arrays, tuples, and enums effectively.
- Create and implement interfaces for defining the structure of objects in TypeScript.

## Key Concepts

### 1. Basic Types
TypeScript introduces a rich type system that allows developers to specify what kinds of values their variables can hold. Understanding these basic types is crucial for effective TypeScript programming.

#### Common Basic Types
- **Number**: Represents all numerical values, both integer and floating-point.
  - Example: `let score: number = 100;`

- **String**: Represents sequences of characters.
  - Example: `let greeting: string = "Hello, TypeScript!";`

- **Boolean**: Represents truth values, either `true` or `false`.
  - Example: `let isLoggedIn: boolean = false;`

- **Null and Undefined**: Special types representing absence of a value. By default, they are subtypes of all other types.
  - Example: `let emptyValue: null = null;` and `let notAssigned: undefined = undefined;`

- **Any**: A powerful escape hatch that allows for any type of value. However, its use is discouraged as it undermines type safety.
  - Example: `let randomValue: any = 42; randomValue = "Now I'm a string!";`

### 2. Arrays and Tuples
TypeScript allows for arrays and tuples, which provide additional structure to collections of data.

#### Arrays
Arrays can store multiple values of the same type. You can declare an array by appending `[]` to the type.

- **Syntax**: `typeName[]`
- Example:
```typescript
let fruits: string[] = ["Apple", "Banana", "Cherry"];
```

#### Tuples
Tuples enable you to define an array with fixed sizes and types for each element. This is useful for grouping related data.

- **Syntax**: `[type1, type2, ...]`
- Example:
```typescript
let user: [string, number] = ["Alice", 30];
```
In this example, `user` is a tuple where the first element is a `string` and the second is a `number`.

### 3. Enums
Enums provide a way to define a set of named constants, improving code readability and maintainability. They can be numeric or string-based.

#### Numeric Enums
By default, enums are numeric, starting at 0.

- Example:
```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let move: Direction = Direction.Up; // move is 0
```

#### String Enums
String enums allow for the assignment of string values to enum members.

- Example:
```typescript
enum FileExtension {
    JPG = ".jpg",
    PNG = ".png",
    GIF = ".gif",
}

let imageType: FileExtension = FileExtension.PNG; // imageType is ".png"
```

### 4. Interfaces
Interfaces are used to define the structure of an object, specifying which properties and methods it must have. They enhance code readability and facilitate better documentation of code.

#### Basic Interface Example
- **Syntax**:
```typescript
interface InterfaceName {
    property1: type;
    property2: type;
    // ...
}
```
- Example:
```typescript
interface Car {
    make: string;
    model: string;
    year: number;
}

const myCar: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
};
```

#### Optional Properties
You can mark properties as optional by using the `?` operator.

- Example:
```typescript
interface Person {
    name: string;
    age: number;
    email?: string; // Optional property
}

const user1: Person = {
    name: "Alice",
    age: 28,
};
```

#### Extending Interfaces
Interfaces can extend one another, allowing for the creation of more complex types.

- Example:
```typescript
interface Employee extends Person {
    employeeId: number;
}

const employee: Employee = {
    name: "Bob",
    age: 30,
    employeeId: 12345,
};
```

## Summary
In this lesson, we explored the core concepts of types and interfaces in TypeScript. We covered basic types, arrays, tuples, enums, and interfaces, which form the backbone of TypeScript’s type system. Mastering these concepts will help you write safer and more maintainable code.

## Suggested Next Steps
- Proceed to the next lesson: [Classes and Objects](03_classes_and_objects.md) to learn about object-oriented programming in TypeScript.

## Useful Resources
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [TypeScript GitHub Repository](https://github.com/microsoft/TypeScript)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

## Navigation
- Go back to the [TypeScript Chapter](../README.md) for a complete overview. 
