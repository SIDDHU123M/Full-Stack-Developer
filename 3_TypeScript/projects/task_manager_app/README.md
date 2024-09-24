### Project Structure

```
└── projects
    └── task_manager_app
        ├── README.md
        ├── index.ts
        ├── models
        │   ├── Task.ts
        │   └── User.ts
        ├── services
        │   ├── TaskService.ts
        │   └── UserService.ts
        ├── utils
        │   └── dateHelpers.ts
        └── interfaces
            ├── ITask.ts
            └── IUser.ts
```

### 1. `index.ts`

```typescript
// index.ts

import { TaskService } from './services/TaskService';
import { UserService } from './services/UserService';

// Initialize services
const taskService = new TaskService();
const userService = new UserService();

// Sample data
const user = userService.createUser('Alice', 'alice@example.com');
const task1 = taskService.createTask('Complete project documentation', '2024-09-30', user.id);
const task2 = taskService.createTask('Prepare presentation', '2024-10-05', user.id);

// Display user and tasks
console.log('User:', user);
console.log('Tasks:', taskService.getTasks());
```

### 2. `models/Task.ts`

```typescript
// models/Task.ts

export class Task {
    constructor(
        public id: number,
        public title: string,
        public dueDate: string,
        public userId: number,
        public completed: boolean = false
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

### 4. `services/TaskService.ts`

```typescript
// services/TaskService.ts

import { Task } from '../models/Task';

export class TaskService {
    private tasks: Task[] = [];
    private idCounter: number = 1;

    createTask(title: string, dueDate: string, userId: number): Task {
        const newTask = new Task(this.idCounter++, title, dueDate, userId);
        this.tasks.push(newTask);
        return newTask;
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    completeTask(taskId: number): void {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
        }
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

### 6. `utils/dateHelpers.ts`

```typescript
// utils/dateHelpers.ts

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString();
}
```

### 7. `interfaces/ITask.ts`

```typescript
// interfaces/ITask.ts

export interface ITask {
    id: number;
    title: string;
    dueDate: string;
    userId: number;
    completed: boolean;
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

# Task Manager App Project

## Overview
The **Task Manager App** project is a TypeScript application that demonstrates advanced programming concepts such as classes, interfaces, and services. This application allows users to create and manage tasks, making it an ideal example of a simple task management system.

## Learning Objectives
By completing this project, you will:
- Understand how to create and manage classes for user and task entities.
- Utilize interfaces to define the structure of objects.
- Implement service classes to handle business logic and data management.
- Gain experience with utility functions for common operations, such as formatting dates.

## Project Structure
The project includes the following files:
- **index.ts**: The entry point of the application, where services are initialized and sample data is created.
- **models/**: Contains the `Task` and `User` classes that define the entities.
- **services/**: Contains `TaskService` and `UserService` classes responsible for managing tasks and users.
- **utils/**: Contains utility functions such as date formatting.
- **interfaces/**: Contains interfaces defining the structure of `Task` and `User` objects.

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
   cd task_manager_app
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

- **Classes**: The `Task` and `User` classes encapsulate the properties and methods related to tasks and users, promoting object-oriented programming principles.

- **Interfaces**: The `ITask` and `IUser` interfaces define the structure of task and user objects, ensuring type safety and clarity in the code.

- **Services**: The `TaskService` and `UserService` classes handle the creation and management of tasks and users, separating business logic from the main application flow.

- **Utility Functions**: The `dateHelpers.ts` file contains utility functions like `formatDate`, demonstrating how to create reusable functions that can be used throughout the application.

## Summary
The **Task Manager App** project illustrates advanced TypeScript concepts by implementing a task management system with user and task management functionalities. This project not only reinforces your understanding of TypeScript but also enhances your skills in creating organized, modular, and maintainable code.

## Suggested Next Steps
- Expand the project by implementing features such as task deadlines, reminders, or integrating with a backend API for data storage.

## Useful Resources
- [TypeScript Handbook - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces)

## Navigation
- Go back to the [Projects Overview](../README.md) for a complete list of projects.
