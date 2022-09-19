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

const USERS_ENDPOINT = `http://localhost:${KEYCLOAK_PORT}/auth/admin/realms/${REALM_NAME}/users`;

export async function getAllUsers(accessToken: string): Promise<User[] | null> {
  try {
    const response = await axios.get(USERS_ENDPOINT, {
      headers: {
        Authorization: accessToken,
      },
    });
    const users: User[] = response.data.map((user: any) => {
      return {
        sub: user.id,
        preferred_username: user.username,
        given_name: user.firstName || "",
        family_name: user.lastName || "",
        email: user.email || "",
      };
    });
    return users;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getUserById(
  id: string,
  accessToken: string
): Promise<User | null> {
  try {
    const response = await axios.get(`${USERS_ENDPOINT}/${id}`, {
      headers: {
        Authorization: accessToken,
      },
    });

    console.log(response);

    const user: User = {
      sub: response.data.id,
      preferred_username: response.data.username,
      given_name: response.data.firstName || "",
      family_name: response.data.lastName || "",
      email: response.data.email || "",
    };
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// endpoint equals to USER_ENDOIUNT
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
    /*
      POST returns no data, so we have to fetch the created user.
    */
    const userID = response.headers.location.split("/").slice(-1)[0];
    const user = await getUserById(userID, accessToken);
    return {
      sub: user?.sub || "",
      preferred_username: user?.preferred_username || "",
      given_name: user?.given_name || "",
      family_name: user?.family_name || "",
      email: user?.email || "",
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateUser(
  id: string,
  body: CreateUserRequestBody,
  accessToken: string
): Promise<User | null> {
  try {
    const response = await axios.put(`${USERS_ENDPOINT}/${id}`,
      { ...body, enabled: true },
      {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      }
    );
    return {} as User;
  } catch (error) {
    console.error(error);
    return null;
  }
}