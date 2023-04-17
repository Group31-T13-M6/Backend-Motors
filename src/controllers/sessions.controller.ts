import { Request, Response } from "express";
import { createSessionsService } from "../services/sessions/createSessions.service";

const createSessionsController = async (req: Request, res: Response) => {
    const payload = req.validatedBody;
    const data = await createSessionsService(payload);
    return res.status(201).json(data);
};

export { createSessionsController };
