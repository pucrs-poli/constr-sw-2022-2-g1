import { Request, Response } from "express";
import { LoginRequestBody, User } from "../models/models";
import * as service from "../services/keycloak/service";

export function login(req: Request, res: Response): void {
  const body = req.body as LoginRequestBody;
  const result = service.login(body);
  res.json(result);
}

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
