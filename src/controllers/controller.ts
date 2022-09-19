import { Request, Response } from "express";
import { APIError, handleError } from "../errors/errors";
import {
  CreateUserRequestBody,
  LoginRequestBody,
} from "../interfaces/interfaces";
import * as service from "../services/service";

export async function login(req: Request, res: Response): Promise<void> {
  const body = req.body as LoginRequestBody;
  const loginInfo = await service.login(body);
  if (!("error" in loginInfo)) {
    res.status(200).json(loginInfo);
  } else {
    handleError(res, loginInfo);
  }
}

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  const accessToken = req.headers.authorization as string;
  const users = await service.getAllUsers(accessToken);
  if (!("error" in users)) {
    res.status(200).json(users);
  } else {
    handleError(res, users);
  }
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const accessToken = req.headers.authorization as string;
  const user = await service.getUserById(id, accessToken);
  if (!("error" in user)) {
    res.status(200).json(user);
  } else {
    handleError(res, user);
  }
}

export async function createUser(req: Request, res: Response): Promise<void> {
  const body = req.body as CreateUserRequestBody;
  const accessToken = req.headers.authorization as string;
  const newUser = await service.createUser(body, accessToken);
  if (!("error" in newUser)) {
    res.status(201).json(newUser);
  } else {
    handleError(res, newUser);
  }
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const body = req.body as CreateUserRequestBody;
  const accessToken = req.headers.authorization as string;
  const updated = await service.updateUser(id, body, accessToken);
  if (updated === true) {
    res.status(200).json({});
  } else {
    handleError(res, updated as APIError);
  }
}

// NOT IMPLEMENTED YET.
export async function updateUserPassword(
  req: Request,
  res: Response
): Promise<void> {
  const id = req.params.id;
  const password = req.body.password as string;
  const updated = await service.updateUserPassword(id, password);
  if (updated === true) {
    res.status(200).json({});
  } else {
    handleError(res, updated as APIError);
  }
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const accessToken = req.headers.authorization as string;
  const deleted = await service.deleteUser(id, accessToken);
  if (deleted === true) {
    res.status(200).json({});
  } else {
    handleError(res, deleted as APIError);
  }
}
