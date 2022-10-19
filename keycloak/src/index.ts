import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json";
import { API_PORT } from "./config";
import Router from "./routes/router";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const SWAGGER_ENDPOINT = `http://localhost:${API_PORT}/api-docs`;

const router = new Router(app);
router.setupRoutes();

app.listen(API_PORT, () => {
  console.log(`Backend running on port ${API_PORT}.\n`);
  console.log(`Swagger docs available at ${SWAGGER_ENDPOINT}.\n`);
});
