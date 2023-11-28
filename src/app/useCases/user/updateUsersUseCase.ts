import { inject, injectable } from "tsyringe";
import { type UserRepository } from "../../../domain/repositories/UserRepository";
import { UpdateUserUseCaseRequestDTO, UpdateUserUseCaseResponseDTO } from "../../dtos/user/UpdateUserUseCaseDTO";

@injectable()
export class UpdateUserUseCase {

    constructor(@inject('UserRepository') private readonly userRepository: UserRepository){}

    async execute(user: UpdateUserUseCaseRequestDTO): Promise<UpdateUserUseCaseResponseDTO> {

        const userUpdated = await this.userRepository.update({
            id: user.id,
            fullname: user.fullname ,
            email: user.email,
            role: user.role
        });

        return userUpdated;
    }

}