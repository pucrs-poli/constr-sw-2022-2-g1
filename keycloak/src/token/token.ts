import { RefreshTokenRequestBody } from "../interfaces/interfaces";
import * as keycloak from "../external/keycloak";
import { CLIENT_SECRET } from "../config";

export interface TokenUpdate {
  clientId: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
}

export default class GlobalToken {
  private static clientId: string = "";
  private static accessToken: string = "";
  private static expiresIn: number = 0;
  private static refreshToken: string = "";

  public static getAccessToken(): string {
    return this.accessToken;
  }
  public static getRefreshToken(): string {
    return this.refreshToken;
  }

  public static update(token: TokenUpdate): void {
    this.clientId = token.clientId;
    this.accessToken = token.accessToken;
    this.expiresIn = token.expiresIn;
    this.refreshToken = token.refreshToken;
    this.startUpdateTokenTimer();
  }

  private static currentTimer: NodeJS.Timeout | null = null;
  private static startUpdateTokenTimer() {
    if (this.currentTimer) {
      clearTimeout(this.currentTimer);
    }
    const milliseconds = this.expiresIn * 1000;
    this.currentTimer = setTimeout(async () => {
      const tokenBody: RefreshTokenRequestBody = {
        client_id: this.clientId,
        client_secret: CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: this.refreshToken,
      };
      try {
        const tokenInfo = await keycloak.refreshToken(tokenBody);
        this.update({
          clientId: this.clientId,
          accessToken: `Bearer ${tokenInfo.access_token}`,
          expiresIn: tokenInfo.expires_in,
          refreshToken: tokenInfo.refresh_token,
        });
        console.log("=> Token refreshed");
      } catch (error) {
        console.error("Error auto-refreshing token:", error);
      }
    }, milliseconds);
  }
}
