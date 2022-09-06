import { Express, Request, Response } from "express";
import { helloWorld } from "../controllers/controller";

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
    switch (method.toUpperCase()) {
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
    this.createRoute("/", HTTPMethod.GET, helloWorld);
  }
}
