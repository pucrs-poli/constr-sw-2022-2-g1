import { Response } from "express";

type APIError = {
  status: number;
  message: string;
};

export class APIErrors {
  public static INVALID_OR_MISSING_ACCESS_TOKEN: APIError = {
    status: 401,
    message: "Invalid or missing access token.",
  };
  public static NOT_FOUND: APIError = {
    status: 404,
    message: "Not Found",
  };
  public static INTERNAL_SERVER_ERROR: APIError = {
    status: 500,
    message: "Internal Server Error",
  };
  public static INPUT_VALIDATION_ERROR: APIError = {
    status: 400,
    message: "Input Validation Error",
  };
}

export function sendError(res: Response, error: APIError, moreInfo?: string) {
  res
    .status(error.status)
    .json({ error: `${error.message}${moreInfo ? `: ${moreInfo}` : ""}.` });
}
