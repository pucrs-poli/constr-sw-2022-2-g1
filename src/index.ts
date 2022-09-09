import express from "express";
import { API_PORT } from "./config";
import Router from "./routes/router";

const app = express();
app.use(express.json());

const router = new Router(app);
router.setupRoutes();

app.listen(API_PORT, () => {
  console.log(`Backend running on port ${API_PORT}.`);
});
