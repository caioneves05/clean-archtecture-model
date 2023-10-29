export interface UserRequestDTO  {
    fullname: string;
    document: string;
    email: string;
    role: 'admin' | 'user';
}