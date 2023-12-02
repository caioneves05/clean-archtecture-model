import { type Task } from "../../domain/entitis/task/Task";
import { type TaskRepository } from "../../domain/repositories/TaskRepository";

export class TaskInMemory implements TaskRepository {
    public tasks: Task[] = [];
    async createTask(task: Task): Promise<Task> {
        await this.tasks.push(task);

        return task;
    }

    async getTasks(idUser: string): Promise<Task[]> {
        const tasksUser = this.tasks.filter(task => task.id === idUser);

        return tasksUser;
    }

    async updateTask(
        idTask: string, 
        title: string, 
        description: string, 
        deadline: Date, 
        responsibleId: string
    ): Promise<Task> {
        const taskIndex = this.tasks.findIndex(task => task.id === idTask);
        
        if (taskIndex !== -1) {
            const task = this.tasks[taskIndex];
    
            if (title !== undefined) {
                task.title = title;
            }
    
            if (description !== undefined) {
                task.description = description;
            }
    
            if (deadline !== undefined) {
                task.deadline = deadline;
            }

            if (responsibleId !== undefined) {
                task.responsibleId = responsibleId;
            }
    
            return task;
        } else {
            throw new Error(`Task not found`);
        }

    }

    async deleteTask(idTask: string): Promise<Task> {
        const task = this.tasks.findIndex(task => task.id === idTask);

        if (task === -1) {
        throw new Error(`User with ID not found`);
        }

        const deleteTask = this.tasks.splice(task, 1)[0];

        return deleteTask;
    }

}