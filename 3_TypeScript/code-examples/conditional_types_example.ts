// conditional_types_example.ts

// Conditional types to create dynamic types based on conditions
type IsString<T> = T extends string ? "Yes" : "No";

type Result1 = IsString<string>; // "Yes"
type Result2 = IsString<number>; // "No"

// Usage
console.log(Result1); // Output: Yes
console.log(Result2); // Output: No
