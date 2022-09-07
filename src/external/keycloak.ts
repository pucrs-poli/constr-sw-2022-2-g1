import axios from "axios";
import qs from "qs";
import { REALM_NAME } from "../config";
import { TokenRequestBody, TokenResponseBody } from "../models/models";

const KEYCLOAK_OPTIONS = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

const TOKEN_ENDPOINT = `http://localhost:8080/auth/realms/${REALM_NAME}/protocol/openid-connect/token`;
export async function getToken(
  body: TokenRequestBody
): Promise<TokenResponseBody | null> {
  try {
    const response = await axios.post(
      TOKEN_ENDPOINT,
      qs.stringify(body),
      KEYCLOAK_OPTIONS
    );
    return response.data as TokenResponseBody;
  } catch (error) {
    console.error(error);
    return null;
  }
}
