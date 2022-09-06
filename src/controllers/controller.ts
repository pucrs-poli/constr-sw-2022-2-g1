import { Request, Response } from "express";

export function helloWorld(_req: Request, res: Response) {
  res.send("Hello, World! The API is up!");
}
