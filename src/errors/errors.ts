import { Response } from "express";

export class APIError extends Error {
  private statusCode: number;
  private error: string;

  constructor(statusCode: number, error: string) {
    super();
    this.statusCode = statusCode;
    this.error = error;
  }

  public getStatusCode(): number {
    return this.statusCode;
  }
  public getError(): string {
    return this.error;
  }
}

export function handleError(res: Response, err: APIError): void {
  res.status(err.getStatusCode()).json({ error: err.getError() });
}
