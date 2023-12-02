import { type Task } from "../../../domain/entitis/task/Task";

export interface CreateUserUseCaseRequestDTO {
    fullname: string;
    document: string;
    email: string;
    role: 'admin' | 'user';
    tasks?: Task[];
}

export interface CreateUserUseCaseResponseDTO {
    fullname: string;
    document: string;
    email: string;
    role: string;
    tasksId?: string[];
}