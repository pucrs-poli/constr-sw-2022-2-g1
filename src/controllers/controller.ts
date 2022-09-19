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

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  const accessToken = req.headers.authorization as string;
  try {
    const users = await service.getAllUsers(accessToken);
    res.status(200).json(users);
  } catch (error) {
    handleError(res, error as APIError);
  }
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const accessToken = req.headers.authorization as string;
  try {
    const user = await service.getUserById(id, accessToken);
    res.status(200).json(user);
  } catch (error) {
    handleError(res, error as APIError);
  }
}

export async function createUser(req: Request, res: Response): Promise<void> {
  const body = req.body as CreateUserRequestBody;
  const accessToken = req.headers.authorization as string;
  try {
    const newUser = await service.createUser(body, accessToken);
    res.status(200).json(newUser);
  } catch (error) {
    handleError(res, error as APIError);
  }
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const body = req.body as CreateUserRequestBody;
  const accessToken = req.headers.authorization as string;
  try {
    await service.updateUser(id, body, accessToken);
    res.status(200).json({});
  } catch (error) {
    handleError(res, error as APIError);
  }
}

// NOT IMPLEMENTED YET.
export async function updateUserPassword(
  req: Request,
  res: Response
): Promise<void> {
  const id = req.params.id;
  const password = req.body.password as string;
  try {
    await service.updateUserPassword(id, password);
    res.status(200).json({});
  } catch (error) {
    handleError(res, error as APIError);
  }
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const accessToken = req.headers.authorization as string;
  try {
    await service.deleteUser(id, accessToken);
    res.status(200).json({});
  } catch (error) {
    handleError(res, error as APIError);
  }
}
