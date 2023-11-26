import { IsString, IsNotEmpty, Min } from 'class-validator';

export abstract class CreateUserRequestDTO {
    @IsString({ message: 'The "fullname" field must be a string.' })
    @IsNotEmpty({ message: 'The "fullname" field cannot be empty.' })
    @Min(3, { message: 'The "fullname" field must have at least 3 characters.' })
    fullname: string;

    @IsString({ message: 'The "document" field must be a string.' })
    @IsNotEmpty({ message: 'The "document" field cannot be empty.' })
    @Min(11, { message:'The document must be 11 characters.' })
    document: string;

    @IsString({ message: 'The "email" field must be a string.' })
    @IsNotEmpty({ message: 'The "email" field cannot be empty.' })
    email: string;

    @IsString({ message: 'The "role" field must be a string.' })
    @IsNotEmpty({ message: 'The "role" field cannot be empty.' })
    role: 'admin' | 'user';
}

export abstract class DeleteUserRequestDTO {
    @IsString({ message: 'The "id" field must be a string.' })
    @IsNotEmpty({ message: 'The "id" field cannot be empty.' })
    id: string;
}