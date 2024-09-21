# Advanced Types in TypeScript

In TypeScript, there are several advanced types that can be used to enhance type safety and provide more flexibility in your code. These advanced types include intersection types, union types, type guards, type aliases, mapped types, and conditional types.

## Intersection Types

Intersection types allow you to combine multiple types into a single type. You can use the `&` operator to create an intersection type. For example:

```typescript
type Person = {
  name: string;
};

type Employee = {
  id: number;
};

type Manager = Person & Employee;

const manager: Manager = {
  name: "John Doe",
  id: 1234,
};
```

In this example, the `Manager` type is an intersection of the `Person` and `Employee` types, meaning it has all the properties of both types.

## Union Types

Union types allow a value to have multiple possible types. You can use the `|` operator to create a union type. For example:

```typescript
type Status = "success" | "error" | "loading";

function getStatusMessage(status: Status): string {
  switch (status) {
    case "success":
      return "Operation successful";
    case "error":
      return "An error occurred";
    case "loading":
      return "Loading...";
  }
}
```

In this example, the `Status` type is a union of the string literals "success", "error", and "loading". The `getStatusMessage` function accepts a `Status` parameter and returns a corresponding message based on the status value.

## Type Guards

Type guards allow you to narrow down the type of a value within a conditional block. You can use type predicates or the `typeof` and `instanceof` operators as type guards. For example:

```typescript
function logLength(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.length);
  } else if (typeof value === "number") {
    console.log(value.toString().length);
  }
}
```

In this example, the `logLength` function accepts a parameter that can be either a string or a number. Within the conditional blocks, the type of `value` is narrowed down based on its actual type.

## Type Aliases

Type aliases allow you to create custom names for types. They can be used to simplify complex type definitions or provide more descriptive names. For example:

```typescript
type Point = {
  x: number;
  y: number;
};

type Coordinate = Point | string;

function printCoordinate(coordinate: Coordinate): void {
  if (typeof coordinate === "string") {
    console.log(coordinate);
  } else {
    console.log(`(${coordinate.x}, ${coordinate.y})`);
  }
}
```

In this example, the `Coordinate` type is an alias for either a `Point` object or a string. The `printCoordinate` function accepts a `Coordinate` parameter and prints its value accordingly.

## Mapped Types

Mapped types allow you to transform the properties of an existing type to create a new type. You can use the `keyof` operator and the `in` keyword to iterate over the properties of a type. For example:

```typescript
type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

const person: ReadonlyPerson = {
  name: "John Doe",
  age: 30,
};

person.name = "Jane Smith"; // Error: Cannot assign to 'name' because it is a read-only property
```

In this example, the `ReadonlyPerson` type is a mapped type that makes all properties of the `Person` type read-only.

## Conditional Types

Conditional types allow you to create types that depend on a condition. You can use the `extends` keyword and the `infer` keyword to define conditional types. For example:

```typescript
type IsString<T> = T extends string ? true : false;

type Result = IsString<"hello">; // true
```

In this example, the `IsString` type is a conditional type that checks if the given type `T` is a string. If it is, the type evaluates to `true`; otherwise, it evaluates to `false`.

These are just a few examples of the advanced types available in TypeScript. By leveraging these types, you can write more expressive and type-safe code in your TypeScript projects.

## Exercises

1. Create a type-safe function that checks if a value is an array and returns its length if it is.
2. Implement a conditional type that checks if a given type is an object and returns its keys as a union type.

```

This file provides an explanation of advanced types in TypeScript, including intersection types, union types, type guards, type aliases, mapped types, and conditional types. It also includes practical examples and exercises to reinforce learning.