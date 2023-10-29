import { Task } from "../../domain/entitis/task/Task";
import { TaskRepository } from "../../domain/repositories/TaskRepository";

export class TaskInMemory implements TaskRepository {
    items: Task[] = []
    async create(route: Task): Promise<void> {
        await this.items.push(route)
    }

}