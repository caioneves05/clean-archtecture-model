import { ITask } from "../src/domain/entitis/task/Task";
import { User } from "../src/domain/entitis/task/User";
import { userCreatorProps, userResponsibleProps } from "./user.mock";

const userCreator = new User(userCreatorProps);
const userResponsible = new User(userResponsibleProps);

export const taskMock: ITask = {
    title: 'Task Example',
    description: 'Description the task example',
    deadline: new Date('2023-12-31'),
    creatorId: userCreator.id, 
    responsible: [userResponsible],
  };