import { Request, Response } from "express";
import Building from "../models/Building";

export async function getAll(req: Request, res: Response) {
  res.status(200).json({});
}

export async function getById(req: Request, res: Response) {
  res.status(200).json({});
}

export async function create(req: Request, res: Response) {
  res.status(200).json({});
}
