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
    tasksId?: string[];
}