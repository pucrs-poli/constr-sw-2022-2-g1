import { Request, Response } from "express";
import { APIError, handleError } from "../errors/errors";
import {
  CreateUserRequestBody,
  LoginRequestBody,
} from "../interfaces/interfaces";
import * as service from "../services/service";

export async function login(req: Request, res: Response): Promise<void> {
  const body = req.body as LoginRequestBody;
  try {
    const loginInfo = await service.login(body);
    res.status(200).json(loginInfo);
  } catch (error) {
    handleError(res, error as APIError);
  }
}

export async function getAllUsers(_req: Request, res: Response): Promise<void> {
  try {
    const users = await service.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    handleError(res, error as APIError);
  }
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  try {
    const user = await service.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    handleError(res, error as APIError);
  }
}

export async function createUser(req: Request, res: Response): Promise<void> {
  const body = req.body as CreateUserRequestBody;
  try {
    const newUser = await service.createUser(body);
    res.status(201).json(newUser);
  } catch (error) {
    handleError(res, error as APIError);
  }
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const body = req.body as CreateUserRequestBody;
  try {
    await service.updateUser(id, body);
    res.status(204).json({});
  } catch (error) {
    handleError(res, error as APIError);
  }
}

export async function updateUserPassword(
  req: Request,
  res: Response
): Promise<void> {
  const id = req.params.id;
  const password = req.body.password as string;
  try {
    await service.updateUserPassword(id, password);
    res.status(204).json({});
  } catch (error) {
    handleError(res, error as APIError);
  }
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  try {
    await service.deleteUser(id);
    res.status(204).json({});
  } catch (error) {
    handleError(res, error as APIError);
  }
}
