import { Task } from "../../../domain/entitis/task/Task";
import { type TaskRepository } from "../../../domain/repositories/TaskRepository";
import { type CreateTaskUseCaseRequestDTO, type CreateTaskUseCaseResponseDTO } from "../../dtos/task/CreateTaskUseCaseDTO";

export class CreateTaskUseCase {

    constructor(private readonly taskRepository: TaskRepository){}

    async execute(task: CreateTaskUseCaseRequestDTO): Promise<CreateTaskUseCaseResponseDTO> {
        const createTask = new Task(task);

        const taskCreated = await this.taskRepository.create(createTask);

        return taskCreated;
    }

}