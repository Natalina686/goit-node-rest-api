import express from "express";
import { register, login } from "../controllers/authController.js";
import { logout } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { current } from "../controllers/authController.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.get("/current", authMiddleware, current);

export default router;