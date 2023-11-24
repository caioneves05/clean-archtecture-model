import { CreateTaskUseCaseRequestDTO } from "../../app/dtos/task/CreateTaskUseCaseDTO";
import { type Task } from "../entitis/task/Task";
export abstract class TaskRepository {
    abstract create(task: CreateTaskUseCaseRequestDTO): Promise<Task>
}