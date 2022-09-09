import axios from "axios";
import qs from "qs";
import { KEYCLOAK_PORT, REALM_NAME } from "../config";
import {
  TokenRequestBody,
  TokenResponseBody,
  CreateUserRequestBody,
  User,
} from "../models/models";

const TOKEN_ENDPOINT = `http://localhost:${KEYCLOAK_PORT}/auth/realms/${REALM_NAME}/protocol/openid-connect/token`;
export async function getToken(
  body: TokenRequestBody
): Promise<TokenResponseBody | null> {
  try {
    const response = await axios.post(TOKEN_ENDPOINT, qs.stringify(body), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data as TokenResponseBody;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const USER_INFO_ENDPOINT = `http://localhost:${KEYCLOAK_PORT}/auth/realms/${REALM_NAME}/protocol/openid-connect/userinfo`;
export async function getUserInfo(accessToken: string): Promise<User | null> {
  try {
    const response = await axios.get(USER_INFO_ENDPOINT, {
      headers: {
        Authorization: accessToken,
      },
    });
    return response.data as User;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const CREATE_USER_ENDPOINT = `http://localhost:${KEYCLOAK_PORT}/auth/admin/realms/${REALM_NAME}/users`;
export async function createUser(
  body: CreateUserRequestBody,
  accessToken: string
): Promise<User | null> {
  try {
    const response = await axios.post(
      CREATE_USER_ENDPOINT,
      { ...body, enabled: true },
      {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data as User;
  } catch (error) {
    console.error(error);
    return null;
  }
}
