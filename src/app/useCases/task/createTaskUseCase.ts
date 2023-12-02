import { inject, injectable } from "tsyringe";
import { Task } from "../../../domain/entitis/task/Task";
import { type TaskRepository } from "../../../domain/repositories/TaskRepository";
import { type CreateTaskUseCaseRequestDTO, type CreateTaskUseCaseResponseDTO } from "../../dtos/task/CreateTaskUseCaseDTO";

@injectable()
export class CreateTaskUseCase {

    constructor(@inject('TaskRepository')private readonly taskRepository: TaskRepository){}

    async execute(task: CreateTaskUseCaseRequestDTO): Promise<CreateTaskUseCaseResponseDTO> {
        const createTask = new Task({
            title: task.title,
            description: task.description,
            creatorId: task.creatorId,
            deadline: task.deadline,
            responsibleId: task.responsibleId
        });

        const taskCreated = await this.taskRepository.create({
            title: createTask.title,
            description: createTask.description,
            creatorId: createTask.creatorId,
            deadline: createTask.deadline,
            responsibleId: createTask.responsibleId
        });

        return taskCreated;
    }

}