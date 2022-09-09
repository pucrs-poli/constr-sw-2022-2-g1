import express, { Express } from "express";
import Router from "./routes/router";

const app = express();
app.use(express.json());

const port = 3000;

const router = new Router(app);
router.setupRoutes();

app.listen(port, () => {
  console.log(`Backend running on port ${port}.`);
});
