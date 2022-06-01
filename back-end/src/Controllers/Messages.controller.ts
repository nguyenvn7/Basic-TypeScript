import { Request, Response } from "express";
import { User } from "../Types/User.interface";

export function messages(req: Request, res: Response) {
  const { account = "", password = "" }: User = req.body.payload;
  console.log(account, password);
  res.sendStatus(400);
}
