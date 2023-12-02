export interface UpdateUserRepositoryDTO  {
    id: string
    fullname: string;
    email: string;
    role: 'admin' | 'user';
}