import { Request, Response, Router } from "express";
const router = Router();

interface Login {
  userName: string;
  password: string;
}
export interface User {
  userID: string;
  account: string;
  userName: string;
  password: string;
  phoneNumber: string;
}

router
  .post("/api/login", (req: Request, res: Response) => {
    const { userName = "", password = "" }: Login = req.body.payload;
    console.log(userName, password);
    res.send("200");
  })
  .post("/api/register", (req: Request, res: Response) => {
    const payload: User = req.body.payload;
    console.log("payload", payload.account);
    res.send("200");
  });
export default router;
