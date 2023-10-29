import { type Task } from "../../domain/entitis/task/Task";
import { type TaskRepository } from "../../domain/repositories/TaskRepository";

export class TaskInMemory implements TaskRepository {
    public items: Task[] = [];
    async create(task: Task): Promise<Task> {
        await this.items.push(task);

        return task;
    }

}