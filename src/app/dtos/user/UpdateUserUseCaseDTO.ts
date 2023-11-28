import { Task } from "../../../domain/entitis/task/Task";

export interface UpdateUserUseCaseRequestDTO {
    id: string
    fullname?: string;
    email?: string;
    role?: 'admin' | 'user';
}

export interface UpdateUserUseCaseResponseDTO {
    fullname: string;
    document: string;
    email: string;
    role: string;
    tasks?: Task[];
}