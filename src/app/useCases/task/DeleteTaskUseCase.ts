import { inject, injectable } from "tsyringe";
import { Task } from "../../../domain/entitis/task/Task";
import { type TaskRepository } from "../../../domain/repositories/TaskRepository";
import { DeleteTaskUseCaseRequestDTO } from "../../dtos/task/DeleteTaskUseCaseDTO";

@injectable()
export class DeleteTaskUseCase {

    constructor(@inject('TaskRepository')private readonly taskRepository: TaskRepository){}

    async execute({ idTask }: DeleteTaskUseCaseRequestDTO): Promise<Task> {
        const taskDeleted = await this.taskRepository.deleteTask(idTask);

        return taskDeleted;
    }

}