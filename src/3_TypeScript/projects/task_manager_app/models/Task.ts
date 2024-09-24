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
