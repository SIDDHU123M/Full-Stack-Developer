// higher_order_functions_example.ts

// A higher-order function that takes another function as an argument
function higherOrderFunction(fn: (x: number) => number, value: number): number {
    return fn(value);
}

// Function to double a number
const double = (x: number): number => x * 2;

// Usage
console.log(higherOrderFunction(double, 5)); // Output: 10
console.log(higherOrderFunction(double, 7)); // Output: 14
console.log(higherOrderFunction(double, 0)); // Output: 0
