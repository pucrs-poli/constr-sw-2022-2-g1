import { Response } from "express";

type APIError = {
  status: number;
  message: string;
};

export class APIErrors {
  public static NOT_FOUND: APIError = {
    status: 404,
    message: "Not Found.",
  };
  public static INTERNAL_SERVER_ERROR: APIError = {
    status: 500,
    message: "Internal Server Error.",
  };
}

export function sendError(res: Response, error: APIError) {
  res.status(error.status).json({ error: error.message });
}
