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
