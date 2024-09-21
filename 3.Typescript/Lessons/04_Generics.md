# 04. Generics

## Understanding Generics

Generics in TypeScript allow us to create reusable code that can work with different types. They provide type safety and enable us to write more flexible and generic functions and classes.

To define a generic type, we use angle brackets (`<>`) and a type parameter. For example, `T` is commonly used as a type parameter:

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

In the above example, the `identity` function takes an argument of type `T` and returns the same type `T`. The type parameter `T` can be any type, and TypeScript infers the type based on the argument passed to the function.

## Creating Generic Functions

We can create generic functions that work with different types. Here's an example of a generic function that swaps the values of two variables:

```typescript
function swap<T>(a: T, b: T): void {
  let temp: T = a;
  a = b;
  b = temp;
}
```

In the above example, the `swap` function takes two arguments of type `T` and swaps their values. The type parameter `T` allows us to use the function with different types, such as numbers, strings, or custom objects.

## Using Constraints in Generics

We can use constraints to limit the types that can be used with generics. This allows us to ensure that certain properties or methods exist on the type.

For example, let's create a generic function that logs the length of an array:

```typescript
function logArrayLength<T extends Array<any>>(arr: T): void {
  console.log(arr.length);
}
```

In the above example, the type parameter `T` is constrained to be an array (`extends Array<any>`). This ensures that the `length` property exists on the type `T`.

## Practical Examples

### Example 1: Generic Stack

Let's create a generic stack data structure that can work with different types:

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
```

In the above example, the `Stack` class is defined with a type parameter `T`. This allows us to create a stack of any type. We can push items of type `T` onto the stack, pop items from the stack, and check if the stack is empty.

### Example 2: Generic Function with Constraints

Let's create a generic function that finds the maximum value in an array of numbers:

```typescript
function findMax<T extends number>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }

  let max: T = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
```

In the above example, the `findMax` function takes an array of numbers (`T extends number`) and returns the maximum value. The type parameter `T` is constrained to be a number, ensuring that the function can only be used with number arrays.

## Exercises

1. Create a generic function that finds the minimum value in an array of numbers.
2. Implement a generic queue data structure that can work with different types.
3. Write a generic function that merges two arrays of the same type into a single array.
4. Create a generic function that filters an array based on a given condition.

Remember to test your code with different types and edge cases.

This file intentionally left blank.