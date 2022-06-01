import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../Types/User.interface";

export function login(req: Request, res: Response) {
  const { account = "", password = "" }: User = req.body.payload;
  res.sendStatus(400);
}

export async function register(req: Request, res: Response) {
  const payload: User = req.body.payload;
  console.log(payload);
  res
    .cookie("rememberme", "1", {
      expires: new Date(Date.now() + 900000),
      httpOnly: true,
    })
    .end();
}

export function refreshToken(req: Request, res: Response) {
  const user: User = req.body.payload;
  console.log(user);
  res.sendStatus(200);
}

function generateToken(payload: object) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET_KEY || "ASD", (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
}
