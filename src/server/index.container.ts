import { taskResolver } from "./containers/task-container";
import { userResolver } from "./containers/user-container";

const resolver = {
    user: userResolver,
    task: taskResolver
};

export { resolver };