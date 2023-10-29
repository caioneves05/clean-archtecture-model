import { taskMock } from "../../mocks/task.mock"
import { CreateTaskUseCase } from "../../src/app/useCases/task/createRouteUseCase"
import { TaskInMemory } from "../../src/infra/repositories/task-in-memory.repository"

describe('Task UseCases suit test', () => {
    it('Should create a new Task', async () => {
        const respository = new TaskInMemory()
        const createTask = new CreateTaskUseCase(respository)

        createTask.execute(taskMock)
        expect(respository.items).toHaveLength(1)
    })
})