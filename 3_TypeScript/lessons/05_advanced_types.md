# Advanced Types

This lesson covers advanced types in TypeScript.

## Type Guards

Type guards are a way to narrow down the type of a variable within a conditional block. They are useful when working with union types or when you want to perform different operations based on the type of a variable.

Here's an example of using a type guard with a union type:

```typescript
function printLength(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.length);
  } else {
    console.log('Value is not a string');
  }
}
```

In this example, the `typeof` operator is used to check if the type of `value` is `'string'`. If it is, the length of the string is printed. Otherwise, a message is logged indicating that the value is not a string.

## Discriminated Unions

Discriminated unions are a way to create a union type where each member has a common property, called a discriminant. This discriminant can be used to determine the specific type of a value in the union.

Here's an example of using a discriminated union:

```typescript
interface Square {
  kind: 'square';
  size: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Circle;

function calculateArea(shape: Shape) {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size;
    case 'circle':
      return Math.PI * shape.radius * shape.radius;
  }
}
```

In this example, the `kind` property is used as the discriminant. The `calculateArea` function uses a switch statement to determine the specific type of the `shape` parameter based on its `kind` property. This allows for type-safe operations within each case block.

## Conditional Types

Conditional types are a way to create types that depend on a condition. They are useful when you want to create a type that varies based on the type of another value.

Here's an example of using a conditional type:

```typescript
type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  'unknown';

type StringTypeName = TypeName<string>; // 'string'
type NumberTypeName = TypeName<number>; // 'number'
type BooleanTypeName = TypeName<boolean>; // 'boolean'
type UnknownTypeName = TypeName<unknown>; // 'unknown'
```

In this example, the `TypeName` type takes a generic parameter `T` and uses conditional statements to determine the corresponding type name. The resulting type can be assigned to a new type variable, such as `StringTypeName`, `NumberTypeName`, etc.

## Intersection Types

Intersection types allow you to combine multiple types into a single type. The resulting type will have all the properties and methods from each individual type.

Here's an example of using intersection types:

```typescript
interface Printable {
  print(): void;
}

interface Loggable {
  log(): void;
}

type Logger = Printable & Loggable;

class ConsoleLogger implements Logger {
  print() {
    console.log('Printing...');
  }

  log() {
    console.log('Logging...');
  }
}
```

In this example, the `Printable` and `Loggable` interfaces define separate behaviors. The `Logger` type is created by combining these two interfaces using the intersection operator `&`. The `ConsoleLogger` class implements the `Logger` type, which means it must have both the `print` and `log` methods.

## Conclusion

Advanced types in TypeScript provide powerful features for working with complex data structures and creating type-safe code. Type guards, discriminated unions, conditional types, and intersection types are just a few examples of how TypeScript allows you to express more precise types and catch potential errors at compile-time.
```

Please note that the file is intentionally left blank as per your request.