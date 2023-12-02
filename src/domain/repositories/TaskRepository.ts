import { CreateTaskUseCaseRequestDTO, CreateTaskUseCaseResponseDTO } from "../../app/dtos/task/CreateTaskUseCaseDTO";
import { Task } from "../entitis/task/Task";

export abstract class TaskRepository {
    abstract createTask(task: CreateTaskUseCaseRequestDTO): Promise<CreateTaskUseCaseResponseDTO>
    abstract getTasks(idUser: string): Promise<Task[]>
    abstract deleteTask(idTask: string): Promise<Task>
    abstract updateTask(
        idTask: string,
        title: string,
        description: string,
        deadline: Date,
        responsibleId: string,
    ): Promise<Task>
}