import express, { Express } from "express";
import Router, { HTTPMethod } from "./routes/router";
import { helloWorld } from "./controllers/controller";

const APP: Express = express();
const PORT: number = 3000;

const router: Router = new Router(APP);
/*
  Routes.
*/
router.addRoute("/", HTTPMethod.GET, helloWorld);

APP.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}.`);
});
