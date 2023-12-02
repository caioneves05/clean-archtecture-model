import { inject, injectable } from "tsyringe";
import { Task } from "../../../domain/entitis/task/Task";
import { type TaskRepository } from "../../../domain/repositories/TaskRepository";
import { UpdateTaskUseCaseRequestDTO } from "../../dtos/task/UpdateTaskUseCaseDTO";

@injectable()
export class UpdateTaskUseCase {

    constructor(@inject('TaskRepository')private readonly taskRepository: TaskRepository){}

    async execute(params: UpdateTaskUseCaseRequestDTO): Promise<Task> {
        const taskUpdated = await this.taskRepository.updateTask(
            params.idTask,
            params.title, 
            params.description, 
            params.deadline, 
            params.responsibleId);

        return taskUpdated;
    }

}