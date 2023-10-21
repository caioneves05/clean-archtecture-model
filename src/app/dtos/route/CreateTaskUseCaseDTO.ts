import { User } from "../../../domain/entitis/task/User"

export type CreateTaskUseCaseRequestDTO = {
    title: string,
    description: string,
    deadline: Date,
    creator: User,
    responsible: User[]
}

export type CreateTaskUseCaseResponseDTO = {
    title: string,
    description: string,
    deadline: Date,
    creator: User,
    responsible: User[]
}