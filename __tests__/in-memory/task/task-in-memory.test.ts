import { Task } from "../../../src/domain/entitis/task/Task";
import { TaskInMemory } from "../../../src/infra/repositories/task-in-memory.repository";
import { taskMock } from "../../../mocks/task.mock";

describe('TaskInMemoryRepository Suit Tests', () => {
  const repository = new TaskInMemory();

  const task = new Task(taskMock);

  it('Should create a new User', async () => {
    await repository.create(task);

    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([task]);
  });
});