import { NextFunction, Request, Response } from "express";

export function checkAccessToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const accessToken = req.headers.authorization;
  if (!accessToken || !accessToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .send("Unauthorized. Invalid or missing access token.");
  }
  next();
}
