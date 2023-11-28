import { UserRepository } from "../../../../domain/repositories/UserRepository";
import { PrismaService } from "..";
import { User } from "../../../../domain/entitis/task/User";
import { PrismaUserMapper } from "../mappers/PrismaUserMapper";
import { injectable } from "tsyringe";
import { UpdateUserRepositoryDTO } from "../../../../domain/dtos/user/UpdateUserRepositoryDTO";

@injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prisma: PrismaService) {}
    
    async create(user: User): Promise<User> {
        const createUser = await this.prisma.user.create({
            data: PrismaUserMapper.toPrisma(user)
        });

        return PrismaUserMapper.toEntity(createUser);
    }

    async delete(id: string): Promise<User> {
        const userExist = await this.prisma.user.findFirst({
            where: {
                id,
            }
        });

        if(!userExist) {
            throw new Error('User is not exist');
        }

        const deleteUser = await this.prisma.user.delete({
            where: {
                id,
            }
        });

        return PrismaUserMapper.toEntity(deleteUser);
    }

    async update(params: UpdateUserRepositoryDTO): Promise<User> {
        const userExist = await this.prisma.user.findFirst({
            where: {
                id: params.id,
            }
        });

        if(!userExist) {
            throw new Error('User is not exist');
        }

        const updateUser = await this.prisma.user.update({
            where: {
                id: params.id,
            },
            data: {
                fullname: params.fullname,
                email: params.email,
                role: params.role
            }
        });

        return PrismaUserMapper.toEntity(updateUser);
    }
}