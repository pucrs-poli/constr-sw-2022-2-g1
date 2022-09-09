import { NextFunction, Request, Response } from "express";

export function checkAccessToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized. No access token provided.");
  } else if (req.headers.authorization.split(" ")[0] !== "Bearer") {
    return res.status(401).send("Unauthorized. Invalid access token.");
  } else {
    next();
  }
}
