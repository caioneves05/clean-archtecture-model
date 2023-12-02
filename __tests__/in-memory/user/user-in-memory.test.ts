import { User } from "../../../src/domain/entitis/task/User";
import { UserInMemory } from "../../../src/infra/repositories/user-in-memory-repository";

import { userCreatorProps, userResponsibleProps } from "../../../mocks/user.mock";

describe(' UserInMemoryRepository Suit Tests', () => {
  const repository = new UserInMemory();

  const userCreator = new User(userCreatorProps);
  const userResponsible = new User(userResponsibleProps);

  it('Should create a new user', async () => {
    await repository.create(userCreator);
    await repository.create(userResponsible);

    expect(repository.users).toHaveLength(2);
    expect(repository.users).toStrictEqual([userCreator, userResponsible]);
  });
});