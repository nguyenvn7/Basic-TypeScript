import express, { Application, Request, Response } from "express";
import { route } from "./Routes";
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
const app: Application = express();

app.use(express.json());

route(app);

app.listen(process.env.PORT || 5000, () => {
  console.log(`App listening on port ${process.env.PORT || 5000}`);
});
