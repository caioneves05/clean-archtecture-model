import { type Task as RawTask } from '@prisma/client';
import { Task } from '../../../../domain/entitis/task/Task';


export class PrismaTaskMapper {
    static toPrisma (task: Task): RawTask {
        return {
            id: task.id,
            title: task.title,
            description: task.description,
            deadline: task.deadline,
            creatorId: task.creatorId,
            responsibleId: task.responsibleId
        };
    };

    static toEntity (task: RawTask): Task {
        const taskEntity = new Task({
            title: task.title,
            description: task.description,
            deadline: task.deadline,
            creatorId: task.creatorId,
            responsibleId: task.responsibleId
        });

        return taskEntity;
    }
}
