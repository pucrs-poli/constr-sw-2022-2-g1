import { CLIENT_SECRET } from "../config";
import {
  LoginRequestBody,
  LoginResponseBody,
  TokenRequestBody,
  User,
} from "../models/models";
import * as keycloak from "../external/keycloak";

export async function login(
  body: LoginRequestBody
): Promise<LoginResponseBody | null> {
  const tokenBody: TokenRequestBody = {
    client_id: body.client_id,
    client_secret: CLIENT_SECRET,
    username: body.username,
    password: body.password,
    grant_type: body.grant_type,
  };
  const tokenInfo = await keycloak.getToken(tokenBody);
  if (tokenInfo) {
    return {
      token_type: tokenInfo.token_type,
      access_token: tokenInfo.access_token,
      expires_in: tokenInfo.expires_in,
      refresh_token: tokenInfo.refresh_token,
      refresh_expires_in: tokenInfo.refresh_expires_in,
    };
  }
  return null;
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
