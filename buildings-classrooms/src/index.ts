import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json";
import { API_PORT } from "./config";
import Router from "./routes/router";
import { startDatabase } from "./database/database";

/*
  Create a new express application instance and set middlewares.
*/
const app = express();
app.use(express.json());
app.use(cors());

/*
  MongoDB connection.
*/
(async () => {
  try {
    await startDatabase();
    console.log("[OK] Connected to MongoDB server.\n");
  } catch (error) {
    console.log("[FAIL] Error connecting to MongoDB server.\n", error);
    process.exit(1);
  }
})();

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
  console.log(`Buildings and Classrooms API running on port ${API_PORT}.\n`);
  console.log(
    `Buildings and Classrooms Swagger docs available at ${SWAGGER_ENDPOINT}.\n`
  );
});
