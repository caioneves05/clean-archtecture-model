import { injectable } from "tsyringe";
import { TaskRepository } from "../../../../domain/repositories/TaskRepository";
import { PrismaService } from "..";
import { CreateTaskUseCaseRequestDTO, CreateTaskUseCaseResponseDTO } from "../../../../app/dtos/task/CreateTaskUseCaseDTO";
import { PrismaTaskMapper } from "../mappers/PrismaTaskMapper";

@injectable()
export class PrismaTaskRepository implements TaskRepository {
    constructor(private readonly prisma: PrismaService) {}
    
    async create(task: CreateTaskUseCaseRequestDTO): Promise<CreateTaskUseCaseResponseDTO> {
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
}