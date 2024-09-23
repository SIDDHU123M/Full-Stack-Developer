# Advanced Types in TypeScript

## Overview
This lesson covers advanced type concepts in TypeScript, which are essential for creating flexible, reusable, and type-safe code. Advanced types enhance your ability to work with complex data structures, enabling you to build more robust applications while leveraging TypeScript's static type-checking features.

## Learning Objectives
By the end of this lesson, you will be able to:
- Utilize advanced types such as union, intersection, and tuple types effectively.
- Implement type guards to enhance type safety during runtime.
- Utilize conditional types to create dynamic types based on conditions.
- Understand and apply mapped types to transform existing types.
- Leverage utility types for common type transformations and enhancements.

## Key Concepts

### 1. Union Types
Union types allow a variable to hold multiple types, providing flexibility in function parameters and return values. This is particularly useful when you want a function to accept different data types without sacrificing type safety.

- **Syntax**:
```typescript
type TypeName = Type1 | Type2 | Type3;
```
- **Example**:
```typescript
function logId(id: number | string): void {
    console.log(`ID: ${id}`);
}

logId(101); // Output: ID: 101
logId("A123"); // Output: ID: A123
```
- **Use Case**: Union types are commonly used in APIs where a parameter might be either a string or a number, such as identifiers.

### 2. Intersection Types
Intersection types combine multiple types into one, enabling you to create a new type that inherits properties and methods from several types. This allows for the creation of more complex data structures.

- **Syntax**:
```typescript
type TypeName = Type1 & Type2;
```
- **Example**:
```typescript
interface User {
    name: string;
    age: number;
}

interface Admin {
    role: string;
}

type AdminUser = User & Admin;

const adminUser: AdminUser = {
    name: "Alice",
    age: 30,
    role: "Administrator"
};
```
- **Use Case**: Intersection types are useful for creating objects that need to satisfy multiple interfaces, such as combining user roles and their properties.

### 3. Tuple Types
Tuple types allow you to define arrays with a fixed number of elements, where each element can have a different type. This is particularly beneficial for working with structured data.

- **Syntax**:
```typescript
let tuple: [Type1, Type2, Type3];
```
- **Example**:
```typescript
let point: [number, number] = [10, 20];
console.log(`X: ${point[0]}, Y: ${point[1]}`); // Output: X: 10, Y: 20
```
- **Use Case**: Tuples are often used for functions that return multiple values, such as a coordinate pair or a response that contains a status and data.

### 4. Type Guards
Type guards are constructs that allow TypeScript to narrow down the type of a variable during runtime, enhancing type safety. You can create user-defined type guards to check the type of a variable before performing operations on it.

- **Example**:
```typescript
function isString(value: any): value is string {
    return typeof value === "string";
}

function log(value: number | string): void {
    if (isString(value)) {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

log("Hello"); // Output: String value: Hello
log(42); // Output: Number value: 42
```
- **Use Case**: Type guards are particularly useful in situations where you need to differentiate between types before executing operations, such as handling different types of user input.

### 5. Conditional Types
Conditional types enable the creation of types that depend on a condition. This feature is powerful for creating dynamic types based on certain criteria, making your code more adaptable.

- **Syntax**:
```typescript
T extends U ? X : Y
```
- **Example**:
```typescript
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // Output: "Yes"
type Test2 = IsString<number>; // Output: "No"
```
- **Use Case**: Conditional types are useful in library development where you want to provide different type behaviors based on input types.

### 6. Mapped Types
Mapped types enable the transformation of properties of existing types, allowing you to create new types based on existing ones. This is useful for creating variations of types while maintaining their structure.

- **Example**:
```typescript
type Person = {
    name: string;
    age: number;
};

type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
};

type ReadOnlyPerson = ReadOnly<Person>;

const readOnlyPerson: ReadOnlyPerson = {
    name: "Bob",
    age: 25
};

// readOnlyPerson.age = 26; // Error: Cannot assign to 'age' because it is a read-only property
```
- **Use Case**: Mapped types are commonly used in scenarios where you need to create variations of existing types, such as creating read-only versions of data models.

### 7. Utility Types
TypeScript provides several built-in utility types that simplify common type manipulations, making your code cleaner and more maintainable. Some of the most commonly used utility types include:

- **Partial**: Makes all properties of a type optional.
- **Required**: Makes all properties of a type required.
- **Readonly**: Makes all properties of a type read-only.
- **Record**: Creates a type with specified keys and values.

- **Example**:
```typescript
interface User {
    id: number;
    name: string;
    email?: string;
}

type PartialUser = Partial<User>;

const user: PartialUser = {
    id: 1,
    // name and email are optional
};

type UserRecord = Record<string, User>;

const users: UserRecord = {
    user1: { id: 1, name: "Alice" },
    user2: { id: 2, name: "Bob" }
};
```
- **Use Case**: Utility types streamline type handling in applications, especially when dealing with complex data structures or transforming existing models.

## Summary
In this lesson, we explored advanced types in TypeScript, including union, intersection, and tuple types. We covered type guards, conditional types, mapped types, and utility types. Mastering these concepts is crucial for writing flexible and type-safe code, enabling you to handle complex data structures and build maintainable applications.

## Suggested Next Steps
- Proceed to the next lesson: [Advanced Functions in TypeScript](06_advanced_functions_in_typescript.md) to learn about higher-order functions, callbacks, and function overloading, which are essential for building complex applications.

## Useful Resources
- [TypeScript Handbook - Advanced Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [TypeScript Deep Dive - Advanced Types](https://basarat.gitbook.io/typescript/main-1/advanced-types)
- [MDN Web Docs - TypeScript](https://developer.mozilla.org/en-US/docs/Learn/TypeScript)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Effective TypeScript: 62 Specific Ways to Improve Your TypeScript](https://effective-typescript.readthedocs.io/en/latest/) - This book provides additional insights and best practices for using TypeScript effectively.

## Navigation
- Go back to the [TypeScript Chapter](../README.md) for a complete overview of the course structure. 