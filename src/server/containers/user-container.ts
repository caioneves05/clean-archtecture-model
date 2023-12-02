import 'reflect-metadata';
import { container } from 'tsyringe';
import { CreateUserUseCase } from '../../app/useCases/user/CreateUsersUseCase';
import { UserController } from '../../infra/http/controllers/user.controller';
import { PrismaUserRepository } from '../../infra/database/prisma/repositories/PrismaUserRepository';
import { DeleteUserUseCase } from '../../app/useCases/user/DeleteUserUseCase';
import { UpdateUserUseCase } from '../../app/useCases/user/UpdateUsersUseCase';

container.register('CreateUserUseCase', { useClass: CreateUserUseCase });
container.register('DeleteUserUseCase', { useClass: DeleteUserUseCase });
container.register('UpdateUserUseCase', { useClass: UpdateUserUseCase });
container.register('UserRepository', { useClass: PrismaUserRepository });

const userResolver = container.resolve(UserController);


export { userResolver };