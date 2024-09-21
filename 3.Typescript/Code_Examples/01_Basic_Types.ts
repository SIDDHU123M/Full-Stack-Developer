// Basic Types
let name: string = "John";
let age: number = 30;
let isStudent: boolean = true;
let hobbies: string[] = ["reading", "coding", "gaming"];
let tuple: [string, number] = ["John", 30];
let anyType: any = "Hello";
let unknownType: unknown = 10;

// Type Annotations
let greeting: string;
greeting = "Hello, TypeScript!";

// Type Inference
let message = "TypeScript is awesome!";

// Function Return Type
function add(a: number, b: number): number {
  return a + b;
}

// Void Type
function logMessage(message: string): void {
  console.log(message);
}

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Never Type
function throwError(): never {
  throw new Error("Something went wrong");
}

// Union Types
let id: string | number = "12345";
id = 12345;

// Type Aliases
type Point = {
  x: number;
  y: number;
};

let point: Point = {
  x: 10,
  y: 20,
};

// Enums
enum Color {
  Red,
  Green,
  Blue,
}

let favoriteColor: Color = Color.Blue;

// Type Assertions
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

// Intentionally left blank