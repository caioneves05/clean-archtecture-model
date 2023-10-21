import { Route } from "../../domain/entitis/task/Task";
import { RouteRepository } from "../../domain/repositories/TaskRepository";

class RouteInMemory implements RouteRepository {
    items: Route[] = []
    create(route: Route): Promise<Route> {
        throw new Error("Method not implemented.");
    }

}