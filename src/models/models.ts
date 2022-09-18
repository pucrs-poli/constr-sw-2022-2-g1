export interface LoginRequestBody {
  client_id: string;
  username: string;
  password: string;
  grant_type: string;
}
export interface LoginResponseBody {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
}
export interface User {
  sub?: string;
  email_verified?: boolean;
  name?: string;
  preferred_username?: string;
  given_name?: string;
  family_name?: string;
  email?: string;
}
export interface CreateUserRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}
export interface TokenRequestBody {
  client_id: string;
  client_secret: string;
  username: string;
  password: string;
  grant_type: string;
}
export interface TokenResponseBody {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  "not-before-policy": number;
  session_state: string;
  scope: string;
}
