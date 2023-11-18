import { inject, injectable } from "tsyringe";
import { User } from "../../../domain/entitis/task/User";
import { type UserRepository } from "../../../domain/repositories/UserRepository";
import { type CreateUserUseCaseRequestDTO, type CreateUserUseCaseResponseDTO } from "../../dtos/user/CreateUserUseCaseDTO";

@injectable()
export class CreateUserUseCase {

    constructor(@inject('UserRepository') private readonly userRepository: UserRepository){}

    async execute(user: CreateUserUseCaseRequestDTO): Promise<CreateUserUseCaseResponseDTO> {
        const createUser = new User(user);

        const userCreated = await this.userRepository.create(createUser);

        return userCreated;
    }

}