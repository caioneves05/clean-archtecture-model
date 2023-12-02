import { container } from "tsyringe";
import { CreateTaskUseCase } from "../../app/useCases/task/createTaskUseCase";
import { PrismaTaskRepository } from "../../infra/database/prisma/repositories/PrismaTaskRepository";
import { TaskController } from "../../infra/http/controllers/task.controller";

container.register('CreateTaskUseCase', { useClass: CreateTaskUseCase });
container.register('TaskRepository', { useClass: PrismaTaskRepository });

const taskResolver = container.resolve(TaskController);

export { taskResolver };