import { Router } from "express";
import { login, register } from "../Controllers/Authentication.controller";
import { verifyToken } from "../Middlewares/VerifyToken";

const router = Router();

router.post("/api/login", verifyToken, login).post("/api/register", register);
export default router;
