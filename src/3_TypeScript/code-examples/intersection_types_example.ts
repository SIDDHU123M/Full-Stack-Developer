// intersection_types_example.ts

// Defining types using intersection
type User = {
    name: string;
    email: string;
};

type Admin = {
    role: string;
};

type AdminUser = User & Admin;

const admin: AdminUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
};

// Usage
console.log(admin);
