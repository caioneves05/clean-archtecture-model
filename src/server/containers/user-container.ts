import 'reflect-metadata';
import { container } from 'tsyringe';
import { CreateUserUseCase } from '../../app/useCases/user/createUsersUseCase';
import { UserController } from '../../infra/http/controllers/user.controller';

container.register('CreateUserUseCase', { useClass: CreateUserUseCase });
// import ORM class here

const userResolver = container.resolve(UserController);

export { userResolver };