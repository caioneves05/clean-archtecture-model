import { injectable } from "tsyringe";
import { TaskRepository } from "../../../../domain/repositories/TaskRepository";
import { PrismaService } from "..";
import { CreateTaskUseCaseRequestDTO, CreateTaskUseCaseResponseDTO } from "../../../../app/dtos/task/CreateTaskUseCaseDTO";
import { PrismaTaskMapper } from "../mappers/PrismaTaskMapper";
import { Task } from "../../../../domain/entitis/task/Task";

@injectable()
export class PrismaTaskRepository implements TaskRepository {
    constructor(private readonly prisma: PrismaService) {}
    
    async getTasks(idUser: string): Promise<Task[]> {

        const user = await this.prisma.task.findFirst({
            where: {
                responsibleId: idUser
            }
        });

        if(!user) {
            throw new Error('this User are not have tasks');
        }

        const tasksUser = await this.prisma.task.findMany({
            where: {
                responsibleId: idUser
            }
        });
        
        return tasksUser.map(task => PrismaTaskMapper.toEntity(task));
    }
    
    async createTask(task: CreateTaskUseCaseRequestDTO): Promise<CreateTaskUseCaseResponseDTO> {
        const createTask = await this.prisma.task.create({
            data: {
                title: task.title,
                description: task.description,
                deadline: task.deadline,
                creatorId: task.creatorId,
                responsibleId: task.responsibleId
            }
        });

        return PrismaTaskMapper.toEntity(createTask);
    }

    async updateTask(
        idTask: string,
        title: string, 
        description: string, 
        deadline: Date, 
        responsibleId: string
    ): Promise<Task> {
        const task = await this.prisma.task.findFirst({
            where: {
                id: idTask
            }
        });

        if(!task) {
            throw new Error('Task is not exists!');
        }

        const taskUpdate = await this.prisma.task.update({
            where: {
                id: idTask
            },
            data: {
                title,
                description,
                deadline,
                responsibleId
            }
        });

        return PrismaTaskMapper.toEntity(taskUpdate);

    }

    async  deleteTask(idTask: string): Promise<Task> {
        const deleteTask = await this.prisma.task.delete({
            where: {
                id: idTask
            }
        });

        return PrismaTaskMapper.toEntity(deleteTask);
    }
}