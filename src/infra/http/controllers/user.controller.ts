import express from 'express';
import { type CreateUserUseCase } from '../../../app/useCases/user/createUsersUseCase';
import { type UserRequestDTO } from '../dtos/UserRequestDTO';

export class UserController {
    private readonly app = express();

    constructor(private readonly createUserUseCase: CreateUserUseCase) {
        this.app.use(express.json());
        this.app.post('/user', this.createUser);
    }

    createUser = async (req: UserRequestDTO) => {
        const createUserUseCase = await this.createUserUseCase.execute(req);

        return createUserUseCase;
    };
}