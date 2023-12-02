import express, { Router, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { CreateTaskRequestDTO, DeleteTaskRequestDTO, GetTasksByUserRequestDTO, UpdateTaskRequestDTO } from '../dtos/TaskRequestDTO';
import { GetTasksByUserUseCase } from '../../../app/useCases/task/GetTasksByUserUseCase';
import { CreateTaskUseCase } from '../../../app/useCases/task/CreateTaskUseCase';
import { DeleteTaskUseCase } from '../../../app/useCases/task/DeleteTaskUseCase';
import { UpdateTaskUseCase } from '../../../app/useCases/task/UpdateTaskUseCase';


@injectable()
class TaskController {
    public readonly router: Router = express.Router();

    constructor(
        @inject('GetTasksByUserUseCase') readonly getTasksByUserUseCase: GetTasksByUserUseCase,
        @inject('CreateTaskUseCase') readonly createTaskUseCase: CreateTaskUseCase,
        @inject('UpdateTaskUseCase') readonly updateTaskUseCase: 
        UpdateTaskUseCase,
        @inject('DeleteTaskUseCase') readonly deleteTaskUseCase: DeleteTaskUseCase
    ) {
        this.router.use(express.json());
        this.router.get('', this.getTasksByUser);
        this.router.post('', this.createTask);
        this.router.delete('', this.deleteTask);
    }

    getTasksByUser =async (req: Request, res: Response) => {
        try {
            
            const taskRequest: GetTasksByUserRequestDTO = {
                idUser: req.body.idUser
            };

            const createTask = await this.getTasksByUserUseCase.execute({
                idUser: taskRequest.idUser
            });

            return res.json(createTask);

        } catch (error) {
            
        }
    };

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

    updateTask = async (req: Request, res: Response) => {
        try {
            
            const taskRequest: UpdateTaskRequestDTO = {
                idTask: req.body.idTask,
                title: req.body.title,
                description: req.body.description,
                deadline: req.body.deadline,
                responsibleId: req.body.responsibleId
            };

            const createTask = await this.updateTaskUseCase.execute({
                idTask: taskRequest.idTask,
                title: taskRequest.title,
                description: taskRequest.description,
                deadline: taskRequest.deadline,
                responsibleId: taskRequest.responsibleId
            });

            return res.json(createTask);

        } catch (error) {
            
        }
    };

    deleteTask = async (req: Request, res: Response) => {
        try {
            
            const taskRequest: DeleteTaskRequestDTO = {
                idTask: req.body.idTask
            };

            const createTask = await this.deleteTaskUseCase.execute({
                idTask: taskRequest.idTask
            });

            return res.json(createTask);

        } catch (error) {
            
        }
    };
}

export { TaskController };