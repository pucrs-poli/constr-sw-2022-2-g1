import { NextFunction, Request, Response } from "express";
import GlobalToken from "../token/token";

export function checkAccessToken(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  const accessToken = GlobalToken.getAccessToken();
  if (!accessToken) {
    return res.status(401).send("Unauthorized. No access token provided.");
  }
  next();
}
