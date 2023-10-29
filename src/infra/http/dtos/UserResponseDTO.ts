export interface UserResponseDTO {
    fullname: string;
    document: string;
    email: string;
    role: 'admin' | 'user';
}