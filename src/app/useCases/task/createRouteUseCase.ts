import { Task } from "../../../domain/entitis/task/Task";
import { TaskRepository } from "../../../domain/repositories/TaskRepository";
import { CreateTaskUseCaseRequestDTO, CreateTaskUseCaseResponseDTO } from "../../dtos/route/CreateTaskUseCaseDTO";

export class CreateTaskUseCase {

    constructor(private taskRepository: TaskRepository){}

    async execute(task: CreateTaskUseCaseRequestDTO): Promise<CreateTaskUseCaseResponseDTO> {
        const createTask = new Task(task)

        const route = await this.taskRepository.create(createTask)

        return route
    }

}