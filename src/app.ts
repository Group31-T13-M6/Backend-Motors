import "express-async-errors";
import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";
import { errorHandler } from "./errors";

const app = express();

app.use(express.json());
app.use(cors());

// Test: Visualizar se o servidor está rodando corretamente
app.get("/test", async (req: Request, res: Response) => {
  return res.status(200).json("Hello world");
});

// Rotas serão postas aqui, exemplo: app.use(/users, userRoutes)

app.use(errorHandler);

export default app;
