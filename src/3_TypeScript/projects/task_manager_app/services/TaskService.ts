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
