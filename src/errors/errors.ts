import { Response } from "express";

export interface APIError {
  statusCode: number;
  error: string;
}

export function handleError(res: Response, err: APIError): void {
  res.status(err.statusCode).json({ message: err.error });
}
