import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { KEYCLOAK_API_HOST, KEYCLOAK_API_PORT } from "../config";
import { APIErrors, sendError } from "../errors/errors";

const VALIDATE_USER_ENDPOINT = `http://${KEYCLOAK_API_HOST}:${KEYCLOAK_API_PORT}/users/validate`;

export async function checkAccessToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const accessToken = req.headers.authorization as string;
  if (!accessToken || !accessToken.startsWith("Bearer ")) {
    sendError(res, APIErrors.INVALID_OR_MISSING_ACCESS_TOKEN);
    return;
  }
  try {
    await axios.post(VALIDATE_USER_ENDPOINT, {
      headers: {
        Authorization: accessToken,
      },
    });
    next();
  } catch (error) {
    console.error(error);
    sendError(res, APIErrors.INVALID_OR_MISSING_ACCESS_TOKEN);
  }
}
