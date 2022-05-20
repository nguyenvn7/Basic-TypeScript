import { Request, Response, Router } from "express";
const router = Router();

router
  .post("/api/login", (req: Request, res: Response) => {
    res.send("200");
  })
  .post("/api/register", (req: Request, res: Response) => {
    res.send("200");
  });
export default router;
