import { Request, Response } from "express";
import { LoginRequestBody, User } from "../models/models";
import * as service from "../services/service";

export async function login(req: Request, res: Response): Promise<void> {
  const body = req.body as LoginRequestBody;
  const loginInfo = await service.login(body);
  if (loginInfo) {
    res.status(200).json(loginInfo);
  } else {
    res.status(401).send();
  }
}

/*
  Functions below are not implemented yet.
*/
export function getAllUsers(_req: Request, res: Response): void {
  const result = service.getAllUsers();
  res.json(result);
}

export function getUserById(req: Request, res: Response): void {
  const id = req.params.id;
  const result = service.getUserById(id);
  res.json(result);
}

export function createUser(req: Request, res: Response): void {
  const body = req.body as User;
  const result = service.createUser(body);
  res.json(result);
}

export function updateUser(req: Request, res: Response): void {
  const body = req.body as User;
  const result = service.updateUser(body);
  res.json(result);
}

export function updateUserPassword(req: Request, res: Response): void {
  const id = req.params.id;
  const password = req.body.password as string;
  const result = service.updateUserPassword(id, password);
  res.json(result);
}

export function deleteUser(req: Request, res: Response): void {
  const id = req.params.id;
  const result = service.deleteUser(id);
  res.json(result);
}
