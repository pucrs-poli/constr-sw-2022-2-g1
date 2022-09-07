import express, { Express } from "express";
import Router from "./routes/router";

const app: Express = express();
app.use(express.json());

const port: number = 3000;

const router: Router = new Router(app);
router.setupRoutes();

app.listen(port, () => {
  console.log(`Backend running on port ${port}.`);
});
