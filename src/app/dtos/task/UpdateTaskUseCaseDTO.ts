export interface UpdateTaskUseCaseRequestDTO {
    idTask: string,
    title: string;
    description: string;
    deadline: Date;
    responsibleId: string;
}