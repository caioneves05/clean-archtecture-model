import { CreateTaskUseCaseRequestDTO, CreateTaskUseCaseResponseDTO } from "../../app/dtos/task/CreateTaskUseCaseDTO";
export abstract class TaskRepository {
    abstract create(task: CreateTaskUseCaseRequestDTO): Promise<CreateTaskUseCaseResponseDTO>
}