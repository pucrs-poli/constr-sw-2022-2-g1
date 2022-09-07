import axios from "axios";
import qs from "qs";
import { REALM_NAME } from "../config";
import {
  TokenRequestBody,
  TokenResponseBody,
  KeycloakUserResponseBody,
} from "../models/models";

const TOKEN_ENDPOINT = `http://localhost:8080/auth/realms/${REALM_NAME}/protocol/openid-connect/token`;
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

const USER_INFO_ENDPOINT = `http://localhost:8080/auth/realms/${REALM_NAME}/protocol/openid-connect/userinfo`;
export async function getUserInfo(
  accessToken: string
): Promise<KeycloakUserResponseBody | null> {
  try {
    const response = await axios.get(USER_INFO_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data as KeycloakUserResponseBody;
  } catch (error) {
    console.error(error);
    return null;
  }
}
