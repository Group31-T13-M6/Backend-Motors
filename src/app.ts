import express from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import { errorHandler } from "./errors";
import { announcementRoutes } from "./routes/announcement";
import { userRoutes } from "./routes/users";
import { sessionsRoutes } from "./routes/sessions";
import { commentsRoutes } from "./routes/comments";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/announcements", announcementRoutes);
app.use("/comments", commentsRoutes);

app.use("/users", userRoutes);

app.use("/login", sessionsRoutes);

app.use(errorHandler);

export default app;
