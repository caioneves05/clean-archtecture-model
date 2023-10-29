import { User } from "../entitis/task/User";

export abstract class UserRepository {
    abstract create(user: User): Promise<void>
}