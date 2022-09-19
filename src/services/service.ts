import { CLIENT_SECRET } from "../config";
import {
  CreateUserRequestBody,
  LoginRequestBody,
  LoginResponseBody,
  TokenRequestBody,
  User,
} from "../interfaces/interfaces";
import * as keycloak from "../external/keycloak";

export async function login(
  body: LoginRequestBody
): Promise<LoginResponseBody> {
  const tokenBody: TokenRequestBody = {
    client_id: body.client_id,
    client_secret: CLIENT_SECRET,
    username: body.username,
    password: body.password,
    grant_type: body.grant_type,
  };
  const tokenInfo = await keycloak.getToken(tokenBody);
  if (!("error" in tokenInfo)) {
    return {
      token_type: tokenInfo.token_type,
      access_token: tokenInfo.access_token,
      expires_in: tokenInfo.expires_in,
      refresh_token: tokenInfo.refresh_token,
      refresh_expires_in: tokenInfo.refresh_expires_in,
    };
  }
  return tokenInfo; // Error.
}

export async function getAllUsers(accessToken: string): Promise<User[]> {
  return await keycloak.getAllUsers(accessToken);
}

export async function getUserById(
  id: string,
  accessToken: string
): Promise<User> {
  return await keycloak.getUserById(id, accessToken);
}

export async function createUser(
  user: CreateUserRequestBody,
  accessToken: string
): Promise<User> {
  return await keycloak.createUser(user, accessToken);
}

export async function updateUser(
  id: string,
  user: CreateUserRequestBody,
  accessToken: string
): Promise<boolean> {
  return await keycloak.updateUser(id, user, accessToken);
}

// NOT IMPLEMENTED YET.
export async function updateUserPassword(
  id: string,
  password: string
): Promise<boolean> {
  return false;
}

export async function deleteUser(
  id: string,
  accessToken: string
): Promise<boolean> {
  return await keycloak.deleteUser(id, accessToken);
}
