import { type User } from "../entitis/task/User";

export abstract class UserRepository {
    abstract create(user: User): Promise<User>;
    abstract delete(id: string): Promise<User>;
}