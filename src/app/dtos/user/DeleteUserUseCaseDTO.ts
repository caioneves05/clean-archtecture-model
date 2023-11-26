import { Task } from "../../../domain/entitis/task/Task";

export interface DeleteUserUseCaseRequestDTO {
    id: string;
}

export interface DeleteUserUseCaseResponseDTO {
    fullname: string;
    document: string;
    email: string;
    role: string;
    tasks?: Task[];
}