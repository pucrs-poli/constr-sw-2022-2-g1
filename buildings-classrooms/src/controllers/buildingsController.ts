import { Request, Response } from "express";

export async function helloWorld(_req: Request, res: Response): Promise<void> {
  res.status(200).json({ message: "Hello World!" });
}
