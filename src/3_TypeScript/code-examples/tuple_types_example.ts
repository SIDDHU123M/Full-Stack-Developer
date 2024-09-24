// tuple_types_example.ts

// Using tuples to define fixed-length arrays
let user: [string, number] = ["Alice", 25];

// Usage
console.log(`Name: ${user[0]}, Age: ${user[1]}`); // Output: Name: Alice, Age: 25
user = ["Bob", 30]; // Valid
// user = [30, "Bob"]; // Type error: Type 'number' is not assignable to type 'string'.
