import { type User } from "../../domain/entitis/task/User";
import { type UserRepository } from "../../domain/repositories/UserRepository";

export class UserInMemory implements UserRepository {
    items: User[] = [];
    async create(user: User): Promise<User> {
        await this.items.push(user);

        return user;
    }

}