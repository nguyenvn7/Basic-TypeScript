import { Application } from "express";
import routerAuthentication from "./Authentication.route";

export function route(app: Application) {
  app.use(routerAuthentication);
}
