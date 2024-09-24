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
