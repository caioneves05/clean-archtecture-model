import 'reflect-metadata';
import { container } from 'tsyringe';
import { CreateUserUseCase } from '../../app/useCases/user/createUsersUseCase';
import { UserController } from '../../infra/http/controllers/user.controller';
import { PrismaUserRepository } from '../../infra/database/prisma/repositories/PrismaUserRepository';

container.register('CreateUserUseCase', { useClass: CreateUserUseCase });
container.register('UserRepository', { useClass: PrismaUserRepository });

const userResolver = container.resolve(UserController);

export { userResolver };