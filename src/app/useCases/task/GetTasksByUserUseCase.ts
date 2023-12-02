import { inject, injectable } from "tsyringe";
import { type TaskRepository } from "../../../domain/repositories/TaskRepository";
import { GetTasksByUserUseCaseDTO } from "../../dtos/task/GetTasksByUserUseCaseDTO";
import { Task } from "../../../domain/entitis/task/Task";

@injectable()
export class GetTasksByUserUseCase {

    constructor(@inject('TaskRepository')private readonly taskRepository: TaskRepository){}

    async execute({ idUser }: GetTasksByUserUseCaseDTO): Promise<Task[]> {
        const getTask = await this.taskRepository.getTasks(idUser);

        return getTask;
    }

}