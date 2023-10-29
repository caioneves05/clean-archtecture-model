import { Task } from "../entitis/task/Task";
export abstract class TaskRepository {
    abstract create(task: Task): Promise<void>
}