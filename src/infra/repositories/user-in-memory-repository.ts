import { UpdateUserRepositoryDTO } from "../../domain/dtos/user/UpdateUserRepositoryDTO";
import { type User } from "../../domain/entitis/task/User";
import { type UserRepository } from "../../domain/repositories/UserRepository";

export class UserInMemory implements UserRepository {
    public users: User[] = [];
    async create(user: User): Promise<User> {
        await this.users.push(user);

        return user;
    }

    async update({
        id,
        fullname,
        email,
        role
    }: UpdateUserRepositoryDTO): Promise<User> {
        const userIndex = this.users.findIndex(user => user.id === id);
    
        if (userIndex !== -1) {
            const user = this.users[userIndex];
    
            if (fullname !== undefined) {
                user.fullname = fullname;
            }
    
            if (email !== undefined) {
                user.email = email;
            }
    
            if (role !== undefined) {
                user.role = role;
            }
    
            return user;
        } else {
            throw new Error(`User not found`);
        }
    }

    async delete(id: string): Promise<User> {
        const user = this.users.findIndex(user => user.id === id);

        if (user === -1) {
            throw new Error(`User with ID not found`);
        }

        const deletedUser = this.users.splice(user, 1)[0];

         return deletedUser;
    }

}