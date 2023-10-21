import { Task } from "../entitis/task/Task";

export abstract class TaskRepository {
    abstract create(route: Task): Promise<Task>
}