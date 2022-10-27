import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json";
import { API_PORT } from "./config";
import Router from "./routes/router";

/*
  Create a new express application instance and set middlewares.
*/
const app = express();
app.use(express.json());
app.use(cors());

/*
  Swagger Documentation.
*/
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const SWAGGER_ENDPOINT = `http://localhost:${API_PORT}/api-docs`;

/*
  API Routes.
*/
const router = new Router(app);
router.setupRoutes();

/*
  Start the API server.
*/
app.listen(API_PORT, () => {
  console.log(`Backend running on port ${API_PORT}.\n`);
  console.log(`Swagger docs available at ${SWAGGER_ENDPOINT}.\n`);
});
