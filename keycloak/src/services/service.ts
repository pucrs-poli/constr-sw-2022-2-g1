import { CLIENT_SECRET } from "../config";
import {
  CreateUserRequestBody,
  LoginRequestBody,
  LoginResponseBody,
  TokenRequestBody,
  User,
} from "../interfaces/interfaces";
import * as keycloak from "../external/keycloak";
import GlobalToken from "../token/token";

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
  GlobalToken.update({
    clientId: body.client_id,
    accessToken: `Bearer ${tokenInfo.access_token}`,
    expiresIn: tokenInfo.expires_in,
    refreshToken: tokenInfo.refresh_token,
  });
  return {
    token_type: tokenInfo.token_type,
    access_token: tokenInfo.access_token,
    expires_in: tokenInfo.expires_in,
    refresh_token: tokenInfo.refresh_token,
    refresh_expires_in: tokenInfo.refresh_expires_in,
  };
}

export async function getAllUsers(): Promise<User[]> {
  const accessToken = GlobalToken.getAccessToken();
  return await keycloak.getAllUsers(accessToken);
}

export async function getUserById(id: string): Promise<User> {
  const accessToken = GlobalToken.getAccessToken();
  return await keycloak.getUserById(id, accessToken);
}

export async function createUser(user: CreateUserRequestBody): Promise<User> {
  const accessToken = GlobalToken.getAccessToken();
  return await keycloak.createUser(user, accessToken);
}

export async function updateUser(
  id: string,
  user: CreateUserRequestBody
): Promise<void> {
  const accessToken = GlobalToken.getAccessToken();
  await keycloak.updateUser(id, user, accessToken);
}

export async function updateUserPassword(
  id: string,
  password: string
): Promise<void> {
  const accessToken = GlobalToken.getAccessToken();
  await keycloak.updateUserPassword(id, password, accessToken);
}

export async function deleteUser(id: string): Promise<void> {
  const accessToken = GlobalToken.getAccessToken();
  await keycloak.deleteUser(id, accessToken);
}
