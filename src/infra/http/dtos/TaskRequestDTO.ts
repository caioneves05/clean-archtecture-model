import { IsString, IsNotEmpty, Min, IsDate } from 'class-validator';

export abstract class GetTasksByUserRequestDTO {
    @IsString({ message: 'The "id user" field must be a string.' })
    @IsNotEmpty({ message: 'The "id user" field cannot be empty.' })
    idUser: string;
}
export abstract class CreateTaskRequestDTO {
    @IsString({ message: 'The "title" field must be a string.' })
    @IsNotEmpty({ message: 'The "title" field cannot be empty.' })
    @Min(3, { message: 'The "title" field must have at least 3 characters.' })
    title: string;

    @IsString({ message: 'The "description" field must be a string.' })
    @IsNotEmpty({ message: 'The "description" field cannot be empty.' })
    @Min(5, { message:'The description must be 5 characters.' })
    description: string;

    @IsDate({ message: 'The "email" field must be a date format.' })
    @IsNotEmpty({ message: 'The "email" field cannot be empty.' })
    deadline: Date;

    @IsString({ message: 'The "creatorId" field must be a string.' })
    @IsNotEmpty({ message: 'The "creatorId" field cannot be empty.' })
    creatorId: string;

    @IsString({ message: 'The "responsibleId" field must be a string.' })
    @IsNotEmpty({ message: 'The "responsibleId" field cannot be empty.' })
    responsibleId: string;
}

export abstract class UpdateTaskRequestDTO {
    @IsString({ message: 'The "id task" field must be a string.' })
    @IsNotEmpty({ message: 'The "id task" field cannot be empty.' })
    idTask: string;

    @IsString({ message: 'The "title" field must be a string.' })
    @IsNotEmpty({ message: 'The "title" field cannot be empty.' })
    @Min(3, { message: 'The "title" field must have at least 3 characters.' })
    title: string;

    @IsString({ message: 'The "description" field must be a string.' })
    @IsNotEmpty({ message: 'The "description" field cannot be empty.' })
    @Min(5, { message:'The description must be 5 characters.' })
    description: string;

    @IsDate({ message: 'The "email" field must be a date format.' })
    @IsNotEmpty({ message: 'The "email" field cannot be empty.' })
    deadline: Date;

    @IsString({ message: 'The "responsibleId" field must be a string.' })
    @IsNotEmpty({ message: 'The "responsibleId" field cannot be empty.' })
    responsibleId: string;
}

export abstract class DeleteTaskRequestDTO {
    @IsString({ message: 'The "id task" field must be a string.' })
    @IsNotEmpty({ message: 'The "id task" field cannot be empty.' })
    idTask: string;
}