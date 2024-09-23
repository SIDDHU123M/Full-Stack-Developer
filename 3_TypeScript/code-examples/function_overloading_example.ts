// function_overloading_example.ts

// Function overload declarations
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    return a + b;
}

// Usage
console.log(combine(1, 2)); // Output: 3
console.log(combine("Hello, ", "World!")); // Output: Hello, World!
console.log(combine("Number: ", 42)); // Output: Number: 42
