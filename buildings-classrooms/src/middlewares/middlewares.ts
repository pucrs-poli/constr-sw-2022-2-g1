import { NextFunction, Request, Response } from "express";

export function checkAccessToken(
  _req: Request,
  _res: Response,
  next: NextFunction
) {
  next();
}
