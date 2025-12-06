import express from "express";
import { register, login } from "../controllers/authController.js";
import { logout } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { current } from "../controllers/authController.js";
import { updateAvatar } from "../controllers/authController.js";
import { upload } from "../middlewares/upload.js";



const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.get("/current", authMiddleware, current);
router.patch("/avatars", authMiddleware, upload.single("avatar"), updateAvatar);


export default router;