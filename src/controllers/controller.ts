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

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  const accessToken = req.headers.authorization as string;
  const users = await service.getAllUsers(accessToken);
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(401).send("Invalid access token.");
  }
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const accessToken = req.headers.authorization as string;
  const user = await service.getUserById(id, accessToken);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).send("Invalid access token.");
  }
}

export async function createUser(req: Request, res: Response): Promise<void> {
  const body = req.body as CreateUserRequestBody;
  const accessToken = req.headers.authorization as string;
  const newUser = await service.createUser(body, accessToken);
  if (newUser) {
    res.status(201).json(newUser);
  } else {
    res.status(401).send("Invalid access token.");
  }
}

// NOT IMPLEMENTED YET.
export async function updateUser(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const body = req.body as CreateUserRequestBody;
  const accessToken = req.headers.authorization as string;
  const updatedUser = await service.updateUser(id, body, accessToken);
  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(401).send("Invalid access token.");
  }
}

// NOT IMPLEMENTED YET.
export async function updateUserPassword(
  req: Request,
  res: Response
): Promise<void> {
  const id = req.params.id;
  const password = req.body.password as string;
  const result = await service.updateUserPassword(id, password);
  res.json(result);
}

// NOT IMPLEMENTED YET.
export async function deleteUser(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const result = await service.deleteUser(id);
  res.json(result);
}
