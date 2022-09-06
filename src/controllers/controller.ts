import { Request, Response } from "express";

export function login(_req: Request, res: Response): void {
  // Call the service layer here.
  res.json({
    status: "OK! This is the login route.",
  });
}
export function getAllUsers(_req: Request, res: Response): void {
  // Call the service layer here.
  res.json({
    status: "OK! This is the get all users route.",
  });
}
export function getUserById(req: Request, res: Response): void {
  // Call the service layer here.
  res.json({
    status: `OK! This is the get user by id route. ID: ${req.params.id}`,
  });
}
export function createUser(_req: Request, res: Response): void {
  // Call the service layer here.
  res.json({
    status: "OK! This is the create user route.",
  });
}
export function updateUser(req: Request, res: Response): void {
  // Call the service layer here.
  res.json({
    status: `OK! This is the update user route. ID: ${req.params.id}`,
  });
}
export function updateUserPassword(req: Request, res: Response): void {
  // Call the service layer here.
  res.json({
    status: `OK! This is the update user password route. ID: ${req.params.id}`,
  });
}
export function deleteUser(req: Request, res: Response): void {
  // Call the service layer here.
  res.json({
    status: `OK! This is the delete user route. ID: ${req.params.id}`,
  });
}
