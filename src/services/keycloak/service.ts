import { LoginRequestBody, LoginResponseBody, User } from "../../models/models";

export function login(body: LoginRequestBody): LoginResponseBody {
  return {
    tokenType: "",
    accessToken: "",
    expiresIn: 0,
    refreshToken: "",
    refreshExpiresIn: 0,
  };
}
export function getAllUsers(): User[] {
  return [];
}
export function getUserById(id: string): User {
  return {
    id: "",
    username: "",
  };
}
export function createUser(user: User): User {
  return {
    id: "",
    username: "",
  };
}
export function updateUser(user: User): User {
  return {
    id: "",
    username: "",
  };
}
export function updateUserPassword(id: string, password: string): boolean {
  return true;
}
export function deleteUser(id: string): boolean {
  return true;
}
