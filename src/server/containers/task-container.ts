import { container } from "tsyringe";
import { CreateTaskUseCase } from "../../app/useCases/task/CreateTaskUseCase";
import { PrismaTaskRepository } from "../../infra/database/prisma/repositories/PrismaTaskRepository";
import { TaskController } from "../../infra/http/controllers/task.controller";
import { GetTasksByUserUseCase } from "../../app/useCases/task/GetTasksByUserUseCase";
import { DeleteTaskUseCase } from "../../app/useCases/task/DeleteTaskUseCase";
import { UpdateTaskUseCase } from "../../app/useCases/task/UpdateTaskUseCase";

container.register('GetTasksByUserUseCase', { useClass: GetTasksByUserUseCase });
container.register('CreateTaskUseCase', { useClass: CreateTaskUseCase });
container.register('TaskRepository', { useClass: PrismaTaskRepository });
container.register('UpdateTaskUseCase', { useClass: UpdateTaskUseCase });
container.register('DeleteTaskUseCase', { useClass: DeleteTaskUseCase });

const taskResolver = container.resolve(TaskController);

export { taskResolver };