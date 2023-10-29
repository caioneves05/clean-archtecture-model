import { userCreatorProps, userResponsibleProps } from "../../mocks/user.mock"
import { CreateUserUseCase } from "../../src/app/useCases/user/createUsersUseCase"
import { UserInMemory } from "../../src/infra/repositories/user-in-memory-repository"

describe('User UseCases suit test', () => {
    it('Should create a new User', async () => {
        const respository = new UserInMemory()
        const createTask = new CreateUserUseCase(respository)

        createTask.execute(userCreatorProps)
        createTask.execute(userResponsibleProps)
        expect(respository.items).toHaveLength(2)
    })
})