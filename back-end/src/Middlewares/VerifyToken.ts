import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
interface TokenInterface {
  name: string;
  message: string;
  expiredAt: number;
}
export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.authorization.split(" ")[1] || "";
  const secret_key: string = process.env.SECRET_KEY || "ASD";

  try {
    jwt.verify(token, secret_key);
    next();
  } catch (err) {
    const typedError = err as TokenInterface;
    if (typedError.message === "jwt expired") {
      res.status(400).send({ message: "Expired" });
    }
    res.status(400).send({ message: "Bad Request" });
  }
}
