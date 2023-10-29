import { ITask } from "../src/domain/entitis/task/Task";
import { User } from "../src/domain/entitis/task/User";
import { userCreatorProps, userResponsibleProps } from "./user.mock";

const userCreator = new User(userCreatorProps);
const userResponsible = new User(userResponsibleProps);

export const taskProps: ITask = {
    title: 'Tarefa de exemplo',
    description: 'Descrição da tarefa de exemplo',
    deadline: new Date('2023-12-31'),
    creator: userCreator, 
    responsible: [userResponsible],
  };