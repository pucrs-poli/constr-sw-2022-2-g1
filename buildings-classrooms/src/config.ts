/*
    Keycloak API configuration.
*/
export const KEYCLOAK_API_HOST =
  process.env.KEYCLOAK_API_HOST || "http://localhost";
export const KEYCLOAK_API_PORT = parseInt(
  process.env.KEYCLOAK_API_PORT || "3000"
);

/*
    MongoDB configuration.
*/
export const MONGODB_HOST = process.env.MONGODB_HOST || "http://localhost";
export const MONGODB_PORT = parseInt(process.env.MONGODB_PORT || "27017");
export const MONGODB_USER = process.env.MONGODB_USER || "admin";
export const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || "a12345678";

/*
    API configuration.
*/
export const API_PORT = parseInt(process.env.API_PORT || "8081");
