### Project Structure

```
└── projects
    └── ecommerce_website
        ├── README.md
        ├── index.ts
        ├── models
        │   ├── Product.ts
        │   └── User.ts
        ├── services
        │   ├── ProductService.ts
        │   └── UserService.ts
        ├── utils
        │   └── helpers.ts
        └── interfaces
            ├── IProduct.ts
            └── IUser.ts
```

### 1. `index.ts`

```typescript
// index.ts

import { ProductService } from './services/ProductService';
import { UserService } from './services/UserService';

// Initialize services
const productService = new ProductService();
const userService = new UserService();

// Sample data
const user = userService.createUser('John Doe', 'john@example.com');
const product1 = productService.createProduct('Laptop', 999.99, 'High-performance laptop');
const product2 = productService.createProduct('Smartphone', 599.99, 'Latest model smartphone');

// Display user and products
console.log('User:', user);
console.log('Products:', productService.getProducts());
```

### 2. `models/Product.ts`

```typescript
// models/Product.ts

export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public description: string
    ) {}
}
```

### 3. `models/User.ts`

```typescript
// models/User.ts

export class User {
    constructor(
        public id: number,
        public name: string,
        public email: string
    ) {}
}
```

### 4. `services/ProductService.ts`

```typescript
// services/ProductService.ts

import { Product } from '../models/Product';

export class ProductService {
    private products: Product[] = [];
    private idCounter: number = 1;

    createProduct(name: string, price: number, description: string): Product {
        const newProduct = new Product(this.idCounter++, name, price, description);
        this.products.push(newProduct);
        return newProduct;
    }

    getProducts(): Product[] {
        return this.products;
    }
}
```

### 5. `services/UserService.ts`

```typescript
// services/UserService.ts

import { User } from '../models/User';

export class UserService {
    private users: User[] = [];
    private idCounter: number = 1;

    createUser(name: string, email: string): User {
        const newUser = new User(this.idCounter++, name, email);
        this.users.push(newUser);
        return newUser;
    }

    getUsers(): User[] {
        return this.users;
    }
}
```

### 6. `utils/helpers.ts`

```typescript
// utils/helpers.ts

export function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
}
```

### 7. `interfaces/IProduct.ts`

```typescript
// interfaces/IProduct.ts

export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
}
```

### 8. `interfaces/IUser.ts`

```typescript
// interfaces/IUser.ts

export interface IUser {
    id: number;
    name: string;
    email: string;
}
```

### 9. `README.md`

# E-commerce Website Project

## Overview
The **E-commerce Website** project is a TypeScript application designed to demonstrate advanced programming concepts such as classes, interfaces, and services. This application simulates an e-commerce platform where users can create and manage products.

## Learning Objectives
By completing this project, you will:
- Understand how to create and manage classes for user and product entities.
- Utilize interfaces to define the structure of objects.
- Implement service classes to handle business logic and data management.
- Gain experience with modular coding practices by organizing code into models, services, utilities, and interfaces.

## Project Structure
The project includes the following files:
- **index.ts**: The entry point of the application, where services are initialized and sample data is created.
- **models/**: Contains the `Product` and `User` classes that define the entities.
- **services/**: Contains `ProductService` and `UserService` classes responsible for managing products and users.
- **utils/**: Contains utility functions such as formatting currencies.
- **interfaces/**: Contains interfaces defining the structure of `Product` and `User` objects.

## Getting Started

### Prerequisites
- Ensure you have Node.js and npm installed on your machine.

### Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd ecommerce_website
   ```

3. **Install TypeScript globally:**
   ```bash
   npm install -g typescript
   ```

4. **Compile TypeScript to JavaScript:**
   ```bash
   tsc index.ts
   ```

5. **Run the application:**
   ```bash
   node index.js
   ```

### Key Concepts

- **Classes**: The `Product` and `User` classes encapsulate the properties and methods related to products and users, promoting object-oriented programming principles.

- **Interfaces**: The `IProduct` and `IUser` interfaces define the structure of product and user objects, ensuring type safety and clarity in the code.

- **Services**: The `ProductService` and `UserService` classes handle the creation and management of products and users, separating business logic from the main application flow.

- **Utility Functions**: The `helpers.ts` file contains utility functions like `formatCurrency`, demonstrating how to create reusable functions that can be used throughout the application.

## Summary
The **E-commerce Website** project illustrates advanced TypeScript concepts by implementing an e-commerce platform with user and product management functionalities. This project not only reinforces your understanding of TypeScript but also enhances your skills in creating organized, modular, and maintainable code.

## Suggested Next Steps
- Expand the project by implementing features such as product searching, user authentication, or integrating with a backend API for data storage.

## Useful Resources
- [TypeScript Handbook - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces)

## Navigation
- Go back to the [Projects Overview](../README.md) for a complete list of projects.

---

This detailed project structure and documentation for the **E-commerce Website** project should meet your requirements for advanced concepts in TypeScript. If you need further adjustments or additional projects, just let me know!