import express from "express";
import { updateAvatar } from "../controllers/auth.js";
import { upload } from "../middlewares/upload.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.patch("/avatars", authMiddleware, upload.single("avatar"), updateAvatar);

export default router;
