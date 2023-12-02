import express, { Router, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { CreateTaskUseCase } from '../../../app/useCases/task/createTaskUseCase';
import { CreateTaskRequestDTO } from '../dtos/TaskRequestDTO';


@injectable()
class TaskController {
    public readonly router: Router = express.Router();

    constructor(
        @inject('CreateTaskUseCase') readonly createTaskUseCase: CreateTaskUseCase
    ) {
        this.router.use(express.json());
        this.router.post('', this.createTask);
    }

    createTask = async (req: Request, res: Response) => {
        try {
            const taskRequest: CreateTaskRequestDTO = {
                title: req.body.title,
                description: req.body.description,
                deadline: req.body.deadline,
                responsibleId: req.body.responsibleId,
                creatorId: req.body.creatorId
            };

            const createTask = await this.createTaskUseCase.execute(taskRequest);

            return res.json(createTask);

        } catch (error) {
            return res.status(500).json({error: 'Internal server error'});
        }
    };
}

export { TaskController };