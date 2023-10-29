import { User } from "../../domain/entitis/task/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class UserInMemory implements UserRepository {
    items: User[] = []
    async create(user: User): Promise<void> {
        await this.items.push(user)
    }

}