/*
    Keycloak API configuration.
*/
export const KEYCLOAK_API_HOST = process.env.KEYCLOAK_API_HOST || "localhost";
export const KEYCLOAK_API_PORT = parseInt(
  process.env.KEYCLOAK_API_PORT || "3000"
);

/*
    MongoDB configuration.
*/
export const MONGODB_HOST = process.env.MONGO_DB_HOST || "localhost";
export const MONGODB_PORT = parseInt(process.env.MONGO_DB_PORT || "27017");

/*
    API configuration.
*/
export const API_PORT = parseInt(process.env.API_PORT || "8081");
