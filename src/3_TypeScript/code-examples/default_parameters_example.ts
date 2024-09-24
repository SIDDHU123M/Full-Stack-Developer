// default_parameters_example.ts

// Function with a default parameter value
function greet(name: string, age: number = 18): string {
    return `Hello, ${name}. You are ${age} years old!`;
}

// Usage
console.log(greet("Alice")); // Output: Hello, Alice. You are 18 years old!
console.log(greet("Bob", 30)); // Output: Hello, Bob. You are 30 years old!
console.log(greet("Charlie", 25)); // Output: Hello, Charlie. You are 25 years old!
