import { Express, Request, Response } from "express";
import { checkAccessToken } from "../middlewares/middlewares";
import * as buildingsController from "../controllers/buildingsController";

enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

enum Authorization {
  ACCESS_TOKEN = "ACCESS_TOKEN",
  NO_ACCESS_TOKEN = "NO_ACCESS_TOKEN",
}

export default class Router {
  private app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  private createRoute(
    path: string,
    method: HTTPMethod,
    controllerFunction: (arg0: Request, arg1: Response) => void,
    authorization: Authorization
  ) {
    switch (method) {
      case HTTPMethod.GET:
        {
          if (authorization === Authorization.NO_ACCESS_TOKEN) {
            this.app.get(path, controllerFunction);
          } else {
            this.app.get(path, checkAccessToken, controllerFunction);
          }
        }
        break;
      case HTTPMethod.POST:
        if (authorization === Authorization.NO_ACCESS_TOKEN) {
          this.app.post(path, controllerFunction);
        } else {
          this.app.post(path, checkAccessToken, controllerFunction);
        }
        break;
      case HTTPMethod.PUT:
        if (authorization === Authorization.NO_ACCESS_TOKEN) {
          this.app.put(path, controllerFunction);
        } else {
          this.app.put(path, checkAccessToken, controllerFunction);
        }
        break;
      case HTTPMethod.PATCH:
        if (authorization === Authorization.NO_ACCESS_TOKEN) {
          this.app.patch(path, controllerFunction);
        } else {
          this.app.patch(path, checkAccessToken, controllerFunction);
        }
        break;
      case HTTPMethod.DELETE:
        if (authorization === Authorization.NO_ACCESS_TOKEN) {
          this.app.delete(path, controllerFunction);
        } else {
          this.app.delete(path, checkAccessToken, controllerFunction);
        }
        break;
    }
  }

  /*
    Routes.
  */
  public setupRoutes(): void {
    this.createRoute(
      "/login",
      HTTPMethod.POST,
      buildingsController.helloWorld,
      Authorization.NO_ACCESS_TOKEN
    );
  }
}
