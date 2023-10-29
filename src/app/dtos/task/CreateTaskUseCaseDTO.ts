import { type User } from "../../../domain/entitis/task/User";

export interface CreateTaskUseCaseRequestDTO {
    title: string,
    description: string,
    deadline: Date,
    creator: User,
    responsible: User[]
}

export interface CreateTaskUseCaseResponseDTO {
    title: string,
    description: string,
    deadline: Date,
    creator: User,
    responsible: User[]
}