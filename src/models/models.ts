export interface LoginRequestBody {
  clientId: string;
  username: string;
  password: string;
  grantType: string;
}

export interface LoginResponseBody {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  refreshExpiresIn: number;
}

export interface User {
  id?: string;
  username: string;
  // ... What does an user have?
}
