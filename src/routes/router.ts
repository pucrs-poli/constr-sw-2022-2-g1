import { Express, Request, Response } from "express";
import * as controller from "../controllers/controller";

enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export default class Router {
  private app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  private createRoute(
    path: string,
    method: HTTPMethod,
    func: (req: Request, res: Response) => void
  ) {
    switch (method) {
      case HTTPMethod.GET:
        {
          this.app.get(path, func);
        }
        break;
      case HTTPMethod.POST:
        {
          this.app.post(path, func);
        }
        break;
      case HTTPMethod.PUT:
        {
          this.app.put(path, func);
        }
        break;
      case HTTPMethod.PATCH:
        {
          this.app.patch(path, func);
        }
        break;
      case HTTPMethod.DELETE:
        {
          this.app.delete(path, func);
        }
        break;
    }
  }

  /*
    Routes.
  */
  public setupRoutes(): void {
    this.createRoute("/login", HTTPMethod.POST, controller.login);
    this.createRoute("/users", HTTPMethod.GET, controller.getAllUsers);
    this.createRoute("/users/:id", HTTPMethod.GET, controller.getUserById);
    this.createRoute("/users", HTTPMethod.POST, controller.createUser);
    this.createRoute("/users/:id", HTTPMethod.PUT, controller.updateUser);
    this.createRoute(
      "/users/:id",
      HTTPMethod.PATCH,
      controller.updateUserPassword
    );
    this.createRoute("/users/:id", HTTPMethod.DELETE, controller.deleteUser);
  }
}
