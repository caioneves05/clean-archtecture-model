export interface CreateTaskUseCaseRequestDTO {
    title: string,
    description: string,
    deadline: Date,
    creatorId: string,
    responsibleId: string
}

export interface CreateTaskUseCaseResponseDTO {
    title: string,
    description: string,
    deadline: Date,
    creatorId: string,
    responsibleId: string
}