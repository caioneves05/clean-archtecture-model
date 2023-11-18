import express, { Router, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { type CreateUserUseCase } from '../../../app/useCases/user/createUsersUseCase';
import { type UserRequestDTO } from '../dtos/UserRequestDTO';

@injectable()
class UserController {
    public readonly router: Router = express.Router();

    constructor(@inject('CreateUserUseCase') readonly createUserUseCase: CreateUserUseCase) {
        this.router.use(express.json());
        this.router.post('', this.createUser);
    }

    createUser = async (req: Request, res: Response) => {
    try {
        const userResquestDTO: UserRequestDTO = {
            fullname: req.body.fullname,
            document: req.body.document,
            email: req.body.email,
            role: req.body.role
        };
        const createUserUseCase = await this.createUserUseCase.execute(userResquestDTO);

        return res.json(createUserUseCase);
    } catch(error) {
        return res.status(500).json({error: 'Internal server error'});
    }
    };
}

export { UserController };