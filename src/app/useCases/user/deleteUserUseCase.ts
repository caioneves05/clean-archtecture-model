import { inject, injectable } from "tsyringe";
import { type UserRepository } from "../../../domain/repositories/UserRepository";
import { DeleteUserUseCaseRequestDTO, DeleteUserUseCaseResponseDTO } from "../../dtos/user/DeleteUserUseCaseDTO";

@injectable()
export class DeleteUserUseCase {

    constructor(@inject('UserRepository') private readonly userRepository: UserRepository){}

    async execute(params: DeleteUserUseCaseRequestDTO): Promise<DeleteUserUseCaseResponseDTO> {

        const userDeleted = await this.userRepository.delete(params.id);

        return userDeleted;
    }

}