import { CLIENT_SECRET } from "../config";
import {
  CreateUserRequestBody,
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

export async function getAllUsers(accessToken: string): Promise<User[] | null> {
  const users = await keycloak.getAllUsers(accessToken);
  return users;
}

export async function getUserById(
  id: string,
  accessToken: string
): Promise<User | null> {
  const user = await keycloak.getUserById(id, accessToken);
  return user;
}

export async function createUser(
  user: CreateUserRequestBody,
  accessToken: string
): Promise<User | null> {
  const newUser = await keycloak.createUser(user, accessToken);
  if (newUser) {
    return newUser;
  }
  return null;
}

// NOT IMPLEMENTED YET.
export function updateUser(user: User): User {
  return {
    email_verified: false,
    name: "",
    preferred_username: "",
    given_name: "",
    family_name: "",
    email: "",
  };
}

// NOT IMPLEMENTED YET.
export function updateUserPassword(id: string, password: string): boolean {
  return true;
}

// NOT IMPLEMENTED YET.
export function deleteUser(id: string): boolean {
  return true;
}
