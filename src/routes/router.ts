import { Express, Request, Response } from "express";

export enum HTTPMethod {
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

  public addRoute(
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
}
