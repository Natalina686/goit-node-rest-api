import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import authRouter from "./routes/authRouter.js";
import contactsRouter from "./routes/contactsRouter.js";

const app = express();
const publicPath = path.resolve("public");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));
app.use('/avatars', express.static(path.join(publicPath, 'avatars')));

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});


export default app;