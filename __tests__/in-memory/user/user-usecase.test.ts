import 'reflect-metadata';

import { userCreatorProps, userResponsibleProps } from "../../../mocks/user.mock";
import { CreateUserUseCase } from "../../../src/app/useCases/user/CreateUsersUseCase";
import { UserInMemory } from "../../../src/infra/repositories/user-in-memory-repository";

describe('User UseCases suit test', () => {
    it('Should create a new User', async () => {
        const respository = new UserInMemory();
        const createTask = new CreateUserUseCase(respository);

        await createTask.execute(userCreatorProps);
        await createTask.execute(userResponsibleProps);
        expect(respository.users).toHaveLength(2);
    });
});
