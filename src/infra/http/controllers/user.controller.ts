import express, { Router, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { CreateUserRequestDTO, DeleteUserRequestDTO, UpdateUserRequestDTO } from '../dtos/UserRequestDTO';
import { type CreateUserUseCase } from '../../../app/useCases/user/CreateUsersUseCase';
import { DeleteUserUseCase } from '../../../app/useCases/user/DeleteUserUseCase';
import { UpdateUserUseCase } from '../../../app/useCases/user/UpdateUsersUseCase';


@injectable()
class UserController {
    public readonly router: Router = express.Router();

    constructor(
        @inject('CreateUserUseCase') readonly createUserUseCase: CreateUserUseCase,
        @inject('DeleteUserUseCase') readonly deleteUserUseCase: DeleteUserUseCase,
        @inject('UpdateUserUseCase') readonly updateUserUseCase: UpdateUserUseCase,
    ) {
        this.router.use(express.json());
        this.router.post('', this.createUser);
        this.router.patch('/:id', this.updateUser);
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

    updateUser = async (req: Request, res: Response) => {        
        try {
            const userRequestDTO: UpdateUserRequestDTO = {
                id: req.params.id,
                email: req.body.email,
                fullname: req.body.fullname,
                role: req.body.role
            };
            const updateUserUseCase = await this.updateUserUseCase.execute(userRequestDTO);

            return res.json(updateUserUseCase);
        } catch(error) {
            return res.status(500).json({error: 'Internal server error'});
        }
    };
}

export { UserController };