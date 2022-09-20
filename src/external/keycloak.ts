import axios from "axios";
import qs from "qs";
import { KEYCLOAK_HOST, KEYCLOAK_PORT, REALM_NAME } from "../config";
import { APIError } from "../errors/errors";
import {
  TokenRequestBody,
  TokenResponseBody,
  CreateUserRequestBody,
  User,
  RefreshTokenRequestBody,
} from "../interfaces/interfaces";

const TOKEN_ENDPOINT = `http://${KEYCLOAK_HOST}:${KEYCLOAK_PORT}/auth/realms/${REALM_NAME}/protocol/openid-connect/token`;

export async function getToken(
  body: TokenRequestBody
): Promise<TokenResponseBody> {
  try {
    const response = await axios.post(TOKEN_ENDPOINT, qs.stringify(body), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data as TokenResponseBody;
  } catch (error: any) {
    console.log(error);

    throw new APIError(
      error?.response.status || 400,
      error?.response.data.error_description ||
        error?.response.data.error ||
        "Invalid username or password."
    );
  }
}

export async function refreshToken(body: RefreshTokenRequestBody) {
  try {
    const response = await axios.post(TOKEN_ENDPOINT, qs.stringify(body), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data as TokenResponseBody;
  } catch (error: any) {
    throw new APIError(
      error?.response.status || 400,
      error?.response.data.error_description ||
        error?.response.data.error ||
        "Invalid refresh token."
    );
  }
}

const USERS_ENDPOINT = `http://${KEYCLOAK_HOST}:${KEYCLOAK_PORT}/auth/admin/realms/${REALM_NAME}/users`;

export async function getAllUsers(accessToken: string): Promise<User[]> {
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
  } catch (error: any) {
    throw new APIError(
      error?.response.status || 400,
      error?.response.data.error_description ||
        error?.response.data.error ||
        "Error fetching all users."
    );
  }
}

export async function getUserById(
  id: string,
  accessToken: string
): Promise<User> {
  try {
    const response = await axios.get(`${USERS_ENDPOINT}/${id}`, {
      headers: {
        Authorization: accessToken,
      },
    });
    const user: User = {
      sub: response.data.id,
      preferred_username: response.data.username,
      given_name: response.data.firstName || "",
      family_name: response.data.lastName || "",
      email: response.data.email || "",
    };
    return user;
  } catch (error: any) {
    throw new APIError(
      error?.response.status || 400,
      error?.response.data.error_description ||
        error?.response.data.error ||
        "Error getting user by ID."
    );
  }
}

export async function createUser(
  body: CreateUserRequestBody,
  accessToken: string
): Promise<User> {
  try {
    const response = await axios.post(
      USERS_ENDPOINT,
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
  } catch (error: any) {
    throw new APIError(
      error?.response.status || 400,
      error?.response.data.error_description ||
        error?.response.data.error ||
        "Error creating user."
    );
  }
}

export async function updateUser(
  id: string,
  body: CreateUserRequestBody,
  accessToken: string
): Promise<void> {
  try {
    await axios.put(`${USERS_ENDPOINT}/${id}`, body, {
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    throw new APIError(
      error?.response.status || 400,
      error?.response.data.error_description ||
        error?.response.data.error ||
        "Error updating user."
    );
  }
}

export async function deleteUser(
  id: string,
  accessToken: string
): Promise<void> {
  try {
    await axios.delete(`${USERS_ENDPOINT}/${id}`, {
      headers: {
        Authorization: accessToken,
      },
    });
  } catch (error: any) {
    throw new APIError(
      error?.response.status || 400,
      error?.response.data.error_description ||
        error?.response.data.error ||
        "Error deleting user."
    );
  }
}

export async function updateUserPassword(
  id: string,
  password: string,
  accessToken: string
): Promise<void> {
  const UPDATE_PASSWORD_ENDPOINT = `http://${KEYCLOAK_HOST}:${KEYCLOAK_PORT}/auth/admin/realms/${REALM_NAME}/users/${id}/reset-password`;
  try {
    await axios.put(
      UPDATE_PASSWORD_ENDPOINT,
      { type: "password", value: password, temporary: false },
      {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: any) {
    throw new APIError(
      error?.response.status || 400,
      error?.response.data.error_description ||
        error?.response.data.error ||
        "Error updating password."
    );
  }
}
