/*
    Keycloak configuration.
*/
export const KEYCLOAK_PORT = parseInt(process.env.KEYCLOAK_API_PORT || "8080");
export const KEYCLOAK_HOST = process.env.KEYCLOAK_HOST || "http://localhost";
export const REALM_NAME = process.env.REALM_NAME || "";
export const CLIENT_SECRET = process.env.CLIENT_SECRET || "";

/*
    API configuration.
*/
export const API_PORT = parseInt(process.env.KEYCLOAK_API_PORT || "3000");
