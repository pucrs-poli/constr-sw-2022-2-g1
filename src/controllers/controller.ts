import { Request, Response } from "express";
import {
  CreateUserRequestBody,
  LoginRequestBody,
  User,
} from "../models/models";
import * as service from "../services/service";

export async function login(req: Request, res: Response): Promise<void> {
  const body = req.body as LoginRequestBody;
  const loginInfo = await service.login(body);
  if (loginInfo) {
    res.status(200).json(loginInfo);
  } else {
    res.status(401).send("Invalid username or password.");
  }
}

// NOT IMPLEMENTED YET.
export function getAllUsers(_req: Request, res: Response): void {
  const result = service.getAllUsers();
  res.json(result);
}

// NOT IMPLEMENTED YET.
export function getUserById(req: Request, res: Response): void {
  const id = req.params.id;
  const result = service.getUserById(id);
  res.json(result);
}

export function createUser(req: Request, res: Response): void {
  const body = req.body as CreateUserRequestBody;
  const accessToken = req.headers.authorization;
  if (!accessToken) {
    res.status(401).send("Unauthorized");
    return;
  }
  const newUser = service.createUser(body, accessToken);
  if (newUser) {
    res.status(201).json(newUser);
  } else {
    res.status(400).send("Bad Request.");
  }
}

// NOT IMPLEMENTED YET.
export function updateUser(req: Request, res: Response): void {
  const body = req.body as User;
  const result = service.updateUser(body);
  res.json(result);
}

// NOT IMPLEMENTED YET.
export function updateUserPassword(req: Request, res: Response): void {
  const id = req.params.id;
  const password = req.body.password as string;
  const result = service.updateUserPassword(id, password);
  res.json(result);
}

// NOT IMPLEMENTED YET.
export function deleteUser(req: Request, res: Response): void {
  const id = req.params.id;
  const result = service.deleteUser(id);
  res.json(result);
}
