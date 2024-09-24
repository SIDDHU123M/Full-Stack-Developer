// utility_types_example.ts

// Using utility types for common type transformations
type User = {
    id: number;
    name: string;
    email: string;
};

// Partial utility type example
type PartialUser = Partial<User>;

const user: PartialUser = {
    name: "Alice",
};

// Usage
console.log(user);
// const user2: PartialUser = { id: 1 }; // Valid, but missing the 'name' field.
