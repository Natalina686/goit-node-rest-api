import fs from "fs/promises";
import path from "path";
import User from "../models/userModel.js";

const avatarsDir = path.resolve("public", "avatars");

export const updateAvatar = async (req, res, next) => {
  try {
  const { file, user } = req;

  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

   await fs.mkdir(avatarsDir, { recursive: true });

  const ext = path.extname(file.originalname);
  const newFileName = `${user.id}${ext}`;

  const tempPath = file.path;
  const finalPath = path.join(avatarsDir, newFileName);

  await fs.rename(tempPath, finalPath);

  const avatarURL = `/avatars/${newFileName}`;

  await User.update({ avatarURL }, { where: { id: user.id } });

  res.json({ avatarURL });
} catch (error) {
    next(error);
  }
};
