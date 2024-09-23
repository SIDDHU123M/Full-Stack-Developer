// optional_parameters_example.ts

// Function with an optional parameter
function greet(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age} years old!`;
    }
    return `Hello, ${name}!`;
}

// Usage
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", 30)); // Output: Hello, Bob. You are 30 years old!
console.log(greet("Charlie", undefined)); // Output: Hello, Charlie!
