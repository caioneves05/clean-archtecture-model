import 'reflect-metadata';
import { container } from 'tsyringe';
import { TaskController } from '../../infra/http/controllers/task.controller';
import { CreateTaskUseCase } from '../../app/useCases/task/createTaskUseCase';

container.register('CreateTaskUseCase', { useClass: CreateTaskUseCase });



const taskResolver = container.resolve(TaskController);

export { taskResolver };