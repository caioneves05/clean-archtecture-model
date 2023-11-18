import { userResolver } from "./containers/user-container";

const resolver = {
    user: userResolver
};

export { resolver };