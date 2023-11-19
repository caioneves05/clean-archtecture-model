import { UserRepository } from "../../../../domain/repositories/UserRepository";
import { PrismaService } from "..";
import { User } from "../../../../domain/entitis/task/User";
import { PrismaUserMapper } from "../mappers/PrismaUserMapper";
import { injectable } from "tsyringe";

@injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prisma: PrismaService) {}
    
    async create(user: User): Promise<User> {
        const createUser = await this.prisma.user.create({
            data: PrismaUserMapper.toPrisma(user)
        });

        return PrismaUserMapper.toEntity(createUser);
    }
}