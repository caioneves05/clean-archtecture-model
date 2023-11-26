import express, { Router, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { type CreateUserUseCase } from '../../../app/useCases/user/createUsersUseCase';
import { CreateUserRequestDTO, DeleteUserRequestDTO } from '../dtos/UserRequestDTO';
import { DeleteUserUseCase } from '../../../app/useCases/user/deleteUserUseCase';

@injectable()
class UserController {
    public readonly router: Router = express.Router();

    constructor(
        @inject('CreateUserUseCase') readonly createUserUseCase: CreateUserUseCase,
        @inject('DeleteUserUseCase') readonly deleteUserUseCase: DeleteUserUseCase
    ) {
        this.router.use(express.json());
        this.router.post('', this.createUser);
        this.router.delete('/:id', this.deleteUser);
    }

    createUser = async (req: Request, res: Response) => {
        try {
            const userRequestDTO: CreateUserRequestDTO = {
                fullname: req.body.fullname,
                document: req.body.document,
                email: req.body.email,
                role: req.body.role
            };
            const createUserUseCase = await this.createUserUseCase.execute(userRequestDTO);

            return res.json(createUserUseCase);
        } catch(error) {
            return res.status(500).json({error: 'Internal server error'});
        }
    };

    deleteUser = async (req: Request, res: Response) => {        
        try {
            const userRequestDTO: DeleteUserRequestDTO = {
                id: req.params.id
            };
            const deleteUserUseCase = await this.deleteUserUseCase.execute(userRequestDTO);

            return res.json(deleteUserUseCase);
        } catch(error) {
            return res.status(500).json({error: 'Internal server error'});
        }
    };
}

export { UserController };