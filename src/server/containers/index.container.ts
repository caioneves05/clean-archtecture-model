import { taskResolver } from "./task-container";
import { userResolver } from "./user-container";

const resolver = {
    user: userResolver,
    task: taskResolver
};

export { resolver };